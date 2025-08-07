<?php
/**
 * EGroupware AI Assistant - Business Logic
 *
 * @link http://www.egroupware.org  
 * @package ai-assistant
 * @copyright (c) 2025 EGroupware Team
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 */

namespace EGroupware\AIAssistant;

use EGroupware\Api;

/**
 * Business logic for AI Assistant
 */
class Bo
{
	/**
	 * Storage object
	 * @var So
	 */
	protected $so;
	
	/**
	 * Constructor
	 */
	public function __construct()
	{
		$this->so = new So();
	}
	
	/**
	 * Send a message to the AI and get response
	 */
	public function send_message($message)
	{
		$account_id = $GLOBALS['egw_info']['user']['account_id'];
		
		// Save user message with conversation title if it's the first message
		$history = $this->so->get_user_history($account_id, 1);
		$conversation_title = empty($history) ? $this->generate_conversation_title($message) : null;
		
		$this->so->save_message($account_id, 'user', $message, null, $conversation_title);
		
		// Get AI configuration
		$api_config = $this->get_ai_config();
		if (empty($api_config['api_key'])) {
			throw new \Exception('AI API not configured. Please contact your administrator.');
		}
		
		// Prepare conversation history
		$history = $this->so->get_user_history($account_id, 10); // Last 10 messages for context
		$messages = $this->prepare_messages($history, $message);
		
		// Get AI response
		$start_time = microtime(true);
		$response = $this->call_ai_api($api_config, $messages);
		$response_time = round((microtime(true) - $start_time) * 1000); // Convert to milliseconds
		
		// Save AI response with metrics
		$tool_calls = $response['tool_calls'] ?? null;
		$tokens_used = $response['usage']['total_tokens'] ?? 0;
		$this->so->save_message($account_id, 'assistant', $response['content'], $tool_calls, null, $tokens_used, $response_time);
		
		return $response;
	}
	
	/**
	 * Get user chat history
	 */
	public function get_user_history($limit = 50)
	{
		$account_id = $GLOBALS['egw_info']['user']['account_id'];
		return $this->so->get_user_history($account_id, $limit);
	}
	
	/**
	 * Clear user chat history
	 */
	public function clear_user_history()
	{
		$account_id = $GLOBALS['egw_info']['user']['account_id'];
		return $this->so->clear_user_history($account_id);
	}
	
	/**
	 * Get AI configuration
	 */
	private function get_ai_config()
	{
		$api_url = $this->so->get_config('ai_api_url', 'https://api.openai.com/v1');
		$model = $this->so->get_config('ai_model', 'gpt-4o-mini');
		
		// Clean up model name - remove provider prefix if present
		if (strpos($model, ':') !== false) {
			$model = explode(':', $model)[1];
		}
		
		return [
			'api_url' => $api_url,
			'api_key' => $this->so->get_config('ai_api_key'),
			'model' => $model,
		];
	}
	
	/**
	 * Prepare messages for AI API
	 */
	private function prepare_messages($history, $new_message)
	{
		$messages = [];
		
		// System prompt
		$messages[] = [
			'role' => 'system',
			'content' => $this->get_system_prompt()
		];
		
		// Add conversation history
		foreach ($history as $entry) {
			$messages[] = [
				'role' => $entry['message_type'],
				'content' => $entry['message_content']
			];
		}
		
		// Add new user message
		$messages[] = [
			'role' => 'user',
			'content' => $new_message
		];
		
		return $messages;
	}
	
