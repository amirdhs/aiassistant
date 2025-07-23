<?php
/**
 * EGroupware - download document merged with AI Assistant data
 *
 * Usage: curl --user $username[:$passwd] -L https://domain.com/egroupware/ai-assistant/merge.php?path=/templates/ai-assistant/document.txt&ids=123
 *
 * Supported GET parameters:
 * - path: full VFS path of document to merge
 * - ids: one or more id(s): ids[]=123&ids[]=456
 * - search: search criteria or array with field specific criteria, eg. search[history_id]=123
 * - limit: max. number of search results to return, default 1
 * - order: default last modified first
 
 * For Apache FCGI you need the following rewrite rule:
 *
 * 	RewriteEngine on
 * 	RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization},L]
 *
 * Otherwise authentication request will be sent over and over again, as password is NOT available to PHP!
 *
 * @link http://www.egroupware.org
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package ai-assistant
 * @author EGroupware Team
 * @copyright (c) 2025 by EGroupware Team
 * @version $Id$
 */

use EGroupware\AIAssistant\Merge;

$GLOBALS['egw_info'] = array(
	'flags' => array(
		'noheader'  => True,
		'currentapp' => 'ai-assistant',
		'no_exception_handler' => 'basic_auth',	// we use a basic auth exception handler (sends exception message as basic auth realm)
		'autocreate_session_callback' => 'EGroupware\\Api\\Header\\Authenticate::autocreate_session_callback',
		'auth_realm' => 'EGroupware AI Assistant document merge',
	)
);
// if you move this file somewhere else, you need to adapt the path to the header!
$egw_dir = dirname(dirname(__FILE__));
include($egw_dir.'/header.inc.php');

$merge = new Merge();

if (!isset($_REQUEST['ids']) && isset($_REQUEST['search']))
{
	if (is_array($_REQUEST['search']))
	{
		$criteria = $_REQUEST['search'];
	}
	else
	{
		$criteria = array('query' => $_REQUEST['search']);
	}
	$bo = new EGroupware\AIAssistant\Bo();
	$rows = $bo->search($criteria, false, 
		$_REQUEST['order'] ?: 'modified DESC', '', '', false, 'AND', 
		array(0, (int)$_REQUEST['limit'] ?: 1));
	$_REQUEST['ids'] = array();
	foreach($rows as $row)
	{
		$_REQUEST['ids'][] = $row['history_id'];
	}
}

$error = $merge->download($_REQUEST['path'] ?: $_REQUEST['document'], $_REQUEST['ids'] ?: array(), '', 
	$_REQUEST['mime'] ?: 'application/vnd.oasis.opendocument.text');

if ($error) 
{
	header('HTTP/1.1 500 Internal Server Error');
	echo $error."\n";
}