"use strict";
/**
 * EGroupware egw_action framework - Shortcut/Keyboard input manager
 *
 * @link https://www.egroupware.org
 * @author Andreas Stöckel <as@stylite.de>
 * @copyright 2011 by Andreas Stöckel
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package egw_action
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.egw_keyHandler = exports.egw_unregisterGlobalShortcut = exports.egw_registerGlobalShortcut = exports.egw_registeredShortcuts = exports.egw_shortcutIdx = exports.egw_keycode_makeValid = exports.egw_keycode_translation_function = void 0;
/*egw:uses
    vendor.bower-asset.jquery.dist.jquery;
    egw_action;
*/
var egw_action_1 = require("./egw_action");
var egw_action_constants_1 = require("./egw_action_constants");
var egw_action_common_1 = require("./egw_action_common");
/**
 * The translation function converts the given native key code into one of the
 * egw key constants as listed above. This key codes were chosen to match the
 * key codes of IE and FF.
 */
exports.egw_keycode_translation_function = function (_nativeKeyCode) {
    // Map the numpad to the 0..9 keys
    if (_nativeKeyCode >= 96 && _nativeKeyCode <= 105) {
        _nativeKeyCode -= 48;
    }
    return _nativeKeyCode;
};
/**
 * Checks whether the given keycode is in the list of valid key codes. If not,
 * returns -1.
 */
function egw_keycode_makeValid(_keyCode) {
    var idx = egw_action_constants_1.EGW_VALID_KEYS.indexOf(_keyCode);
    if (idx >= 0) {
        return _keyCode;
    }
    return -1;
}
exports.egw_keycode_makeValid = egw_keycode_makeValid;
function _egw_nodeIsInInput(_node) {
    if ((_node != null) && (_node != document)) {
        var tagName = _node.tagName.toLowerCase();
        if (typeof _node.implements === "function" && _node.implements("et2_IInput") ||
            ["input", "select", 'textarea', 'button'].indexOf(tagName) != -1 ||
            ['et2-textbox', 'et2-number', 'et2-searchbox', 'et2-select', 'et2-textarea', 'et2-button'].indexOf(tagName) != -1) {
            return true;
        }
        else {
            return _egw_nodeIsInInput(_node.parentNode);
        }
    }
    else {
        return false;
    }
}
/**
 * execute
 * @param fn after DOM is ready
 * replacement for jQuery.ready()
 */
function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    }
    else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
/**
 * Register the onkeypress handler on the document
 */
ready(function () {
    // Fetch the key down event and translate it into browser-independent and
    // easy to use key codes and shift states
    document.addEventListener("keydown", function (keyboardEvent) {
        // Translate the given key code and make it valid
        // TODO there are actual string key codes now so it would be nice to use those standardized ones instead of using our own
        var keyCode = keyboardEvent.keyCode;
        keyCode = exports.egw_keycode_translation_function(keyCode);
        keyCode = egw_keycode_makeValid(keyCode);
        // Only go on if this is a valid key code - call the key handler
        if (keyCode != -1) {
            // Check whether the event came from the sidebox - if yes, ignore
            //if(jQuery(keyboardEvent.target).parents("#egw_fw_sidemenu").length > 0) return;
            var target = keyboardEvent.target; // this is some kind of element
            while ((target = target.parentNode) && target !== document) {
                if (!"#egw_fw_sidemenu" || target.matches("#egw_fw_sidemenu"))
                    return;
            }
            // Check whether the event came from an input field - if yes, only
            // allow function keys (like F1) to be captured by our code
            var inInput = _egw_nodeIsInInput(keyboardEvent.target);
            if (!inInput || (keyCode >= egw_action_constants_1.EGW_KEY_F1 && keyCode <= egw_action_constants_1.EGW_KEY_F12)) {
                if (egw_keyHandler(keyCode, keyboardEvent.shiftKey, keyboardEvent.ctrlKey || keyboardEvent.metaKey, keyboardEvent.altKey)) {
                    // If the key handler successfully passed the key event to some
                    // subcomponent, prevent the default action
                    keyboardEvent.preventDefault();
                }
            }
        }
    });
});
/**
 * Required to catch the context menu
 */
window.addEventListener("contextmenu", function (event) {
    // Check for actual key press
    if (!(event.x == 1 && event.y == 1)) {
        return true;
    }
    if (!event.ctrlKey && egw_keyHandler(egw_action_constants_1.EGW_KEY_MENU, event.shiftKey, event.ctrlKey || event.metaKey, event.altKey)) {
        // If the key handler successfully passed the key event to some
        // subcomponent, prevent the default action
        event.preventDefault();
        return false;
    }
    return true;
});
/**
 * Creates a unique key for the given shortcut
 * TODO those ids exist already
 */