	/**
	 * Get system prompt for AI
	 */
	private function get_system_prompt()
	{
		$user_name = $GLOBALS['egw_info']['user']['account_fullname'] ?: $GLOBALS['egw_info']['user']['account_lid'];
		
		return "You are an AI assistant integrated into EGroupware, helping user '{$user_name}' with their daily business tasks. " .
			   "You have access to EGroupware's internal APIs and can perform real actions. Available functions include:\n\n" .
			   "CONTACTS:\n" .
			   "- create_contact: Create new contacts with name, email, phone, organization, title, notes\n" .
			   "- search_contacts: Search existing contacts by name, email, company, etc.\n\n" .
			   "CALENDAR:\n" .
			   "- create_calendar_event: Schedule meetings/appointments with title, time, location, attendees\n" .
			   "- search_calendar_events: Find existing events by date range or search terms\n\n" .
			   "TASKS:\n" .
			   "- create_task: Create tasks in InfoLog with title, description, due date, priority, assignments\n\n" .
			   "EMAIL:\n" .
			   "- send_email: Send emails through EGroupware with to/cc/bcc recipients\n\n" .
			   "When users ask you to perform actions, use the appropriate tools and confirm what you've done. " .
			   "Be helpful, concise, and professional. Ask for clarification if needed parameters are missing. " .
			   "Always confirm successful operations and provide useful details like IDs or URLs when available.";
	}
	
