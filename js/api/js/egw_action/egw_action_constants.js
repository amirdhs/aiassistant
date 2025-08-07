"use strict";
// noinspection JSUnusedGlobalSymbols
Object.defineProperty(exports, "__esModule", { value: true });
exports.EGW_VALID_KEYS = exports.EGW_KEY_F12 = exports.EGW_KEY_F11 = exports.EGW_KEY_F10 = exports.EGW_KEY_F9 = exports.EGW_KEY_F8 = exports.EGW_KEY_F7 = exports.EGW_KEY_F6 = exports.EGW_KEY_F5 = exports.EGW_KEY_F4 = exports.EGW_KEY_F3 = exports.EGW_KEY_F2 = exports.EGW_KEY_F1 = exports.EGW_KEY_MENU = exports.EGW_KEY_Z = exports.EGW_KEY_Y = exports.EGW_KEY_X = exports.EGW_KEY_W = exports.EGW_KEY_V = exports.EGW_KEY_U = exports.EGW_KEY_T = exports.EGW_KEY_S = exports.EGW_KEY_R = exports.EGW_KEY_Q = exports.EGW_KEY_P = exports.EGW_KEY_O = exports.EGW_KEY_N = exports.EGW_KEY_M = exports.EGW_KEY_L = exports.EGW_KEY_K = exports.EGW_KEY_J = exports.EGW_KEY_I = exports.EGW_KEY_H = exports.EGW_KEY_G = exports.EGW_KEY_F = exports.EGW_KEY_E = exports.EGW_KEY_D = exports.EGW_KEY_C = exports.EGW_KEY_B = exports.EGW_KEY_A = exports.EGW_KEY_9 = exports.EGW_KEY_8 = exports.EGW_KEY_7 = exports.EGW_KEY_6 = exports.EGW_KEY_5 = exports.EGW_KEY_4 = exports.EGW_KEY_3 = exports.EGW_KEY_2 = exports.EGW_KEY_1 = exports.EGW_KEY_0 = exports.EGW_KEY_ARROW_DOWN = exports.EGW_KEY_ARROW_RIGHT = exports.EGW_KEY_ARROW_UP = exports.EGW_KEY_ARROW_LEFT = exports.EGW_KEY_PAGE_DOWN = exports.EGW_KEY_PAGE_UP = exports.EGW_KEY_SPACE = exports.EGW_KEY_DELETE = exports.EGW_KEY_ESCAPE = exports.EGW_KEY_ENTER = exports.EGW_KEY_TAB = exports.EGW_KEY_BACKSPACE = exports.EGW_AO_EXEC_THIS = exports.EGW_AO_EXEC_SELECTED = exports.EGW_AI_DRAG_ENTER = exports.EGW_AI_DRAG_OVER = exports.EGW_AI_DRAG_OUT = exports.EGW_AI_DRAG = exports.EGW_AO_FLAG_DEFAULT_FOCUS = exports.EGW_AO_FLAG_IS_CONTAINER = exports.EGW_AO_SHIFT_STATE_BLOCK = exports.EGW_AO_SHIFT_STATE_MULTI = exports.EGW_AO_SHIFT_STATE_NONE = exports.EGW_AO_EVENT_DRAG_OVER_LEAVE = exports.EGW_AO_EVENT_DRAG_OVER_ENTER = exports.EGW_AO_STATE_DRAGGING = exports.EGW_AO_STATE_VISIBLE = exports.EGW_AO_STATE_FOCUSED = exports.EGW_AO_STATE_SELECTED = exports.EGW_AO_STATE_NORMAL = void 0;
/**
 * eGroupWare egw_action framework - egw action framework
 *
 * @link http://www.egroupware.org
 * @author Andreas Stöckel <as@stylite.de>
 * @copyright 2011 by Andreas Stöckel
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package egw_action
 */
