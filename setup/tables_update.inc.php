<?php
/**
 * EGroupware AI Assistant - Database Updates
 * 
 * @package aiassistant
 */

$test[] = '1.0.0';
function aiassistant_upgrade1_0_0()
{
	// Fix timestamp fields to be int type instead of MySQL timestamp
	$GLOBALS['egw_setup']->oProc->AlterColumn('egw_ai_assistant_history', 'created', array(
		'type' => 'int',
		'meta' => 'timestamp',
		'precision' => '8',
		'nullable' => False
	));
	
	$GLOBALS['egw_setup']->oProc->AlterColumn('egw_ai_assistant_history', 'modified', array(
		'type' => 'int',
		'meta' => 'timestamp',
		'precision' => '8'
	));

	return $GLOBALS['setup_info']['aiassistant']['currentver'] = '1.0.1';
}

$test[] = '1.0.1';
function aiassistant_upgrade1_0_1()
{
	return $GLOBALS['setup_info']['aiassistant']['currentver'] = '1.0.2';
}