	/**
	 * Call AI API
	 */
	private function call_ai_api($config, $messages)
	{
		$tools = $this->get_available_tools();
		
		$data = [
			'model' => $config['model'],
			'messages' => $messages,
			'tools' => $tools,
			'tool_choice' => 'auto',
			'temperature' => 0.7,
			'max_tokens' => 1000
		];
		
		$headers = [
			'Content-Type: application/json',
			'Authorization: Bearer ' . $config['api_key']
		];
		
		// Make API request
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $config['api_url'] . '/chat/completions');
		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
		curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_TIMEOUT, 30);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
		
		$response = curl_exec($ch);
		$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
		$curl_error = curl_error($ch);
		curl_close($ch);
		
		if ($curl_error) {
			throw new \Exception('API request failed: ' . $curl_error);
		}
		
		if ($http_code !== 200) {
			$error_details = '';
			if ($response) {
				$error_response = json_decode($response, true);
				$error_details = $error_response['error']['message'] ?? $response;
			}
			
			$error_message = "AI API request failed with status: $http_code";
			if ($error_details) {
				$error_message .= " - " . $error_details;
			}
			
			// Add debugging info for common errors
			if ($http_code === 401) {
				$error_message .= "\nPlease verify your API key is correct and has the necessary permissions.";
			} elseif ($http_code === 404) {
				$error_message .= "\nPlease check the API URL: " . $config['api_url'];
			}
			
			throw new \Exception($error_message);
		}
		
		$result = json_decode($response, true);
		if (!$result || !isset($result['choices'][0]['message'])) {
			throw new \Exception('Invalid AI API response format');
		}
		
		$ai_message = $result['choices'][0]['message'];
		
		// Execute tools if requested
		if (!empty($ai_message['tool_calls'])) {
			$ai_message['tool_calls'] = $this->execute_tools($ai_message['tool_calls']);
		}
		
		return [
			'content' => $ai_message['content'] ?? 'I processed your request.',
			'tool_calls' => $ai_message['tool_calls'] ?? null,
			'usage' => $result['usage'] ?? null
		];
	}
	
	/**
	 * Get available tools for AI
	 */
	private function get_available_tools()
	{
		return [
			[
				'type' => 'function',
				'function' => [
					'name' => 'create_contact',
					'description' => 'Create a new contact in EGroupware addressbook',
					'parameters' => [
						'type' => 'object',
						'properties' => [
							'first_name' => ['type' => 'string', 'description' => 'First name'],
							'last_name' => ['type' => 'string', 'description' => 'Last name'],
							'email' => ['type' => 'string', 'description' => 'Email address'],
							'phone' => ['type' => 'string', 'description' => 'Phone number'],
							'organization' => ['type' => 'string', 'description' => 'Organization/Company'],
							'title' => ['type' => 'string', 'description' => 'Job title'],
							'notes' => ['type' => 'string', 'description' => 'Additional notes']
						],
						'required' => ['first_name', 'last_name']
					]
				]
			],
			[
				'type' => 'function',
				'function' => [
					'name' => 'search_contacts',
					'description' => 'Search for contacts in EGroupware addressbook',
					'parameters' => [
						'type' => 'object',
						'properties' => [
							'query' => ['type' => 'string', 'description' => 'Search query (name, email, company, etc.)'],
							'limit' => ['type' => 'integer', 'description' => 'Maximum results to return', 'default' => 10]
						],
						'required' => ['query']
					]
				]
			],
			[
				'type' => 'function',
				'function' => [
					'name' => 'create_calendar_event',
					'description' => 'Create a calendar event in EGroupware',
					'parameters' => [
						'type' => 'object',
						'properties' => [
							'title' => ['type' => 'string', 'description' => 'Event title'],
							'description' => ['type' => 'string', 'description' => 'Event description'],
							'start_time' => ['type' => 'string', 'description' => 'Start time (YYYY-MM-DD HH:MM)'],
							'end_time' => ['type' => 'string', 'description' => 'End time (YYYY-MM-DD HH:MM)'],
							'location' => ['type' => 'string', 'description' => 'Event location'],
							'attendees' => ['type' => 'array', 'items' => ['type' => 'string'], 'description' => 'List of attendee email addresses']
						],
						'required' => ['title', 'start_time']
					]
				]
			],
			[
				'type' => 'function',
				'function' => [
					'name' => 'search_calendar_events',
					'description' => 'Search for calendar events in EGroupware',
					'parameters' => [
						'type' => 'object',
						'properties' => [
							'start_date' => ['type' => 'string', 'description' => 'Start date for search (YYYY-MM-DD)'],
							'end_date' => ['type' => 'string', 'description' => 'End date for search (YYYY-MM-DD)'],
							'query' => ['type' => 'string', 'description' => 'Search query for title/description'],
							'limit' => ['type' => 'integer', 'description' => 'Maximum results to return', 'default' => 10]
						]
					]
				]
			],
			[
				'type' => 'function',
				'function' => [
					'name' => 'send_email',
					'description' => 'Send an email through EGroupware',
					'parameters' => [
						'type' => 'object',
						'properties' => [
							'to' => ['type' => 'array', 'items' => ['type' => 'string'], 'description' => 'Recipient email addresses'],
							'subject' => ['type' => 'string', 'description' => 'Email subject'],
							'body' => ['type' => 'string', 'description' => 'Email body content'],
							'cc' => ['type' => 'array', 'items' => ['type' => 'string'], 'description' => 'CC recipients (optional)'],
							'bcc' => ['type' => 'array', 'items' => ['type' => 'string'], 'description' => 'BCC recipients (optional)']
						],
						'required' => ['to', 'subject', 'body']
					]
				]
			],
			[
				'type' => 'function',
				'function' => [
					'name' => 'create_task',
					'description' => 'Create a task in EGroupware InfoLog',
					'parameters' => [
						'type' => 'object',
						'properties' => [
							'title' => ['type' => 'string', 'description' => 'Task title'],
							'description' => ['type' => 'string', 'description' => 'Task description'],
							'due_date' => ['type' => 'string', 'description' => 'Due date (YYYY-MM-DD)'],
							'priority' => ['type' => 'string', 'enum' => ['low', 'normal', 'high', 'urgent'], 'description' => 'Task priority'],
							'assigned_to' => ['type' => 'string', 'description' => 'Email of person to assign task to'],
							'category' => ['type' => 'string', 'description' => 'Task category']
						],
						'required' => ['title']
					]
				]
			]
		];
	}
	
	/**
	 * Execute tool calls using EGroupware internal APIs
	 */
	private function execute_tools($tool_calls)
	{
		$results = [];
		
		foreach ($tool_calls as $tool_call) {
			$function_name = $tool_call['function']['name'];
			$arguments = json_decode($tool_call['function']['arguments'], true);
			
			try {
				switch ($function_name) {
					case 'create_contact':
						$result = $this->create_contact_internal($arguments);
						break;
						
					case 'search_contacts':
						$result = $this->search_contacts_internal($arguments);
						break;
						
					case 'create_calendar_event':
						$result = $this->create_calendar_event_internal($arguments);
						break;
						
					case 'send_email':
						$result = $this->send_email_internal($arguments);
						break;
						
					case 'search_calendar_events':
						$result = $this->search_calendar_events_internal($arguments);
						break;
						
					case 'create_task':
						$result = $this->create_task_internal($arguments);
						break;
						
					default:
						$result = ['error' => 'Unknown tool: ' . $function_name];
				}
				
				$results[] = [
					'id' => $tool_call['id'],
					'function' => $tool_call['function'],
					'result' => $result
				];
				
			} catch (\Exception $e) {
				$results[] = [
					'id' => $tool_call['id'],
					'function' => $tool_call['function'],
					'result' => ['error' => $e->getMessage()]
				];
			}
		}
		
		return $results;
	}
	
	/**
	 * Create contact using EGroupware internal API
	 */
	private function create_contact_internal($args)
	{
		if (!class_exists('addressbook_bo')) {
			throw new \Exception('Addressbook application not available');
		}
		
		$contacts = new \addressbook_bo();
		
		$contact_data = [
			'n_given' => $args['first_name'],
			'n_family' => $args['last_name'],
			'email' => $args['email'] ?? '',
			'tel_work' => $args['phone'] ?? '',
			'org_name' => $args['organization'] ?? '',
			'title' => $args['title'] ?? '',
			'note' => $args['notes'] ?? '',
			'owner' => $GLOBALS['egw_info']['user']['account_id']
		];
		
		$contact_id = $contacts->save($contact_data);
		
		if ($contact_id) {
			return [
				'success' => true,
				'contact_id' => $contact_id,
				'message' => "Contact '{$args['first_name']} {$args['last_name']}' created successfully"
			];
		} else {
			throw new \Exception('Failed to create contact');
		}
	}
	
	/**
	 * Search contacts using EGroupware internal API
	 */
	private function search_contacts_internal($args)
	{
		if (!class_exists('addressbook_bo')) {
			throw new \Exception('Addressbook application not available');
		}
		
		$contacts = new \addressbook_bo();
		$results = $contacts->search($args['query'], false, '', '', '%', false, 'OR', [0, $args['limit'] ?? 10]);
		
		$formatted_results = [];
		if ($results) {
			foreach ($results as $contact) {
				$formatted_results[] = [
					'id' => $contact['id'],
					'name' => $contact['n_fn'],
					'email' => $contact['email'],
					'phone' => $contact['tel_work'],
					'organization' => $contact['org_name'],
					'title' => $contact['title']
				];
			}
		}
		
		return [
			'success' => true,
			'results' => $formatted_results,
			'count' => count($formatted_results)
		];
	}
	
	/**
	 * Create calendar event using EGroupware internal API
	 */
	private function create_calendar_event_internal($args)
	{
		if (!class_exists('calendar_bo')) {
			throw new \Exception('Calendar application not available');
		}
		
		$cal = new \calendar_bo();
		
		$start_time = strtotime($args['start_time']);
		$end_time = isset($args['end_time']) ? strtotime($args['end_time']) : $start_time + 3600; // Default 1 hour
		
		$participants = [$GLOBALS['egw_info']['user']['account_id'] => 'A'];
		
		// Add attendees if provided
		if (!empty($args['attendees'])) {
			foreach ($args['attendees'] as $email) {
				$account = $GLOBALS['egw']->accounts->name2id($email, 'account_email');
				if ($account) {
					$participants[$account] = 'U'; // Unknown status
				}
			}
		}
		
		$event_data = [
			'title' => $args['title'],
			'description' => $args['description'] ?? '',
			'start' => $start_time,
			'end' => $end_time,
			'location' => $args['location'] ?? '',
			'owner' => $GLOBALS['egw_info']['user']['account_id'],
			'participants' => $participants
		];
		
		$event_id = $cal->save($event_data);
		
		if ($event_id) {
			return [
				'success' => true,
				'event_id' => $event_id,
				'message' => "Calendar event '{$args['title']}' created successfully"
			];
		} else {
			throw new \Exception('Failed to create calendar event');
		}
	}
	
	/**
	 * Search calendar events using EGroupware internal API
	 */
	private function search_calendar_events_internal($args)
	{
		if (!class_exists('calendar_bo')) {
			throw new \Exception('Calendar application not available');
		}
		
		$cal = new \calendar_bo();
		
		$start_date = isset($args['start_date']) ? strtotime($args['start_date']) : time();
		$end_date = isset($args['end_date']) ? strtotime($args['end_date']) : strtotime('+1 month');
		
		$events = $cal->search([
			'start' => $start_date,
			'end' => $end_date,
			'users' => $GLOBALS['egw_info']['user']['account_id'],
			'query' => $args['query'] ?? ''
		]);
		
		$formatted_results = [];
		if ($events) {
			$count = 0;
			foreach ($events as $event) {
				if ($count >= ($args['limit'] ?? 10)) break;
				
				$formatted_results[] = [
					'id' => $event['id'],
					'title' => $event['title'],
					'description' => $event['description'],
					'start_time' => date('Y-m-d H:i', $event['start']),
					'end_time' => date('Y-m-d H:i', $event['end']),
					'location' => $event['location']
				];
				$count++;
			}
		}
		
		return [
			'success' => true,
			'results' => $formatted_results,
			'count' => count($formatted_results)
		];
	}
	
	/**
	 * Send email using EGroupware internal API
	 */
	private function send_email_internal($args)
	{
		if (!class_exists('mail_bo')) {
			throw new \Exception('Mail application not available');
		}
		
		$mail = new \mail_bo();
		
		$to = is_array($args['to']) ? implode(', ', $args['to']) : $args['to'];
		$cc = !empty($args['cc']) ? (is_array($args['cc']) ? implode(', ', $args['cc']) : $args['cc']) : '';
		$bcc = !empty($args['bcc']) ? (is_array($args['bcc']) ? implode(', ', $args['bcc']) : $args['bcc']) : '';
		
		$email_data = [
			'to' => $to,
			'cc' => $cc,
			'bcc' => $bcc,
			'subject' => $args['subject'],
			'body' => $args['body'],
			'content_type' => 'text/plain'
		];
		
		try {
			$result = $mail->send($email_data);
			
			return [
				'success' => true,
				'message' => "Email sent successfully to: $to"
			];
		} catch (\Exception $e) {
			throw new \Exception('Failed to send email: ' . $e->getMessage());
		}
	}
	
	/**
	 * Create task using EGroupware internal API
	 */
	private function create_task_internal($args)
	{
		if (!class_exists('infolog_bo')) {
			throw new \Exception('InfoLog application not available');
		}
		
		$infolog = new \infolog_bo();
		
		$task_data = [
			'info_type' => 'task',
			'info_subject' => $args['title'],
			'info_des' => $args['description'] ?? '',
			'info_startdate' => time(),
			'info_priority' => $this->map_priority($args['priority'] ?? 'normal'),
			'info_responsible' => $GLOBALS['egw_info']['user']['account_id'],
			'info_owner' => $GLOBALS['egw_info']['user']['account_id']
		];
		
		// Set due date if provided
		if (!empty($args['due_date'])) {
			$task_data['info_enddate'] = strtotime($args['due_date']);
		}
		
		// Assign to user if provided
		if (!empty($args['assigned_to'])) {
			$account = $GLOBALS['egw']->accounts->name2id($args['assigned_to'], 'account_email');
			if ($account) {
				$task_data['info_responsible'] = $account;
			}
		}
		
		// Set category if provided
		if (!empty($args['category'])) {
			$task_data['info_cat'] = $args['category'];
		}
		
		$task_id = $infolog->write($task_data);
		
		if ($task_id) {
			return [
				'success' => true,
				'task_id' => $task_id,
				'message' => "Task '{$args['title']}' created successfully"
			];
		} else {
			throw new \Exception('Failed to create task');
		}
	}
	
	/**
	 * Map priority strings to InfoLog priority numbers
	 */
	private function map_priority($priority)
	{
		switch (strtolower($priority)) {
			case 'low': return 1;
			case 'normal': return 2;
			case 'high': return 3;
			case 'urgent': return 4;
			default: return 2; // normal
		}
	}

	/**
	 * Get rows for nextmatch widget (EGroupware standard pattern)
	 *
	 * @param array &$query Query parameters
	 * @param array &$rows Returned rows
	 * @param array &$readonlys Read-only status for rows
	 * @return int Total number of rows
	 */
	public function get_rows(&$query, &$rows, &$readonlys)
	{
		$account_id = $GLOBALS['egw_info']['user']['account_id'];
		
		// Build search criteria
		$criteria = array();
		
		if (!empty($query['search']))
		{
			$criteria['search'] = $query['search'];
		}
		
		if (!empty($query['filter']))
		{
			$criteria['message_type'] = $query['filter'];
		}
		
		// Add account filter if not admin
		if (!$GLOBALS['egw']->acl->check('admin', 1, 'ai-assistant'))
		{
			$criteria['account_id'] = $account_id;
		}
		
		// Set up ordering
		$order = $query['order'] ?? 'created';
		$sort = $query['sort'] ?? 'DESC';
		
		// Get total count
		$total = $this->so->total($criteria);
		
		// Get actual data
		$start = $query['start'] ?? 0;
		$num_rows = $query['num_rows'] ?? 25;
		
		$conversations = $this->so->search($criteria, $start, $num_rows, $order, $sort);
		
		$rows = array();
		$readonlys = array();
		
		foreach ($conversations as $conv)
		{
			$row = array(
				'history_id' => $conv['history_id'],
				'conversation_title' => $this->get_conversation_title($conv),
				'message_content' => substr($conv['message_content'], 0, 100) . '...',
				'message_type' => $conv['message_type'],
				'account_id' => $conv['account_id'],
				'created' => $conv['created'],
				'modified' => $conv['modified'] ?? $conv['created'],
				'tool_calls' => $conv['tool_calls'],
			);
			
			// Add user info
			if ($conv['account_id'])
			{
				$user = $GLOBALS['egw']->accounts->read($conv['account_id']);
				$row['account_fullname'] = $user ? $user['account_fullname'] : 'Unknown';
			}
			
			$rows[] = $row;
			
			// Set read-only status
			$readonlys[] = array();
		}
		
		return $total;
	}

	/**
	 * Search conversations
	 *
	 * @param array $criteria Search criteria
	 * @param int $start Start index
	 * @param int $limit Number of results
	 * @param string $order Order field
	 * @param string $sort Sort direction
	 * @return array
	 */
	public function search($criteria = array(), $start = 0, $limit = 25, $order = 'created', $sort = 'DESC')
	{
		return $this->so->search($criteria, $start, $limit, $order, $sort);
	}

	/**
	 * Read a single conversation record
	 *
	 * @param int $id History ID
	 * @return array|false
	 */
	public function read($id)
	{
		return $this->so->read($id);
	}

	/**
	 * Save conversation data
	 *
	 * @param array $data Conversation data
	 * @return int|false Record ID on success, false on failure
	 */
	public function save($data)
	{
		// Set timestamps
		if (empty($data['history_id']))
		{
			$data['created'] = time();
		}
		$data['modified'] = time();
		
		return $this->so->save($data);
	}

	/**
	 * Delete conversation(s)
	 *
	 * @param int|array $ids ID or array of IDs to delete
	 * @return bool
	 */
	public function delete($ids)
	{
		if (!is_array($ids))
		{
			$ids = array($ids);
		}
		
		$deleted = 0;
		foreach ($ids as $id)
		{
			if ($this->so->delete($id))
			{
				$deleted++;
			}
		}
		
		return $deleted;
	}

	/**
	 * Get total count of conversations
	 *
	 * @param array $criteria Search criteria
	 * @return int
	 */
	public function total($criteria = array())
	{
		return $this->so->total($criteria);
	}

	/**
	 * Get conversation title for display
	 *
	 * @param array $conversation Conversation data
	 * @return string
	 */
	private function get_conversation_title($conversation)
	{
		if (!empty($conversation['conversation_title']))
		{
			return $conversation['conversation_title'];
		}
		
		if (!empty($conversation['message_content']))
		{
			$content = strip_tags($conversation['message_content']);
			return strlen($content) > 50 ? substr($content, 0, 47) . '...' : $content;
		}
		
		return lang('AI Conversation') . ' #' . $conversation['history_id'];
	}

	/**
	 * Link registry methods for EGroupware integration
	 */

	/**
	 * Query for link registry
	 *
	 * @param string $pattern Search pattern
	 * @param array $options Search options
	 * @return array
	 */
	public function link_query($pattern, $options = array())
	{
		$criteria = array(
			'search' => $pattern,
		);
		
		$limit = $options['limit'] ?? 10;
		$conversations = $this->search($criteria, 0, $limit);
		
		$results = array();
		foreach ($conversations as $conv)
		{
			$results[$conv['history_id']] = $this->get_conversation_title($conv);
		}
		
		return $results;
	}

	/**
	 * Get title for link registry
	 *
	 * @param int $id Record ID
	 * @return string
	 */
	public function link_title($id)
	{
		$conversation = $this->read($id);
		return $conversation ? $this->get_conversation_title($conversation) : '';
	}

	/**
	 * Get titles for multiple records
	 *
	 * @param array $ids Array of record IDs
	 * @return array
	 */
	public function link_titles($ids)
	{
		$titles = array();
		foreach ($ids as $id)
		{
			$titles[$id] = $this->link_title($id);
		}
		return $titles;
	}

	/**
	 * File access check for attachments
	 *
	 * @param int $id Record ID
	 * @param int $check Check type
	 * @param string $rel_path Relative path
	 * @param int $user User ID
	 * @return bool
	 */
	public function file_access($id, $check, $rel_path, $user = null)
	{
		// Check if user has access to this conversation
		$conversation = $this->read($id);
		if (!$conversation) return false;
		
		// Only allow access to own conversations (unless admin)
		$current_user = $GLOBALS['egw_info']['user']['account_id'];
		if ($conversation['account_id'] != $current_user && 
			!$GLOBALS['egw']->acl->check('admin', 1, 'ai-assistant'))
		{
			return false;
		}
		
		return true;
	}

	/**
	 * Notification method
	 *
	 * @param array $data Event data
	 * @return bool
	 */
	public function notify($data)
	{
		// Handle notifications for AI assistant events
		// This could be extended to send notifications when AI completes tasks
		return true;
	}

	/**
	 * Get user statistics
	 *
	 * @param int $limit Number of users to return
	 * @return array
	 */
	public function get_user_statistics($limit = 10)
	{
		return $this->so->get_user_statistics($limit);
	}

	/**
	 * Get tool usage statistics
	 *
	 * @return array
	 */
	public function get_tool_statistics()
	{
		return $this->so->get_tool_statistics();
	}

	/**
	 * Get average response time
	 *
	 * @return float
	 */
	public function get_average_response_time()
	{
		return $this->so->get_average_response_time();
	}

	/**
	 * Get token usage for a time period
	 *
	 * @param int $start_time Start timestamp
	 * @param int $end_time End timestamp
	 * @return int
	 */
	public function get_token_usage($start_time, $end_time)
	{
		return $this->so->get_token_usage($start_time, $end_time);
	}

	/**
	 * Generate a conversation title from the first message
	 *
	 * @param string $message First message content
	 * @return string Generated title
	 */
	private function generate_conversation_title($message)
	{
		// Take first 50 characters and clean up
		$title = strip_tags($message);
		$title = substr($title, 0, 50);
		
		// Remove trailing incomplete words
		$last_space = strrpos($title, ' ');
		if ($last_space !== false && $last_space > 20)
		{
			$title = substr($title, 0, $last_space);
		}
		
		return $title . (strlen($message) > 50 ? '...' : '');
	}
}