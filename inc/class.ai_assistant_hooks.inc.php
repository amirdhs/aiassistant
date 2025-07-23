<?php
/**
 * AI Assistant - diverse hooks: Admin-, Preferences- and SideboxMenu-Hooks
 *
 * @link http://www.egroupware.org
 * @package ai-assistant
 * @copyright (c) 2025 EGroupware Team
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 */

use EGroupware\Api;
use EGroupware\Api\Link;
use EGroupware\Api\Framework;
use EGroupware\Api\Egw;
use EGroupware\Api\Acl;

if (!defined('AI_ASSISTANT_APP'))
{
	define('AI_ASSISTANT_APP','ai-assistant');
}

/**
 * diverse hooks as static methods
 */
class ai_assistant_hooks
{
	/**
	 * Instance of AI Assistant business object
	 *
	 * @var EGroupware\AIAssistant\Bo
	 */
	static $ai_assistant_bo;

	/**
	 * Hook called by link-class to include AI Assistant in the appregistry of the linkage
	 *
	 * @param array/string $location location and other parameters (not used)
	 * @return array with method-names
	 */
	static function search_link($location)
	{
		unset($location);	// not used, but required by function signature

		return array(
			'query' => AI_ASSISTANT_APP.'.EGroupware\\AIAssistant\\Bo.link_query',
			'title' => AI_ASSISTANT_APP.'.EGroupware\\AIAssistant\\Bo.link_title',
			'titles'=> AI_ASSISTANT_APP.'.EGroupware\\AIAssistant\\Bo.link_titles',
			'view'  => array(
				'menuaction' => AI_ASSISTANT_APP.'.EGroupware\\AIAssistant\\Ui.index',
				'ajax' => 'true'
			),
			'view_id' => 'history_id',
			'view_popup'  => '800x600',
			'edit_popup'  => '800x600',
			'list' => array(
				'menuaction' => AI_ASSISTANT_APP.'.EGroupware\\AIAssistant\\Ui.index',
				'ajax' => 'true'
			),
			'add' => array(
				'menuaction' => AI_ASSISTANT_APP.'.EGroupware\\AIAssistant\\Ui.index',
				'ajax' => 'true'
			),
			'add_app'    => 'link_app',
			'add_id'     => 'link_id',
			'add_popup'  => '800x600',
			'notify'     => AI_ASSISTANT_APP.'.EGroupware\\AIAssistant\\Bo.notify',
			'merge'      => false,
		);
	}

	/**
	 * hooks to build AI Assistant's sidebox-menu plus the admin and Api\Preferences sections
	 *
	 * @param string/array $args hook args
	 */
	static function all_hooks($args)
	{
		$appname = AI_ASSISTANT_APP;
		$location = is_array($args) ? $args['location'] : $args;

		if ($location == 'sidebox_menu')
		{
			$file = array(
				'AI Assistant' => Egw::link('/index.php',array(
					'menuaction' => 'ai-assistant.EGroupware\\AIAssistant\\Ui.index',
					'ajax' => 'true')),
				array(
					'text' => lang('Start New Conversation'),
					'no_lang' => true,
					'link' => "javascript:egw.open('','ai-assistant','add')"
				),
			);
			
			// Add separator
			$file[] = ['text'=>'--'];
			
			// Add chat history management
			$file['Clear History'] = "javascript:if(confirm('".lang('Clear all chat history?')."')){egw.json('ai-assistant.EGroupware\\\\AIAssistant\\\\Ui.api',{action:'clear_history'}).sendRequest();}";
			$file['Placeholders'] = Egw::link('/index.php','menuaction=ai-assistant.ai_assistant_merge.show_replacements');
			
			display_sidebox($appname, lang('AI Assistant'), $file);
		}

		if ($GLOBALS['egw_info']['user']['apps']['admin'])
		{
			$file = Array(
				'Site Configuration' => Egw::link('/index.php','menuaction=admin.admin_config.index&appname=' . $appname.'&ajax=true'),
				'Custom fields' => Egw::link('/index.php','menuaction=admin.admin_customfields.index&appname='.$appname.'&use_private=1&ajax=true'),
				'Global Categories'  => Egw::link('/index.php',array(
					'menuaction' => 'admin.admin_categories.index',
					'appname'    => $appname,
					'global_cats'=> True,
					'ajax' => 'true',
				)),
				'Usage Statistics' => Egw::link('/index.php','menuaction=ai-assistant.EGroupware\\AIAssistant\\Ui.stats&ajax=true'),
			);
			if ($location == 'admin')
			{
				display_section($appname, $file);
			}
			else
			{
				display_sidebox($appname, lang('Admin'), $file);
			}
		}
	}

