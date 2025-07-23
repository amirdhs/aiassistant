# EGroupware AI Assistant App

An intelligent AI assistant integrated directly into EGroupware, providing natural language interaction with your EGroupware data.


- **Natural Language Interface**: Chat with your EGroupware system using plain English
- **Real Tool Integration**: Directly create, read, update, and delete EGroupware data
- **Persistent Chat History**: Your conversations are saved and accessible across sessions
- **Multi-User Support**: Each user has their own private chat history and preferences
- **Secure Authentication**: Uses EGroupware's built-in authentication system
- **Configuration Management**: Admin and user-level settings with API testing
- **Conversation Export**: Export chat history as JSON files
- **Multiple UI Views**: Chat interface, settings, conversation history, and detail views 

## Supported Operations

The AI assistant can help you with:
- **Contacts**: Create, search, and manage contact records
- **Calendar**: Schedule events and manage your calendar
- **Projects**: Create and track project information
- **General EGroupware**: Navigate and use various EGroupware features

## Available AI Tools

The assistant has access to the following function tools:

### Contact Management
- **`create_contact`**: Create new contacts with name, email, phone, organization
- **`search_contacts`**: Search existing contacts by name, email, or other criteria

### Calendar Management  
- **`create_calendar_event`**: Schedule meetings and events with title, time, location, description

### Planned Tools (Future Development)
- Project management integration
- Email composition and sending
- Document management
- User and group management
- Report generation

## Installation

### Prerequisites

- EGroupware 23.1 or higher
- PHP 8.1 or higher
- GitHub Models API access (or compatible OpenAI API)

### Setup Steps

1. **Copy the app to EGroupware**:
   ```bash
   cp -r ai-assistant /path/to/egroupware/
   ```


2. **Configure API Settings**:
   - Go to Administration → Site Configuration
   - Select "AI Assistant" application
   - Configure your AI API settings:
     - API Endpoint URL
     - API Key
     - Model name (e.g., "gpt-4o-mini")

### Configuration Options

#### Global Settings (Admin only)
- `ai_api_url`: Your AI API endpoint (default: GitHub Models)
- `ai_api_key`: Your API key for the AI service
- `ai_model`: AI model to use (default: "gpt-4o-mini")
- `max_history_length`: Maximum chat history entries per user (default: 100)

#### User Settings
- `user_chat_enabled`: Enable/disable chat for individual users
- `auto_save_conversations`: Automatically save conversation history
- `show_tool_details`: Display detailed information about tool executions


### File Structure
```
ai-assistant/
├── src/
│   ├── Ui.php                      # UI controller (modern namespace)
│   ├── Bo.php                      # Business logic
│   └── So.php                      # Storage operations
├── js/
│   ├── app.js                      # Client-side JavaScript
│   ├── app_compatible.js           # Compatibility layer
│   └── app_modern.js               # Modern JS features
├── setup/
│   ├── setup.inc.php               # App metadata
│   └── tables_current.inc.php      # Database schema
├── templates/default/
│   ├── index.xet                   # Main chat interface
│   ├── edit.xet                    # Configuration form
│   ├── list.xet                    # Conversation history list
│   ├── dialog.xet                  # Conversation details popup
│   └── images/
│       └── navbar.svg              # App icon
├── inc/
│   └── class.ai_assistant_hooks.inc.php  # EGroupware hooks
├── lang/
│   └── egw_en.lang                 # English translations
└── README.md                       # Documentation
```

### API Integration

The app integrates with AI services through a flexible provider system. Currently supports:
- GitHub Models API (Azure OpenAI compatible)
- OpenAI API (with minor configuration changes)





