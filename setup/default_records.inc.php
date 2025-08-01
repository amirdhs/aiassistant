<?php
/**
 * EGroupware AI Assistant
 *
 * @link https://www.egroupware.org
 * @package ai-assistant
 * @copyright (c) 2025 EGroupware Team
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 */

// give Default group rights for AiAssistant app
$defaultgroup = $GLOBALS['egw_setup']->add_account('Default', 'Default', 'Group', false, false);
$GLOBALS['egw_setup']->add_acl('aiassistant', 'run', $defaultgroup);