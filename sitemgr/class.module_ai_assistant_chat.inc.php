<?php
/**
 * AI Assistant - Sitemgr chat interface
 *
 * @link http://www.egroupware.org
 * @author EGroupware Team
 * @package ai-assistant
 * @copyright (c) 2025 by EGroupware Team
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 */

use EGroupware\Api;
use EGroupware\Api\Acl;

/**
 * SiteMgr AI Assistant chat interface
 */
class module_ai_assistant_chat extends sitemgr_module
{
	/**
	 * Constructor
	 */
	function __construct()
	{
		$this->arguments = array();	// get's set in get_user_interface
		$this->title = lang('AI Assistant Chat');
		$this->description = lang('This module displays an AI Assistant chat interface for website visitors.');

		$this->etemplate_method = 'ai-assistant.EGroupware\\AIAssistant\\Ui.chat_interface';
	}

	/**
	 * Reimplemented to add the ai-assistant translations
	 *
	 * @return array
	 */
	function get_user_interface()
	{
		Api\Translation::add_app('ai-assistant');

		$fields = array(
			'chat_enabled'  => lang('Enable Chat'),
			'welcome_message' => lang('Welcome Message'),
			'max_messages' => lang('Max Messages per Session'),
			'show_typing' => lang('Show Typing Indicator'),
		);

		return array(
			'edit' => array(
				'chat_enabled' => array(
					'type' => 'checkbox',
					'label' => $fields['chat_enabled'],
					'default' => true,
				),
				'welcome_message' => array(
					'type' => 'text',
					'label' => $fields['welcome_message'],
					'default' => lang('Hello! How can I help you today?'),
					'size' => '50',
				),
				'max_messages' => array(
					'type' => 'textfield',
					'label' => $fields['max_messages'],
					'default' => '20',
					'size' => '5',
				),
				'show_typing' => array(
					'type' => 'checkbox',
					'label' => $fields['show_typing'],
					'default' => true,
				),
			),
		);
	}

	/**
	 * Execute the module - display the chat interface
	 */
	function get_content(&$arguments,$properties)
	{
		if (!$properties['chat_enabled']) 
		{
			return '';
		}

		$ui = new EGroupware\AIAssistant\Ui();
		
		// Set up basic properties for public interface
		$GLOBALS['egw_info']['flags']['currentapp'] = 'ai-assistant';
		
		return $ui->public_chat_interface($properties);
	}
}