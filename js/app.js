/**
 * EGroupware AI Assistant - Client-side JavaScript
 * Clean, modern implementation
 */

import {EgwApp} from '../../api/js/jsapi/egw_app';
import {Et2Dialog} from "../../api/js/etemplate/Et2Dialog/Et2Dialog";

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

		if (name === 'aiassistant.index') {
			this.init_ai_assistant();
		}
	}
	
	/**
	 * Initialize the AI assistant interface
	 */
	init_ai_assistant()
	{
		// Set focus on input field
		var input = this.et2.getWidgetById('message_input');
		if (input) {
			input.focus();
		}
		
		// Load and display chat history
		this.load_chat_history();
		
		// Auto-scroll to bottom of messages
		this.scroll_to_bottom();
	}
	
	/**
	 * Handle keypress in message input
	 */
	handle_keypress(event)
	{
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			this.send_message();
		}
	}
	
	/**
	 * Send message to AI
	 */
	send_message()
	{
		if (this.isLoading) return;

		var input = this.et2.getWidgetById('message_input');
		if (!input) return;

		var message = input.get_value().trim();
		if (!message) return;

		// Clear input and add user message
		input.set_value('');
		this.add_message(message, 'user', new Date().toISOString());

		// Show loading state
		this.set_loading(true);

		// Send to server with proper parameter format
		egw.json('aiassistant.EGroupware\\AiAssistant\\Ui.ajax_api', [
			'send_message',
			{
				message: message
			}
		], this.handle_response.bind(this), this, true, this).sendRequest();
	}

	/**
	 * Handle response from server
	 */
	handle_response(data)
	{
		this.set_loading(false);

		if (data.error) {
			this.add_message('❌ Sorry, I encountered an error: ' + data.error, 'error');
			return;
		}

		if (data.message) {
			this.add_message(data.message, 'assistant', new Date().toISOString());
		}

		// Handle tool calls if present
		if (data.tool_calls) {
			try {
				var toolCalls = typeof data.tool_calls === 'string' ? 
					JSON.parse(data.tool_calls) : data.tool_calls;
				
				if (Array.isArray(toolCalls)) {
					for (var i = 0; i < toolCalls.length; i++) {
						this.add_tool_call(toolCalls[i]);
					}
				}
			} catch (e) {
				console.warn('Failed to parse tool calls:', e);
			}
		}
	}

	/**
	 * Format message content for display
	 */
	format_message_content(content)
	{
		if (!content) return '';
		
		// Convert newlines to HTML breaks
		content = content.replace(/\n/g, '<br>');
		
		// Basic markdown-like formatting
		content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
		content = content.replace(/\*(.*?)\*/g, '<em>$1</em>');
		content = content.replace(/`(.*?)`/g, '<code>$1</code>');
		
		// Convert URLs to links
		content = content.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>');
		
		return content;
	}

	/**
	 * Add a message to the chat interface
	 */
	add_message(content, type, timestamp, tool_name, tool_args)
	{
		const messagesContainer = this.et2.getWidgetById('messages_container');
		if (!messagesContainer) return;

		// Remove empty state if it exists
		const emptyState = messagesContainer.getDOMNode().querySelector('.aiassistant_empty_state');
		if (emptyState) {
			emptyState.remove();
		}

		// Create message element
		const messageDiv = document.createElement('div');
		messageDiv.className = `aiassistant_message ${type}`;

		// Create avatar
		const avatar = document.createElement('div');
		avatar.className = 'aiassistant_avatar';
		avatar.textContent = type === 'user' ? 'U' : (type === 'assistant' ? 'AI' : '🔧');

		// Create message content
		const messageContent = document.createElement('div');
		messageContent.className = 'aiassistant_message_content';

		if (type === 'tool') {
			// Special formatting for tool messages
			messageContent.className = 'aiassistant_tool_message';
			messageContent.innerHTML = `
				<div class="aiassistant_tool_header">
					<span class="aiassistant_tool_icon">🔧</span>
					<span>Using ${tool_name || 'tool'}</span>
				</div>
				<div>${this.format_message_content(content)}</div>
				${tool_args ? `<details class="aiassistant_tool_details">
					<summary>Details</summary>
					<pre class="aiassistant_tool_args">${JSON.stringify(tool_args, null, 2)}</pre>
				</details>` : ''}
			`;
		} else {
			messageContent.innerHTML = this.format_message_content(content);
		}

		// Add timestamp
		if (timestamp) {
			const timeDiv = document.createElement('div');
			timeDiv.className = 'aiassistant_message_time';
			timeDiv.textContent = new Date(timestamp).toLocaleTimeString();
			messageContent.appendChild(timeDiv);
		}

		// Append elements in correct order
		messageDiv.appendChild(avatar);
		messageDiv.appendChild(messageContent);

		messagesContainer.getDOMNode().appendChild(messageDiv);
		this.scroll_to_bottom();
	}

	/**
	 * Add tool call visualization
	 */
	add_tool_call(tool_call)
	{
		var container = this.et2.getWidgetById('messages_container');
		if (!container) return;
		
		var containerNode = container.getDOMNode();
		
		var toolDiv = document.createElement('div');
		toolDiv.className = 'aiassistant_message tool';
		
		var avatarDiv = document.createElement('div');
		avatarDiv.className = 'aiassistant_avatar';
		avatarDiv.textContent = '🔧';
		
		var toolContent = document.createElement('div');
		toolContent.className = 'aiassistant_tool_message';
		
		var toolHeader = document.createElement('div');
		toolHeader.className = 'aiassistant_tool_header';
		toolHeader.innerHTML = `<span class="aiassistant_tool_icon">🛠️</span> <strong>${tool_call.function.name}</strong>`;
		
		var toolArgs = document.createElement('details');
		toolArgs.className = 'aiassistant_tool_details';
		
		var summary = document.createElement('summary');
		summary.textContent = 'View Parameters';
		summary.style.cursor = 'pointer';
		summary.style.color = '#0c5460';
		
		var argsContent = document.createElement('pre');
		argsContent.className = 'aiassistant_tool_args';
		argsContent.textContent = JSON.stringify(tool_call.function.arguments, null, 2);
		
		toolArgs.appendChild(summary);
		toolArgs.appendChild(argsContent);
		
		toolContent.appendChild(toolHeader);
		toolContent.appendChild(toolArgs);
		
		if (tool_call.result) {
			var resultDiv = document.createElement('div');
			resultDiv.className = 'aiassistant_tool_result';
			resultDiv.style.marginTop = '12px';
			resultDiv.style.padding = '12px';
			resultDiv.style.borderRadius = '8px';
			
			if (tool_call.result.success) {
				resultDiv.style.background = '#d4edda';
				resultDiv.style.border = '1px solid #c3e6cb';
				resultDiv.style.color = '#155724';
				resultDiv.innerHTML = `<strong>✅ Success:</strong> ${tool_call.result.message || 'Operation completed'}`;
			} else {
				resultDiv.style.background = '#f8d7da';
				resultDiv.style.border = '1px solid #f5c6cb';
				resultDiv.style.color = '#721c24';
				resultDiv.innerHTML = `<strong>❌ Error:</strong> ${tool_call.result.error || 'Operation failed'}`;
			}
			
			toolContent.appendChild(resultDiv);
		}
		
		toolDiv.appendChild(avatarDiv);
		toolDiv.appendChild(toolContent);
		
		containerNode.appendChild(toolDiv);
		
		this.scroll_to_bottom();
	}
	
	/**
	 * Set loading state
	 */
	set_loading(loading)
	{
		this.isLoading = loading;
		
		var sendButton = this.et2.getWidgetById('send_button');
		var statusMessage = this.et2.getWidgetById('status_message');
		
		if (sendButton) {
			sendButton.set_disabled(loading);
		}
		
		if (statusMessage) {
			if (loading) {
				statusMessage.set_value('🤔 AI is thinking...');
				statusMessage.set_class('aiassistant_status loading');
			} else {
				statusMessage.set_value('✅ Ready to help');
				statusMessage.set_class('aiassistant_status');
			}
		}
		
		// Add/remove typing indicator
		if (loading) {
			this.add_typing_indicator();
		} else {
			this.remove_typing_indicator();
		}
	}
	
	/**
	 * Add typing indicator
	 */
	add_typing_indicator()
	{
		var container = this.et2.getWidgetById('messages_container');
		if (!container) return;
		
		var containerNode = container.getDOMNode();
		
		// Remove existing typing indicator
		var existing = containerNode.querySelector('.aiassistant_typing_indicator');
		if (existing) {
			existing.remove();
		}
		
		// Create typing indicator
		var typingDiv = document.createElement('div');
		typingDiv.className = 'aiassistant_message assistant aiassistant_typing_indicator';
		
		var avatar = document.createElement('div');
		avatar.className = 'aiassistant_avatar';
		avatar.textContent = 'AI';
		
		var typingContent = document.createElement('div');
		typingContent.className = 'aiassistant_message_content';
		
		var typingIndicator = document.createElement('div');
		typingIndicator.className = 'aiassistant_typing_indicator';
		typingIndicator.innerHTML = `
			<span class="aiassistant_typing_dot"></span>
			<span class="aiassistant_typing_dot"></span>
			<span class="aiassistant_typing_dot"></span>
		`;
		
		typingContent.appendChild(typingIndicator);
		typingDiv.appendChild(avatar);
		typingDiv.appendChild(typingContent);
		
		containerNode.appendChild(typingDiv);
		this.scroll_to_bottom();
	}
	
	/**
	 * Remove typing indicator
	 */
	remove_typing_indicator()
	{
		var container = this.et2.getWidgetById('messages_container');
		if (!container) return;
		
		var containerNode = container.getDOMNode();
		var typingIndicator = containerNode.querySelector('.aiassistant_typing_indicator');
		if (typingIndicator) {
			typingIndicator.remove();
		}
	}
	
	/**
	 * Load chat history
	 */
	load_chat_history()
	{
		egw.json('aiassistant.EGroupware\\AiAssistant\\Ui.ajax_api', [
			'get_history'
		], this.handle_history_response.bind(this), this, true, this).sendRequest();
	}
	
	/**
	 * Handle history response
	 */
	handle_history_response(data)
	{
		if (data.messages && Array.isArray(data.messages)) {
			for (var i = 0; i < data.messages.length; i++) {
				var msg = data.messages[i];
				this.add_message(msg.content, msg.type, msg.timestamp);
			}
			
			// Handle tool calls if present
			if (data.tool_calls) {
				try {
					var toolCalls = typeof data.tool_calls === 'string' ? 
						JSON.parse(data.tool_calls) : data.tool_calls;
					
					if (Array.isArray(toolCalls)) {
						for (var j = 0; j < toolCalls.length; j++) {
							this.add_tool_call(toolCalls[j]);
						}
					}
				} catch (e) {
					console.warn('Failed to parse tool calls:', e);
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
			(button) => {
				if (button === Et2Dialog.YES_BUTTON) {
					this.do_clear_history();
				}
			},
			'Are you sure you want to clear your chat history? This action cannot be undone.',
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
		egw.json('aiassistant.EGroupware\\AiAssistant\\Ui.ajax_api', [
			'clear_history'
		], this.handle_clear_response.bind(this), this, true, this).sendRequest();
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
				var containerNode = container.getDOMNode();
				
				// Clear all messages
				while (containerNode.firstChild) {
					containerNode.removeChild(containerNode.firstChild);
				}
				
				// Add empty state back
				var emptyStateDiv = document.createElement('div');
				emptyStateDiv.className = 'aiassistant_empty_state';
				
				var iconDiv = document.createElement('div');
				iconDiv.className = 'aiassistant_empty_icon';
				iconDiv.textContent = '🤖';
				
				var titleDiv = document.createElement('div');
				titleDiv.className = 'aiassistant_empty_title';
				titleDiv.textContent = 'Welcome to AI Assistant';
				
				var textDiv = document.createElement('div');
				textDiv.className = 'aiassistant_empty_text';
				textDiv.textContent = 'I can help you manage your EGroupware data. Ask me to create contacts, schedule calendar events, search information, send emails, or manage tasks. Just type your request below!';
				
				emptyStateDiv.appendChild(iconDiv);
				emptyStateDiv.appendChild(titleDiv);
				emptyStateDiv.appendChild(textDiv);
				
				containerNode.appendChild(emptyStateDiv);
			}
			
			egw.message('Chat history cleared successfully', 'success');
		} else {
			egw.message('Failed to clear chat history: ' + (data.error || 'Unknown error'), 'error');
		}
	}
	
	/**
	 * Scroll messages container to bottom
	 */
	scroll_to_bottom()
	{
		setTimeout(() => {
			var container = this.et2.getWidgetById('messages_container');
			if (container) {
				var containerNode = container.getDOMNode();
				containerNode.scrollTop = containerNode.scrollHeight;
			}
		}, 100);
	}
}

// Register the app with EGroupware
app.classes.aiassistant = AIAssistantApp;
