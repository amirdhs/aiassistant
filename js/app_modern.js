/**
 * EGroupware AI Assistant - Client-side JavaScript
 * 
 * @package ai-assistant
 */

/* Remove ES6 import - use EGroupware's loading system instead */

/**
 * UI for EGroupware AI Assistant application
 */
class AIAssistantApp extends app.classes.egw_app {
    
    /**
     * Constructor
     */
    constructor() {
        super('ai-assistant');
        this.isLoading = false;
    }
    
    /**
     * Destructor
     */
    destroy(_app) {
        super.destroy(_app);
    }
    
    /**
     * This function is called when the etemplate2 object is loaded
     * and ready. If you must store a reference to the et2 object,
     * make sure to clean it up in destroy().
     */
    et2_ready(et2, name) {
        super.et2_ready(et2, name);
        
        if (name === 'ai-assistant.index') {
            this.init_ai_assistant();
        }
    }
    
    /**
     * Initialize the AI assistant interface
     */
    init_ai_assistant() {
        this.load_chat_history();
        
        // Set focus on input field
        const input = this.et2.getWidgetById('message_input');
        if (input) {
            input.focus();
        }
        
        // Auto-scroll to bottom of messages
        this.scroll_to_bottom();
    }
    
    /**
     * Handle keypress in message input
     */
    handle_keypress(event) {
        if (event.keyCode === 13 && !event.shiftKey) { // Enter key without Shift
            event.preventDefault();
            this.send_message();
        }
    }
    
    /**
     * Send a message to the AI assistant
     */
    send_message() {
        if (this.isLoading) {
            return;
        }
        
        const input = this.et2.getWidgetById('message_input');
        const message = input ? input.get_value().trim() : '';
        
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
        }, this.handle_response.bind(this), this, true, this).sendRequest();
    }
    
    /**
     * Handle response from server
     */
    handle_response(data) {
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
                data.response.tool_calls.forEach(tool_call => {
                    this.add_tool_call(tool_call);
                });
            }
        }
    }
    
    /**
     * Add a message to the chat display
     */
    add_message(type, content) {
        const container = this.et2.getWidgetById('messages_container');
        if (!container) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.textContent = content;
        
        messageDiv.appendChild(contentDiv);
        container.getDOMNode().appendChild(messageDiv);
        
        this.scroll_to_bottom();
    }
    
    /**
     * Add a tool call display
     */
    add_tool_call(tool_call) {
        const container = this.et2.getWidgetById('messages_container');
        if (!container) return;
        
        const toolDiv = document.createElement('div');
        toolDiv.className = 'message tool';
        
        const toolContent = document.createElement('div');
        toolContent.className = 'tool-call';
        
        const toolName = document.createElement('div');
        toolName.className = 'tool-name';
        toolName.textContent = `🔧 ${tool_call.function.name}`;
        
        const toolArgs = document.createElement('div');
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
    set_loading(loading) {
        this.isLoading = loading;
        
        const sendButton = this.et2.getWidgetById('send_button');
        const statusContainer = this.et2.getWidgetById('status_container');
        const statusMessage = this.et2.getWidgetById('status_message');
        
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
    show_error(error) {
        egw.message(error, 'error');
        this.add_message('assistant', `Sorry, I encountered an error: ${error}`);
    }
    
    /**
     * Load chat history from server
     */
    load_chat_history() {
        egw.json('ai-assistant.EGroupware\\AIAssistant\\Ui.api', {
            action: 'get_history'
        }, this.display_history.bind(this), this, true, this).sendRequest();
    }
    
    /**
     * Display chat history
     */
    display_history(data) {
        if (!data || !data.history) return;
        
        data.history.forEach(entry => {
            this.add_message(entry.message_type, entry.message_content);
            
            if (entry.tool_calls) {
                entry.tool_calls.forEach(tool_call => {
                    this.add_tool_call(tool_call);
                });
            }
        });
    }
    
    /**
     * Clear chat history
     */
    clear_history() {
        et2_dialog.show_dialog(
            (button) => {
                if (button === et2_dialog.YES_BUTTON) {
                    this.do_clear_history();
                }
            },
            'Are you sure you want to clear your chat history?',
            'Clear Chat History',
            {},
            et2_dialog.BUTTONS_YES_NO,
            et2_dialog.QUESTION_MESSAGE
        );
    }
    
    /**
     * Actually clear the history
     */
    do_clear_history() {
        egw.json('ai-assistant.EGroupware\\AIAssistant\\Ui.api', {
            action: 'clear_history'
        }, this.handle_clear_response.bind(this), this, true, this).sendRequest();
    }
    
    /**
     * Handle clear history response
     */
    handle_clear_response(data) {
        if (data.success) {
            // Clear the display
            const container = this.et2.getWidgetById('messages_container');
            if (container) {
                const domNode = container.getDOMNode();
                while (domNode.firstChild) {
                    domNode.removeChild(domNode.firstChild);
                }
                
                // Add welcome message back
                const welcomeDiv = document.createElement('div');
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
    scroll_to_bottom() {
        setTimeout(() => {
            const container = this.et2.getWidgetById('messages_container');
            if (container) {
                const domNode = container.getDOMNode();
                domNode.scrollTop = domNode.scrollHeight;
            }
        }, 100);
    }
}

// Register the app
app.classes['ai-assistant'] = AIAssistantApp;
