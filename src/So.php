<?php
/**
 * EGroupware AI Assistant - Storage Object
 *
 * @link http://www.egroupware.org
 * @package ai-assistant
 * @copyright (c) 2025 EGroupware Team
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 */

namespace EGroupware\AIAssistant;

use EGroupware\Api;

/**
 * Storage object for AI Assistant database operations
 */
class So
{
    /**
     * Database instance
     * @var Api\Db
     */
    private $db;
    
    /**
     * Constructor
     */
    public function __construct()
    {
        $this->db = $GLOBALS['egw']->db;
    }
    
    /**
     * Save a chat message to database
     */
    public function save_message($account_id, $type, $content, $tool_calls = null, $conversation_title = null, $tokens_used = 0, $response_time = 0)
    {
        $data = [
            'account_id' => $account_id,
            'session_id' => session_id(),
            'message_type' => $type,
            'message_content' => $content,
            'tool_calls' => $tool_calls ? json_encode($tool_calls) : null,
            'conversation_title' => $conversation_title,
            'tokens_used' => (int)$tokens_used,
            'response_time' => (int)$response_time,
            'created' => time()
        ];
        
        return $this->db->insert('egw_ai_assistant_history', $data, false, __LINE__, __FILE__);
    }
    
    /**
     * Get chat history for a user
     */
    public function get_user_history($account_id, $limit = 50)
    {
        $this->db->select(
            'egw_ai_assistant_history',
            '*',
            ['account_id' => $account_id],
            __LINE__,
            __FILE__,
            false,
            'ORDER BY created DESC',
            false,
            $limit
        );
        
        $history = [];
        while (($row = $this->db->row(true))) {
            $history[] = [
                'history_id' => $row['history_id'],
                'message_type' => $row['message_type'],
                'message_content' => $row['message_content'],
                'tool_calls' => $row['tool_calls'] ? json_decode($row['tool_calls'], true) : null,
                'created' => $row['created'],
                'created_formatted' => Api\DateTime::to($row['created'])
            ];
        }
        
        return array_reverse($history); // Return chronological order
    }
    
    /**
     * Clear chat history for a user
     */
    public function clear_user_history($account_id)
    {
        return $this->db->delete('egw_ai_assistant_history', ['account_id' => $account_id], __LINE__, __FILE__);
    }
    
    /**
     * Get configuration value
     */
    public function get_config($name, $default = null)
    {
        $config = Api\Config::read('ai-assistant');
        return $config[$name] ?? $default;
    }
    
    /**
     * Set configuration value
     */
    public function set_config($name, $value)
    {
        $config = new Api\Config('ai-assistant');
        $config->config_data = Api\Config::read('ai-assistant');
        $config->config_data[$name] = $value;
        $config->save_repository();
        return true;
    }
    
    /**
     * Get user-specific configuration
     */
    public function get_user_config($name, $account_id, $default = null)
    {
        $this->db->select(
            'egw_ai_assistant_config',
            'config_value',
            [
                'config_app' => 'ai-assistant',
                'config_name' => $name,
                'account_id' => $account_id
            ],
            __LINE__,
            __FILE__
        );
        
        if (($row = $this->db->row(true))) {
            return $row['config_value'];
        }
        
        // Fall back to global config
        return $this->get_config($name, $default);
    }
    
    /**
     * Set user-specific configuration
     */
    public function set_user_config($name, $value, $account_id)
    {
        $data = [
            'config_app' => 'ai-assistant',
            'config_name' => $name,
            'config_value' => $value,
            'account_id' => $account_id
        ];
        
        $where = [
            'config_app' => 'ai-assistant',
            'config_name' => $name,
            'account_id' => $account_id
        ];
        
        $this->db->select('egw_ai_assistant_config', 'config_id', $where, __LINE__, __FILE__);
        
        if ($this->db->next_record()) {
            return $this->db->update('egw_ai_assistant_config', ['config_value' => $value], $where, __LINE__, __FILE__);
        } else {
            return $this->db->insert('egw_ai_assistant_config', $data, false, __LINE__, __FILE__);
        }
    }

    /**
     * Search conversations with criteria
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
        $where = [];
        $join = '';
        
        // Handle search criteria
        if (!empty($criteria['search']))
        {
            $search = $this->db->quote('%' . $criteria['search'] . '%');
            $where[] = "(message_content LIKE $search OR conversation_title LIKE $search)";
        }
        
        if (!empty($criteria['account_id']))
        {
            $where[] = 'account_id = ' . (int)$criteria['account_id'];
        }
        
        if (!empty($criteria['message_type']))
        {
            $where[] = "message_type = " . $this->db->quote($criteria['message_type']);
        }
        
        if (!empty($criteria['created']))
        {
            if (is_array($criteria['created']))
            {
                $where[] = 'created BETWEEN ' . (int)$criteria['created'][0] . ' AND ' . (int)$criteria['created'][1];
            }
            else
            {
                $where[] = 'created >= ' . (int)$criteria['created'];
            }
        }
        
        $where_clause = $where ? 'WHERE ' . implode(' AND ', $where) : '';
        $order_clause = "ORDER BY $order $sort";
        $limit_clause = $limit > 0 ? "LIMIT $start, $limit" : '';
        
        $sql = "SELECT * FROM egw_ai_assistant_history $join $where_clause $order_clause $limit_clause";
        
        $this->db->query($sql, __LINE__, __FILE__);
        
        $results = [];
        while (($row = $this->db->row(true)))
        {
            $results[] = $this->format_row($row);
        }
        
        return $results;
    }

    /**
     * Get total count of conversations
     *
     * @param array $criteria Search criteria
     * @return int
     */
    public function total($criteria = array())
    {
        $where = [];
        
        // Handle search criteria (same as search method)
        if (!empty($criteria['search']))
        {
            $search = $this->db->quote('%' . $criteria['search'] . '%');
            $where[] = "(message_content LIKE $search OR conversation_title LIKE $search)";
        }
        
        if (!empty($criteria['account_id']))
        {
            $where[] = 'account_id = ' . (int)$criteria['account_id'];
        }
        
        if (!empty($criteria['message_type']))
        {
            $where[] = "message_type = " . $this->db->quote($criteria['message_type']);
        }
        
        if (!empty($criteria['created']))
        {
            if (is_array($criteria['created']))
            {
                $where[] = 'created BETWEEN ' . (int)$criteria['created'][0] . ' AND ' . (int)$criteria['created'][1];
            }
            else
            {
                $where[] = 'created >= ' . (int)$criteria['created'];
            }
        }
        
        $where_clause = $where ? 'WHERE ' . implode(' AND ', $where) : '';
        
        $this->db->select('egw_ai_assistant_history', 'COUNT(*) as total', $where_clause, __LINE__, __FILE__);
        
        $row = $this->db->row(true);
        return (int)$row['total'];
    }