//State bitmask (only use powers of two for new states!)
exports.EGW_AO_STATE_NORMAL = 0x00;
exports.EGW_AO_STATE_SELECTED = 0x01;
exports.EGW_AO_STATE_FOCUSED = 0x02;
exports.EGW_AO_STATE_VISIBLE = 0x04; //< Can only be set by the AOI, means that the object is attached to the DOM-Tree and visible
exports.EGW_AO_STATE_DRAGGING = 0x08;
exports.EGW_AO_EVENT_DRAG_OVER_ENTER = 0x00;
exports.EGW_AO_EVENT_DRAG_OVER_LEAVE = 0x01;
// No shift key is pressed
exports.EGW_AO_SHIFT_STATE_NONE = 0x00;
// A shift key, which allows multi-selection is pressed (usually CTRL on a PC keyboard)
exports.EGW_AO_SHIFT_STATE_MULTI = 0x01;
// A shift key is pressed, which forces block-wise selection (SHIFT on a PC keyboard)
exports.EGW_AO_SHIFT_STATE_BLOCK = 0x02;
// If this flag is set, this object will not be returned as "focused". If this
// flag is not applied to container objects, it may lead to some strange behaviour.
exports.EGW_AO_FLAG_IS_CONTAINER = 0x01;
// If this flag is set, the object will get its focus when no other object is
// selected and e.g. a key is pressed.
exports.EGW_AO_FLAG_DEFAULT_FOCUS = 0x02;
exports.EGW_AI_DRAG = 0x0100; // Use the first byte as mask for event types - 01 is for events used with drag stuff
exports.EGW_AI_DRAG_OUT = exports.EGW_AI_DRAG | 0x01;
exports.EGW_AI_DRAG_OVER = exports.EGW_AI_DRAG | 0x02;
exports.EGW_AI_DRAG_ENTER = exports.EGW_AI_DRAG | 0x03;
exports.EGW_AO_EXEC_SELECTED = 0;
exports.EGW_AO_EXEC_THIS = 1;
/**
 * Define the key constants (IE doesn't support "const" keyword)
 */
exports.EGW_KEY_BACKSPACE = 8;
exports.EGW_KEY_TAB = 9;
exports.EGW_KEY_ENTER = 13;
exports.EGW_KEY_ESCAPE = 27;
exports.EGW_KEY_DELETE = 46;
exports.EGW_KEY_SPACE = 32;
exports.EGW_KEY_PAGE_UP = 33;
exports.EGW_KEY_PAGE_DOWN = 34;
exports.EGW_KEY_ARROW_LEFT = 37;
exports.EGW_KEY_ARROW_UP = 38;
exports.EGW_KEY_ARROW_RIGHT = 39;
exports.EGW_KEY_ARROW_DOWN = 40;
exports.EGW_KEY_0 = 48;
exports.EGW_KEY_1 = 49;
exports.EGW_KEY_2 = 50;
exports.EGW_KEY_3 = 51;
exports.EGW_KEY_4 = 52;
exports.EGW_KEY_5 = 53;
exports.EGW_KEY_6 = 54;
exports.EGW_KEY_7 = 55;
exports.EGW_KEY_8 = 56;
exports.EGW_KEY_9 = 57;
exports.EGW_KEY_A = 65;
exports.EGW_KEY_B = 66;
exports.EGW_KEY_C = 67;
exports.EGW_KEY_D = 68;
exports.EGW_KEY_E = 69;
exports.EGW_KEY_F = 70;
exports.EGW_KEY_G = 71;
exports.EGW_KEY_H = 72;
exports.EGW_KEY_I = 73;
exports.EGW_KEY_J = 74;
exports.EGW_KEY_K = 75;
exports.EGW_KEY_L = 76;
exports.EGW_KEY_M = 77;
exports.EGW_KEY_N = 78;
exports.EGW_KEY_O = 79;
exports.EGW_KEY_P = 80;
exports.EGW_KEY_Q = 81;
exports.EGW_KEY_R = 82;
exports.EGW_KEY_S = 83;
exports.EGW_KEY_T = 84;
exports.EGW_KEY_U = 85;
exports.EGW_KEY_V = 86;
exports.EGW_KEY_W = 87;
exports.EGW_KEY_X = 88;
exports.EGW_KEY_Y = 89;
exports.EGW_KEY_Z = 90;
exports.EGW_KEY_MENU = 93;
exports.EGW_KEY_F1 = 112;
exports.EGW_KEY_F2 = 113;
exports.EGW_KEY_F3 = 114;
exports.EGW_KEY_F4 = 115;
exports.EGW_KEY_F5 = 116;
exports.EGW_KEY_F6 = 117;
exports.EGW_KEY_F7 = 118;
exports.EGW_KEY_F8 = 119;
exports.EGW_KEY_F9 = 120;
exports.EGW_KEY_F10 = 121;
exports.EGW_KEY_F11 = 122;
exports.EGW_KEY_F12 = 123;
exports.EGW_VALID_KEYS = [8, 9, 13, 27, 46, 32, 33, 34, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123];