function egw_shortcutIdx(_keyCode, _shift, _ctrl, _alt) {
    return "_" + _keyCode + "_" +
        (_shift ? "S" : "") +
        (_ctrl ? "C" : "") +
        (_alt ? "A" : "");
}
exports.egw_shortcutIdx = egw_shortcutIdx;
exports.egw_registeredShortcuts = {};
/**
 * Registers a global shortcut. If the shortcut already exists, it is overwritten.
 * @param {int} _keyCode is one of the keycode constants
 * @param {bool} _shift whether shift has to be set
 * @param {bool} _ctrl whether ctrl has to be set
 * @param {bool} _alt whether alt has to be set
 * @param {function} _handler the function which will be called when the shortcut
 * 	is evoked. An object containing the shortcut data will be passed as first
 * 	parameter.
 * @param {any} _context is the context in which the function will be executed
 */
function egw_registerGlobalShortcut(_keyCode, _shift, _ctrl, _alt, _handler, _context) {
    // Generate the hash map index for the shortcut
    var idx = egw_shortcutIdx(_keyCode, _shift, _ctrl, _alt);
    // Register the shortcut
    exports.egw_registeredShortcuts[idx] = {
        "handler": _handler,
        "context": _context,
        "shortcut": {
            "keyCode": _keyCode,
            "shift": _shift,
            "ctrl": _ctrl,
            "alt": _alt
        }
    };
}
exports.egw_registerGlobalShortcut = egw_registerGlobalShortcut;
/**
 * Unregisters the given shortcut.
 */
function egw_unregisterGlobalShortcut(_keyCode, _shift, _ctrl, _alt) {
    // Generate the hash map index for the shortcut
    var idx = egw_shortcutIdx(_keyCode, _shift, _ctrl, _alt);
    // Delete the entry from the hash map
    delete exports.egw_registeredShortcuts[idx];
}
exports.egw_unregisterGlobalShortcut = egw_unregisterGlobalShortcut;
/**
 * the egw_keyHandler function handles various key presses. The boolean
 * _shift, _ctrl, _alt values have been translated into platform independent
 * values (for apple devices).
 */
function egw_keyHandler(_keyCode, _shift, _ctrl, _alt) {
    // Check whether there is a global shortcut waiting for the keypress event
    var idx = egw_shortcutIdx(_keyCode, _shift, _ctrl, _alt);
    if (typeof exports.egw_registeredShortcuts[idx] != "undefined") {
        var shortcut = exports.egw_registeredShortcuts[idx];
        // Call the registered shortcut function and return its result, if it handled it
        var result = shortcut.handler.call(shortcut.context, shortcut.shortcut);
        if (result)
            return result;
    }
    // Pass the keypress to the currently focused action object
    // Get the object manager and fetch the container of the currently
    // focused object
    var focusedObject = egw_action_1.egw_globalObjectManager ? egw_action_1.egw_globalObjectManager.getFocusedObject() : null;
    var appMgr = egw_action_1.egw_getAppObjectManager(false);
    if (appMgr && !focusedObject) {
        focusedObject = appMgr.getFocusedObject();
        if (!focusedObject) {
            // If the current application doesn't have a focused object,
            // check whether the application object manager contains an object
            // with the EGW_AO_FLAG_DEFAULT_FOCUS flag set.
            //We should never do this for the delete key(keyCode === 46 ; idx === __46__ ) as one might delete an unselected mail by mistake
            if (idx !== "__46__") {
                var egwActionObject = null;
                for (var _i = 0, _a = appMgr.children; _i < _a.length; _i++) {
                    var child = _a[_i];
                    if (egw_action_common_1.egwBitIsSet(egw_action_constants_1.EGW_AO_FLAG_DEFAULT_FOCUS, child.flags)) {
                        egwActionObject = child;
                        break;
                    }
                }
                // Get the first child of the found container and focus the first
                // object
                if (egwActionObject && egwActionObject.children.length > 0) {
                    egwActionObject.children[0].setFocused(true);
                    focusedObject = egwActionObject.children[0];
                }
            }
        }
    }
    if (focusedObject) {
        // Handle the default keys (arrow_up, down etc.)
        var egwActionObject = focusedObject.getContainerRoot();
        var handled = false;
        if (egwActionObject) {
            handled = egwActionObject.handleKeyPress(_keyCode, _shift, _ctrl, _alt);
        }
        // Execute the egw_popup key handler of the focused object
        if (!handled) {
            return focusedObject.executeActionImplementation({
                "keyEvent": {
                    "keyCode": _keyCode,
                    "shift": _shift,
                    "ctrl": _ctrl,
                    "alt": _alt
                }
            }, "popup", egw_action_constants_1.EGW_AO_EXEC_SELECTED);
        }
        return handled;
    }
    return false;
}
exports.egw_keyHandler = egw_keyHandler;
