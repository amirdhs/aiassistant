<?php
/**
 * EGroupware AI Chatbot - Setup Configuration
 * 
 * @package chatbot
 * @author EGroupware Team
 * @license GPL-3.0-or-later
 */

$setup_info['ai-assistant']['name']      = 'ai-assistant';
$setup_info['ai-assistant']['title']     = 'AI Assistant';
$setup_info['ai-assistant']['version']   = '1.0.0';
$setup_info['ai-assistant']['app_order'] = 60;
$setup_info['ai-assistant']['enable']    = 1;
$setup_info['ai-assistant']['index']     = 'ai-assistant.'.EGroupware\AIAssistant\Ui::class.'.index';

$setup_info['ai-assistant']['author'] = array(
    'name'  => 'EGroupware Team',
    'email' => 'info@egroupware.org'
);

$setup_info['ai-assistant']['license']  = 'GPL-3.0-or-later';
$setup_info['ai-assistant']['description'] = 'AI-powered assistant with Model Context Protocol (MCP) integration for EGroupware assistance';

$setup_info['ai-assistant']['maintainer'] = array(
    'name'  => 'EGroupware Team',
    'email' => 'info@egroupware.org'
);

/* Dependencies for this app to work */
$setup_info['ai-assistant']['depends'][] = array(
    'appname' => 'api',
    'versions' => Array('23.1')
);

/* Define the tables this app uses */
$setup_info['ai-assistant']['tables'][] = 'egw_ai_assistant_history';
$setup_info['ai-assistant']['tables'][] = 'egw_ai_assistant_config';

/* Hooks */
$setup_info['ai-assistant']['hooks'][] = 'admin';
$setup_info['ai-assistant']['hooks'][] = 'preferences';
$setup_info['ai-assistant']['hooks'][] = 'sidebox_menu';
$setup_info['ai-assistant']['hooks'][] = 'search_link';
$setup_info['ai-assistant']['hooks'][] = 'config';
$setup_info['ai-assistant']['hooks'][] = 'acl_rights';
$setup_info['ai-assistant']['hooks'][] = 'categories';

/* Configuration options */
$setup_info['ai-assistant']['config'][] = array(
    'name'    => 'ai_api_url',
    'label'   => 'AI API URL',
    'type'    => 'input',
    'default' => 'https://models.inference.ai.azure.com'
);

$setup_info['ai-assistant']['config'][] = array(
    'name'    => 'ai_api_key',
    'label'   => 'AI API Key',
    'type'    => 'password',
    'default' => ''
);

$setup_info['ai-assistant']['config'][] = array(
    'name'    => 'ai_model',
    'label'   => 'AI Model',
    'type'    => 'input',
    'default' => 'gpt-4o-mini'
);

$setup_info['ai-assistant']['config'][] = array(
    'name'    => 'max_history_length',
    'label'   => 'Maximum Chat History Length',
    'type'    => 'input',
    'default' => '100'
);
