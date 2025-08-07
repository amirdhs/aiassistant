<?php
/**
 * EGroupware AI Assistant - Database Tables
 * 
 * @package aiassistant
 */

$phpgw_baseline = array(
	'egw_ai_assistant_history' => array(
		'fd' => array(
			'history_id' => array('type' => 'auto','nullable' => False),
			'account_id' => array('type' => 'int','meta' => 'account','precision' => '4','nullable' => False),
			'session_id' => array('type' => 'varchar','precision' => '64','nullable' => False),
			'conversation_title' => array('type' => 'varchar','precision' => '255'),
			'message_type' => array('type' => 'varchar','precision' => '20','nullable' => False,'default' => 'user'),
			'message_content' => array('type' => 'longtext','nullable' => False),
			'tool_calls' => array('type' => 'longtext'),
			'tokens_used' => array('type' => 'int','precision' => '4','default' => '0'),
			'response_time' => array('type' => 'int','precision' => '4','default' => '0'),
			'created' => array('type' => 'int','meta' => 'timestamp','precision' => '8','nullable' => False),
			'modified' => array('type' => 'int','meta' => 'timestamp','precision' => '8')
		),
		'pk' => array('history_id'),
		'fk' => array(),
		'ix' => array('account_id','session_id','created','message_type'),
		'uc' => array()
	),
	'egw_ai_assistant_config' => array(
		'fd' => array(
			'config_id' => array('type' => 'auto','nullable' => False),
			'config_app' => array('type' => 'varchar','precision' => '50','nullable' => False,'default' => 'aiassistant'),
			'config_name' => array('type' => 'varchar','precision' => '255','nullable' => False),
			'config_value' => array('type' => 'longtext'),
			'account_id' => array('type' => 'int','meta' => 'account','precision' => '4','nullable' => True),
			'created' => array('type' => 'int','meta' => 'timestamp','precision' => '8','nullable' => False),
			'modified' => array('type' => 'int','meta' => 'timestamp','precision' => '8')
		),
		'pk' => array('config_id'),
		'fk' => array(),
		'ix' => array(array('config_app','config_name','account_id'),'account_id'),
		'uc' => array(array('config_app','config_name','account_id'))
	)
);