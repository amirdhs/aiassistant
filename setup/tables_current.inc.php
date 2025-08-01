<?php
/**
 * EGroupware AI Chatbot - Database Tables
 * 
 * @package chatbot
 */

$phpgw_baseline = array(
	'egw_ai_assistant_history' => array(
		'fd' => array(
			'history_id' => array('type' => 'auto','nullable' => False),
			'account_id' => array('type' => 'int','meta' => 'account','precision' => '4','nullable' => False),
			'session_id' => array('type' => 'varchar','precision' => '64','nullable' => False),
			'conversation_title' => array('type' => 'varchar','precision' => '255'),
			'message_type' => array('type' => 'varchar','precision' => '20','nullable' => False,'default' => 'user'),
			'message_content' => array('type' => 'text','nullable' => False),
			'tool_calls' => array('type' => 'text'),
			'tokens_used' => array('type' => 'int','precision' => '4','default' => '0'),
			'response_time' => array('type' => 'int','precision' => '4','default' => '0'),
			'created' => array('type' => 'timestamp','nullable' => False,'default' => 'current_timestamp'),
			'modified' => array('type' => 'timestamp')
		),
		'pk' => array('history_id'),
		'fk' => array(),
		'ix' => array('account_id','session_id','created'),
		'uc' => array()
	),
	'egw_ai_assistant_config' => array(
		'fd' => array(
			'config_id' => array('type' => 'auto','nullable' => False),
			'config_app' => array('type' => 'varchar','precision' => '50','nullable' => False,'default' => 'ai-assistant'),
			'config_name' => array('type' => 'varchar','precision' => '255','nullable' => False),
			'config_value' => array('type' => 'text'),
			'account_id' => array('type' => 'int','meta' => 'account','precision' => '4','default' => '0')
		),
		'pk' => array('config_id'),
		'fk' => array(),
		'ix' => array(array('config_app','config_name','account_id')),
		'uc' => array(array('config_app','config_name','account_id'))
	)
);