	/**
	 * populates $GLOBALS['settings'] for the Api\Preferences
	 */
	static function settings()
	{
		$settings = [
			'ai_model_preference' => [
				'type'   => 'select',
				'label'  => 'Preferred AI Model',
				'name'   => 'ai_model_preference',
				'values' => [
					'gpt-4o-mini' => 'GPT-4o Mini (Fast)',
					'gpt-4o' => 'GPT-4o (Advanced)',
					'gpt-3.5-turbo' => 'GPT-3.5 Turbo (Legacy)',
				],
				'help'   => 'Select your preferred AI model for conversations',
				'xmlrpc' => True,
				'admin'  => False,
				'default' => 'gpt-4o-mini',
			],
			'chat_history_limit' => [
				'type'   => 'select',
				'label'  => 'Chat History Limit',
				'name'   => 'chat_history_limit',
				'values' => [
					'10' => '10 messages',
					'25' => '25 messages',
					'50' => '50 messages',
					'100' => '100 messages',
					'unlimited' => 'Unlimited',
				],
				'help'   => 'Maximum number of chat messages to keep in history',
				'xmlrpc' => True,
				'admin'  => False,
				'default' => '50',
			],
			'enable_tool_execution' => [
				'type'   => 'check',
				'label'  => 'Enable Tool Execution',
				'name'   => 'enable_tool_execution',
				'help'   => 'Allow AI to execute actions like creating contacts, calendar events, etc.',
				'xmlrpc' => True,
				'admin'  => False,
				'default' => '1',
			],
			'auto_save_conversations' => [
				'type'   => 'check',
				'label'  => 'Auto-save Conversations',
				'name'   => 'auto_save_conversations',
				'help'   => 'Automatically save chat conversations for future reference',
				'xmlrpc' => True,
				'admin'  => False,
				'default' => '1',
			],
			'enable_notifications' => [
				'type'   => 'check',
				'label'  => 'Enable AI Notifications',
				'name'   => 'enable_notifications',
				'help'   => 'Get notified when AI completes long-running tasks',
				'xmlrpc' => True,
				'admin'  => False,
				'default' => '1',
			],
			'response_format' => [
				'type'   => 'select',
				'label'  => 'Response Format',
				'name'   => 'response_format',
				'values' => [
					'conversational' => 'Conversational',
					'detailed' => 'Detailed with explanations',
					'concise' => 'Brief and to the point',
				],
				'help'   => 'How detailed should AI responses be',
				'xmlrpc' => True,
				'admin'  => False,
				'default' => 'conversational',
			],
		];

		// Merge print
		if ($GLOBALS['egw_info']['user']['apps']['filemanager'])
		{
			$merge = new ai_assistant_merge();
			$settings += $merge->merge_preferences();
		}

		return $settings;
	}

	/**
	 * ACL rights and labels used by AI Assistant
	 *
	 * @param string|array string with location or array with parameters incl. "location", specially "owner" for selected acl owner
	 */
	public static function acl_rights($params)
	{
		unset($params);	// not used, but required by function signature

		return array(
			Acl::READ    => 'read',
			Acl::EDIT    => 'edit',
			Acl::DELETE  => 'delete',
			16           => 'admin_access', // Custom ACL for admin features
		);
	}

	/**
	 * Hook to tell framework we use standard categories method
	 *
	 * @param string|array $data hook-data or location
	 * @return boolean
	 */
	public static function categories($data)
	{
		unset($data);	// not used, but required by function signature

		return true;
	}

	/**
	 * Hook for admin configuration
	 *
	 * @param string|array $data hook-data or location
	 * @return array configuration options
	 */
	public static function config($data)
	{
		unset($data);	// not used, but required by function signature

		return array(
			'ai_api_url' => array(
				'type' => 'input',
				'label' => 'AI API URL',
				'help' => 'URL for the AI service endpoint (e.g., https://models.inference.ai.azure.com)',
				'default' => 'https://models.inference.ai.azure.com',
			),
			'ai_api_key' => array(
				'type' => 'password',
				'label' => 'AI API Key',
				'help' => 'API key for authenticating with the AI service',
			),
			'ai_model' => array(
				'type' => 'input',
				'label' => 'Default AI Model',
				'help' => 'Default AI model to use (e.g., gpt-4o-mini)',
				'default' => 'gpt-4o-mini',
			),
			'max_history_length' => array(
				'type' => 'input',
				'label' => 'Maximum Chat History Length',
				'help' => 'Maximum number of chat messages to store per user',
				'default' => '100',
			),
			'request_timeout' => array(
				'type' => 'input',
				'label' => 'Request Timeout (seconds)',
				'help' => 'Timeout for AI API requests in seconds',
				'default' => '30',
			),
			'enable_debug_logging' => array(
				'type' => 'check',
				'label' => 'Enable Debug Logging',
				'help' => 'Log AI requests and responses for debugging',
				'default' => '0',
			),
			'allowed_tools' => array(
				'type' => 'multiselect',
				'label' => 'Allowed Tools',
				'help' => 'Which tools the AI is allowed to execute',
				'values' => array(
					'create_contact' => 'Create Contacts',
					'search_contacts' => 'Search Contacts',
					'create_calendar_event' => 'Create Calendar Events',
					'search_calendar_events' => 'Search Calendar Events',
					'create_project' => 'Create Projects',
					'search_projects' => 'Search Projects',
				),
				'default' => 'create_contact,search_contacts,create_calendar_event',
			),
			'rate_limit_enabled' => array(
				'type' => 'check',
				'label' => 'Enable Rate Limiting',
				'help' => 'Limit the number of AI requests per user',
				'default' => '1',
			),
			'rate_limit_requests_per_hour' => array(
				'type' => 'input',
				'label' => 'Requests per Hour',
				'help' => 'Maximum AI requests per user per hour (if rate limiting enabled)',
				'default' => '60',
			),
			'rate_limit_requests_per_day' => array(
				'type' => 'input',
				'label' => 'Requests per Day',
				'help' => 'Maximum AI requests per user per day (if rate limiting enabled)',
				'default' => '500',
			),
		);
	}

	/**
	 * Hook for sidebox menu
	 *
	 * @param string|array $data hook-data or location
	 */
	public static function sidebox_menu($data)
	{
		self::all_hooks($data);
	}

	/**
	 * Hook for admin menu
	 *
	 * @param string|array $data hook-data or location
	 */
	public static function admin($data)
	{
		self::all_hooks($data);
	}

	/**
	 * Hook for preferences
	 *
	 * @param string|array $data hook-data or location
	 */
	public static function preferences($data)
	{
		unset($data);	// not used, but required by function signature
		
		return self::settings();
	}
}
