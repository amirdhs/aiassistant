"use strict";
/**
 * EGroupware AI Assistant - Client-side TypeScript
 *
 * @package aiassistant
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var egw_app_1 = require("../../api/js/jsapi/egw_app");
var Et2Dialog_1 = require("../../api/js/etemplate/Et2Dialog/Et2Dialog");
var egw_global_1 = require("../../api/js/jsapi/egw_global");
/**
 * UI for EGroupware AI Assistant application
 */
var AIAssistantApp = /** @class */ (function (_super) {
    __extends(AIAssistantApp, _super);
    function AIAssistantApp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isLoading = false;
        return _this;
    }
    /**
     * This function is called when the etemplate2 object is loaded
     */
    AIAssistantApp.prototype.et2_ready = function (et2, name) {
        _super.prototype.et2_ready.call(this, et2, name);
        if (name === 'aiassistant.index') {
            this.init_ai_assistant();
        }
    };
    /**
     * Initialize the AI assistant interface
     */
    AIAssistantApp.prototype.init_ai_assistant = function () {
        // Set focus on input field
        var input = this.et2.getWidgetById('message_input');
        if (input) {
            input.focus();
        }
        // Load and display chat history
        this.load_chat_history();
        // Auto-scroll to bottom of messages
        this.scroll_to_bottom();
    };
    /**
     * Handle keypress in message input
     */
    AIAssistantApp.prototype.handle_keypress = function (event) {
        if (event.key === 'Enter' && !event.shiftKey) { // Enter key without Shift
            event.preventDefault();
            this.send_message();
        }
    };
    /**
     * Send a message to the AI assistant
     */
    AIAssistantApp.prototype.send_message = function () {
        if (this.isLoading) {
            return;
        }
        var input = this.et2.getWidgetById('message_input');
        if (!input) {
            console.error('Message input not found');
            return;
        }
        var message = input.get_value().trim();
        if (!message) {
            return;
        }
        // Clear input
        input.set_value('');
        // Add user message to display
        this.add_message('user', message);
        // Show loading state
        this.set_loading(true);
        // Send to server with proper parameter format
        egw_global_1.egw.json('aiassistant.EGroupware\\AIAssistant\\Ui.ajax_api', [
            'send_message',
            message
        ], this.handle_response.bind(this), this, true, this).sendRequest();
    };
    /**
     * Handle response from server
     */
    AIAssistantApp.prototype.handle_response = function (data) {
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
    };
    /**
     * Format message content for display
     */
    AIAssistantApp.prototype.format_message_content = function (content) {
        if (!content)
            return '';
        // Convert newlines to HTML breaks
        content = content.replace(/\n/g, '<br>');
        // Basic markdown-like formatting
        content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        content = content.replace(/\*(.*?)\*/g, '<em>$1</em>');
        content = content.replace(/`(.*?)`/g, '<code>$1</code>');
        // Convert URLs to links
        content = content.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>');
        return content;
    };
    /**
     * Add a message to the chat interface
     */
    AIAssistantApp.prototype.add_message = function (content, type, timestamp, tool_name, tool_args) {
        var messagesContainer = this.et2.getWidgetById('messages_container');
        if (!messagesContainer)
            return;
        // Remove empty state if it exists
        var emptyState = messagesContainer.getDOMNode().querySelector('.aiassistant_empty_state');
        if (emptyState) {
            emptyState.remove();
        }
        // Create message element
        var messageDiv = document.createElement('div');
        messageDiv.className = "aiassistant_message " + type;
        // Create avatar
        var avatar = document.createElement('div');
        avatar.className = 'aiassistant_avatar';
        avatar.textContent = type === 'user' ? 'U' : (type === 'assistant' ? 'AI' : '🔧');
        // Create message content
        var messageContent = document.createElement('div');
        messageContent.className = 'aiassistant_message_content';
        if (type === 'tool') {
            // Special formatting for tool messages
            messageContent.className = 'aiassistant_tool_message';
            messageContent.innerHTML = "\n\t\t\t\t<div class=\"aiassistant_tool_header\">\n\t\t\t\t\t<span class=\"aiassistant_tool_icon\">\uD83D\uDD27</span>\n\t\t\t\t\t<span>Using " + (tool_name || 'tool') + "</span>\n\t\t\t\t</div>\n\t\t\t\t<div>" + this.format_message_content(content) + "</div>\n\t\t\t\t" + (tool_args ? "<details class=\"aiassistant_tool_details\">\n\t\t\t\t\t<summary>Details</summary>\n\t\t\t\t\t<pre class=\"aiassistant_tool_args\">" + JSON.stringify(tool_args, null, 2) + "</pre>\n\t\t\t\t</details>" : '') + "\n\t\t\t";
        }
        else {
            messageContent.innerHTML = this.format_message_content(content);
        }
        // Add timestamp
        if (timestamp) {
            var timeDiv = document.createElement('div');
            timeDiv.className = 'aiassistant_message_time';
            timeDiv.textContent = new Date(timestamp).toLocaleTimeString();
            messageContent.appendChild(timeDiv);
        }
        // Append elements
        if (type === 'user') {
            messageDiv.appendChild(messageContent);
            messageDiv.appendChild(avatar);
        }
        else {
            messageDiv.appendChild(avatar);
            messageDiv.appendChild(messageContent);
        }
        messagesContainer.getDOMNode().appendChild(messageDiv);
        this.scroll_to_bottom();
    }; /**
     * Add a tool call display
     */
    AIAssistantApp.prototype.add_tool_call = function (tool_call) {
        var container = this.et2.getWidgetById('messages_container');
        if (!container)
            return;
        var containerNode = container.getDOMNode();
        var toolDiv = document.createElement('div');
        toolDiv.className = 'aiassistant_message tool';
        var avatarDiv = document.createElement('div');
        avatarDiv.className = 'aiassistant_avatar';
        avatarDiv.style.background = 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)';
        avatarDiv.textContent = '🔧';
        var toolContent = document.createElement('div');
        toolContent.className = 'aiassistant_message_bubble aiassistant_tool_bubble';
        var toolHeader = document.createElement('div');
        toolHeader.className = 'aiassistant_tool_header';
        toolHeader.innerHTML = "<span class=\"aiassistant_tool_icon\">\uD83D\uDEE0\uFE0F</span> <strong>" + tool_call.function.name + "</strong>";
        var toolArgs = document.createElement('details');
        toolArgs.className = 'aiassistant_tool_details';
        var summary = document.createElement('summary');
        summary.textContent = 'View Parameters';
        summary.style.cursor = 'pointer';
        summary.style.color = '#667eea';
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
                resultDiv.style.background = 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)';
                resultDiv.style.border = '1px solid #b8dacc';
                resultDiv.style.color = '#155724';
                resultDiv.innerHTML = "<strong>\u2705 Success:</strong> " + (tool_call.result.message || 'Operation completed');
            }
            else {
                resultDiv.style.background = 'linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%)';
                resultDiv.style.border = '1px solid #f1b0b7';
                resultDiv.style.color = '#721c24';
                resultDiv.innerHTML = "<strong>\u274C Error:</strong> " + (tool_call.result.error || 'Operation failed');
            }
            toolContent.appendChild(resultDiv);
        }
        toolDiv.appendChild(avatarDiv);
        toolDiv.appendChild(toolContent);
        containerNode.appendChild(toolDiv);
        this.scroll_to_bottom();
    };
    /**
     * Set loading state
     */
    AIAssistantApp.prototype.set_loading = function (loading) {
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
            }
            else {
                statusMessage.set_value('✅ Ready');
                statusMessage.set_class('aiassistant_status connected');
            }
        }
        // Add/remove typing indicator
        if (loading) {
            this.add_typing_indicator();
        }
        else {
            this.remove_typing_indicator();
        }
    };
    /**
     * Add typing indicator
     */
    AIAssistantApp.prototype.add_typing_indicator = function () {
        var container = this.et2.getWidgetById('messages_container');
        if (!container)
            return;
        var containerNode = container.getDOMNode();
        // Remove existing typing indicator
        var existing = containerNode.querySelector('.aiassistant_typing_indicator');
        if (existing) {
            existing.remove();
        }
        // Create typing indicator
        var typingDiv = document.createElement('div');
        typingDiv.className = 'aiassistant_message assistant aiassistant_typing_indicator';
        var avatarDiv = document.createElement('div');
        avatarDiv.className = 'aiassistant_avatar';
        avatarDiv.textContent = 'AI';
        var bubbleDiv = document.createElement('div');
        bubbleDiv.className = 'aiassistant_message_bubble';
        bubbleDiv.style.padding = '16px 20px';
        var dotsDiv = document.createElement('div');
        dotsDiv.className = 'aiassistant_typing_dots';
        dotsDiv.innerHTML = '<span></span><span></span><span></span>';
        bubbleDiv.appendChild(dotsDiv);
        typingDiv.appendChild(avatarDiv);
        typingDiv.appendChild(bubbleDiv);
        containerNode.appendChild(typingDiv);
        this.scroll_to_bottom();
    };
    /**
     * Remove typing indicator
     */
    AIAssistantApp.prototype.remove_typing_indicator = function () {
        var container = this.et2.getWidgetById('messages_container');
        if (!container)
            return;
        var containerNode = container.getDOMNode();
        var indicator = containerNode.querySelector('.aiassistant_typing_indicator');
        if (indicator) {
            indicator.remove();
        }
    };
    /**
     * Show error message
     */
    AIAssistantApp.prototype.show_error = function (error) {
        egw_global_1.egw.message(error, 'error');
        this.add_message('❌ Sorry, I encountered an error: ' + error, 'error');
        var statusMessage = this.et2.getWidgetById('status_message');
        if (statusMessage) {
            statusMessage.set_value('❌ Error occurred');
            statusMessage.set_class('aiassistant_status disconnected');
        }
    };
    /**
     * Load chat history from server
     */
    AIAssistantApp.prototype.load_chat_history = function () {
        egw_global_1.egw.json('aiassistant.EGroupware\\AIAssistant\\Ui.ajax_api', [
            'get_history'
        ], this.display_history.bind(this), this, true, this).sendRequest();
    };
    /**
     * Display chat history
     */
    AIAssistantApp.prototype.display_history = function (data) {
        if (!data || !data.history || data.history.length === 0) {
            return; // Keep empty state
        }
        // Clear empty state first
        var container = this.et2.getWidgetById('messages_container');
        if (container) {
            var containerNode = container.getDOMNode();
            var emptyState = containerNode.querySelector('.aiassistant_empty_state');
            if (emptyState) {
                emptyState.remove();
            }
        }
        for (var i = 0; i < data.history.length; i++) {
            var entry = data.history[i];
            this.add_message(entry.message_type, entry.message_content);
            if (entry.tool_calls) {
                try {
                    var toolCalls = typeof entry.tool_calls === 'string'
                        ? JSON.parse(entry.tool_calls)
                        : entry.tool_calls;
                    if (Array.isArray(toolCalls)) {
                        for (var j = 0; j < toolCalls.length; j++) {
                            this.add_tool_call(toolCalls[j]);
                        }
                    }
                }
                catch (e) {
                    console.warn('Failed to parse tool calls:', e);
                }
            }
        }
    };
    /**
     * Clear chat history
     */
    AIAssistantApp.prototype.clear_history = function () {
        var _this = this;
        Et2Dialog_1.Et2Dialog.show_dialog(function (button) {
            if (button === Et2Dialog_1.Et2Dialog.YES_BUTTON) {
                _this.do_clear_history();
            }
        }, 'Are you sure you want to clear your chat history? This action cannot be undone.', 'Clear Chat History', {}, Et2Dialog_1.Et2Dialog.BUTTONS_YES_NO, Et2Dialog_1.Et2Dialog.QUESTION_MESSAGE);
    };
    /**
     * Actually clear the history
     */
    AIAssistantApp.prototype.do_clear_history = function () {
        egw_global_1.egw.json('aiassistant.EGroupware\\AIAssistant\\Ui.ajax_api', [
            'clear_history'
        ], this.handle_clear_response.bind(this), this, true, this).sendRequest();
    };
    /**
     * Handle clear history response
     */
    AIAssistantApp.prototype.handle_clear_response = function (data) {
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
            egw_global_1.egw.message('Chat history cleared successfully', 'success');
        }
        else {
            egw_global_1.egw.message('Failed to clear chat history: ' + (data.error || 'Unknown error'), 'error');
        }
    };
    /**
     * Scroll messages container to bottom
     */
    AIAssistantApp.prototype.scroll_to_bottom = function () {
        var _this = this;
        setTimeout(function () {
            var container = _this.et2.getWidgetById('messages_container');
            if (container) {
                var containerNode = container.getDOMNode();
                containerNode.scrollTop = containerNode.scrollHeight;
            }
        }, 100);
    };
    return AIAssistantApp;
}(egw_app_1.EgwApp));
// Register the app with EGroupware
egw_global_1.app.classes.aiassistant = AIAssistantApp;
