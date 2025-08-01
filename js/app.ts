/**
 * EGroupware AI Assistant - Client-side TypeScript
 * 
 * @package aiassistant
 */

import {EgwApp} from '../../api/js/jsapi/egw_app';
import {Et2Dialog} from "../../api/js/etemplate/Et2Dialog/Et2Dialog";
import {egw, app} from "../../api/js/jsapi/egw_global";

/**
 * UI for EGroupware AI Assistant application
 */
class AIAssistantApp extends EgwApp
{
	isLoading = false;

	/**
	 * This function is called when the etemplate2 object is loaded
	 */
	et2_ready(et2, name)
	{
		super.et2_ready(et2, name);

		if (name === 'ai-assistant.index') {
			this.init_ai_assistant();
		}
	}
	
	/**
	 * Initialize the AI assistant interface
	 */
	init_ai_assistant()
	{
		this.load_chat_history();
		
		// Set focus on input field
		var input = this.et2.getWidgetById('message_input');
		if (input) {
			input.focus();
		}
		
		// Auto-scroll to bottom of messages
		this.scroll_to_bottom();
	}
	
	/**
	 * Handle keypress in message input
	 */
	handle_keypress(event)
	{
		if (event.keyCode === 13 && !event.shiftKey) { // Enter key without Shift
			event.preventDefault();
			app.aiassistant.send_message();
		}
	}
	
	/**
	 * Send a message to the AI assistant
	 */
	send_message()
	{
		if (this.isLoading) {
			return;
		}
		
		var input = this.et2.getWidgetById('message_input');
		var message = input ? input.get_value().trim() : '';
		
		if (!message) {
			return;
		}
		
		// Clear input
		input.set_value('');
		
		// Add user message to display
		this.add_message('user', message);
		
		// Show loading state
		this.set_loading(true);
		
		// Send to server
		egw.json('ai-assistant.EGroupware\\AIAssistant\\Ui.api', {
			action: 'send_message',
			message: message
		}, this.handle_response, this, true, this).sendRequest();
	}
	
	/**
	 * Handle response from server
	 */
	handle_response(data)
	{
		this.set_loading(false);
		
		if (data.error) {
			this.show_error(data.error);
			return;
		}
		
		if (data.response) {
			// Add assistant response
			this.add_message('assistant', data.response.content);
			
			// Add tool calls if any
			if (data.response.tool_calls && data.response.tool_calls.length > 0) {
				for (var i = 0; i < data.response.tool_calls.length; i++) {
					this.add_tool_call(data.response.tool_calls[i]);
				}
			}
		}
	}
	
	/**
	 * Add a message to the chat display
	 */
	add_message(type, content)
	{
		var container = this.et2.getWidgetById('messages_container');
		if (!container) return;
		
		var messageDiv = document.createElement('div');
		messageDiv.className = 'message ' + type;
		
		var contentDiv = document.createElement('div');
		contentDiv.className = 'message-content';
		contentDiv.textContent = content;
		
		messageDiv.appendChild(contentDiv);
		container.getDOMNode().appendChild(messageDiv);
		
		this.scroll_to_bottom();
	}
	
	/**
	 * Add a tool call display
	 */
	add_tool_call(tool_call)
	{
		var container = this.et2.getWidgetById('messages_container');
		if (!container) return;
		
		var toolDiv = document.createElement('div');
		toolDiv.className = 'message tool';
		
		var toolContent = document.createElement('div');
		toolContent.className = 'tool-call';
		
		var toolName = document.createElement('div');
		toolName.className = 'tool-name';
		toolName.textContent = '🔧 ' + tool_call.function.name;
		
		var toolArgs = document.createElement('div');
		toolArgs.textContent = JSON.stringify(tool_call.function.arguments, null, 2);
		
		toolContent.appendChild(toolName);
		toolContent.appendChild(toolArgs);
		toolDiv.appendChild(toolContent);
		
		container.getDOMNode().appendChild(toolDiv);
		
		this.scroll_to_bottom();
	}
	
	/**
	 * Set loading state
	 */
	set_loading(loading)
	{
		this.isLoading = loading;
		
		var sendButton = this.et2.getWidgetById('send_button');
		var statusContainer = this.et2.getWidgetById('status_container');
		var statusMessage = this.et2.getWidgetById('status_message');
		
		if (sendButton) {
			sendButton.set_disabled(loading);
		}
		
		if (statusContainer && statusMessage) {
			if (loading) {
				statusMessage.set_value('AI is thinking...');
				statusContainer.set_disabled(false);
			} else {
				statusContainer.set_disabled(true);
			}
		}
	}
	
	/**
	 * Show error message
	 */
	show_error(error)
	{
		egw.message(error, 'error');
		this.add_message('assistant', 'Sorry, I encountered an error: ' + error);
	}
	
	/**
	 * Load chat history from server
	 */
	load_chat_history()
	{
		egw.json('ai-assistant.EGroupware\\AIAssistant\\Ui.api', {
			action: 'get_history'
		}, this.display_history, this, true, this).sendRequest();
	}
	
	/**
	 * Display chat history
	 */
	display_history(data)
	{
		if (!data || !data.history) return;
		
		for (var i = 0; i < data.history.length; i++) {
			var entry = data.history[i];
			this.add_message(entry.message_type, entry.message_content);
			
			if (entry.tool_calls) {
				for (var j = 0; j < entry.tool_calls.length; j++) {
					this.add_tool_call(entry.tool_calls[j]);
				}
			}
		}
	}
	
	/**
	 * Clear chat history
	 */
	clear_history()
	{
		Et2Dialog.show_dialog(
			function(button) {
				if (button === et2_dialog.YES_BUTTON) {
					app['ai-assistant'].do_clear_history();
				}
			},
			'Are you sure you want to clear your chat history?',
			'Clear Chat History',
			{},
			Et2Dialog.BUTTONS_YES_NO,
			Et2Dialog.QUESTION_MESSAGE
		);
	}
	
	/**
	 * Actually clear the history
	 */
	do_clear_history()
	{
		egw.json('ai-assistant.EGroupware\\AIAssistant\\Ui.api', {
			action: 'clear_history'
		}, this.handle_clear_response, this, true, this).sendRequest();
	}
	
	/**
	 * Handle clear history response
	 */
	handle_clear_response(data)
	{
		if (data.success) {
			// Clear the display
			var container = this.et2.getWidgetById('messages_container');
			if (container) {
				var domNode = container.getDOMNode();
				while (domNode.firstChild) {
					domNode.removeChild(domNode.firstChild);
				}
				
				// Add welcome message back
				var welcomeDiv = document.createElement('div');
				welcomeDiv.className = 'ai-assistant-welcome';
				welcomeDiv.textContent = "Welcome! I'm your EGroupware AI assistant. I can help you manage contacts, calendar events, and more.";
				domNode.appendChild(welcomeDiv);
			}
			
			egw.message('Chat history cleared successfully', 'success');
		} else {
			egw.message('Failed to clear chat history', 'error');
		}
	}
	
	/**
	 * Scroll messages container to bottom
	 */
	scroll_to_bottom()
	{
		var self = this;
		setTimeout(function() {
			var container = self.et2.getWidgetById('messages_container');
			if (container) {
				var domNode = container.getDOMNode();
				domNode.scrollTop = domNode.scrollHeight;
			}
		}, 100);
	}
}

// Register the app with EGroupware
app.classes.aiassistant = AIAssistantApp;