    /**
     * Read a single conversation record
     *
     * @param int $id History ID
     * @return array|false
     */
    public function read($id)
    {
        $this->db->select(
            'egw_ai_assistant_history',
            '*',
            ['history_id' => (int)$id],
            __LINE__,
            __FILE__
        );
        
        if (($row = $this->db->row(true)))
        {
            return $this->format_row($row);
        }
        
        return false;
    }

    /**
     * Save conversation data
     *
     * @param array $data Conversation data
     * @return int|false Record ID on success, false on failure
     */
    public function save($data)
    {
        if (!empty($data['history_id']))
        {
            // Update existing record
            $id = $data['history_id'];
            unset($data['history_id']);
            
            $result = $this->db->update(
                'egw_ai_assistant_history',
                $data,
                ['history_id' => $id],
                __LINE__,
                __FILE__
            );
            
            return $result ? $id : false;
        }
        else
        {
            // Insert new record
            $result = $this->db->insert('egw_ai_assistant_history', $data, false, __LINE__, __FILE__);
            return $result ? $this->db->get_last_insert_id('egw_ai_assistant_history', 'history_id') : false;
        }
    }

    /**
     * Delete a conversation record
     *
     * @param int $id History ID
     * @return bool
     */
    public function delete($id)
    {
        return $this->db->delete('egw_ai_assistant_history', ['history_id' => (int)$id], __LINE__, __FILE__);
    }

    /**
     * Format a database row for output
     *
     * @param array $row Database row
     * @return array Formatted row
     */
    private function format_row($row)
    {
        return [
            'history_id' => $row['history_id'],
            'account_id' => $row['account_id'],
            'session_id' => $row['session_id'],
            'message_type' => $row['message_type'],
            'message_content' => $row['message_content'],
            'conversation_title' => $row['conversation_title'] ?? '',
            'tool_calls' => $row['tool_calls'] ? json_decode($row['tool_calls'], true) : null,
            'tokens_used' => $row['tokens_used'] ?? 0,
            'response_time' => $row['response_time'] ?? 0,
            'created' => $row['created'],
            'modified' => $row['modified'] ?? $row['created'],
            'created_formatted' => Api\DateTime::to($row['created'])
        ];
    }

    /**
     * Get user statistics
     *
     * @param int $limit Number of users to return
     * @return array
     */
    public function get_user_statistics($limit = 10)
    {
        $sql = "SELECT account_id, COUNT(*) as count, SUM(tokens_used) as total_tokens 
                FROM egw_ai_assistant_history 
                GROUP BY account_id 
                ORDER BY count DESC 
                LIMIT $limit";
        
        $this->db->query($sql, __LINE__, __FILE__);
        
        $stats = [];
        while (($row = $this->db->row(true)))
        {
            $stats[] = [
                'account_id' => $row['account_id'],
                'count' => $row['count'],
                'total_tokens' => $row['total_tokens'] ?? 0
            ];
        }
        
        return $stats;
    }

    /**
     * Get tool usage statistics
     *
     * @return array
     */
    public function get_tool_statistics()
    {
        $sql = "SELECT tool_calls, COUNT(*) as usage_count 
                FROM egw_ai_assistant_history 
                WHERE tool_calls IS NOT NULL 
                GROUP BY tool_calls 
                ORDER BY usage_count DESC";
        
        $this->db->query($sql, __LINE__, __FILE__);
        
        $stats = [];
        while (($row = $this->db->row(true)))
        {
            $tool_calls = json_decode($row['tool_calls'], true);
            if ($tool_calls)
            {
                foreach ($tool_calls as $tool_call)
                {
                    $tool_name = $tool_call['function']['name'] ?? 'unknown';
                    if (!isset($stats[$tool_name]))
                    {
                        $stats[$tool_name] = 0;
                    }
                    $stats[$tool_name] += $row['usage_count'];
                }
            }
        }
        
        return $stats;
    }

    /**
     * Get average response time
     *
     * @return float
     */
    public function get_average_response_time()
    {
        $this->db->select(
            'egw_ai_assistant_history',
            'AVG(response_time) as avg_time',
            'response_time > 0',
            __LINE__,
            __FILE__
        );
        
        $row = $this->db->row(true);
        return (float)($row['avg_time'] ?? 0);
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
        $this->db->select(
            'egw_ai_assistant_history',
            'SUM(tokens_used) as total_tokens',
            "created BETWEEN $start_time AND $end_time",
            __LINE__,
            __FILE__
        );
        
        $row = $this->db->row(true);
        return (int)($row['total_tokens'] ?? 0);
    }
}
