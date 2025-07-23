<?php
/**
 * EGroupware AI Assistant
 *
 * @link http://www.egroupware.org
 * @package ai-assistant
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 */

use EGroupware\Api;

$GLOBALS['egw_info'] = array(
	'flags' => array(
		'currentapp' => 'ai-assistant',
		'noheader'   => True,
		'nonavbar'   => True
));
include('../header.inc.php');

// check if we have an advanced search and reset it in case
$old_state = Api\Cache::getSession('ai-assistant', 'index');
if ($old_state['advanced_search'])
{
	unset($old_state['advanced_search']);
	Api\Cache::setSession('ai-assistant', 'index', $old_state);
}
Api\Egw::redirect_link('/index.php','menuaction=ai-assistant.EGroupware\\AIAssistant\\Ui.index');