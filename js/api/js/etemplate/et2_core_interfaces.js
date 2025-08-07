"use strict";
/**
 * EGroupware eTemplate2 - File which contains all interfaces
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
 * @link https://www.egroupware.org
 * @author Andreas Stöckel
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.et2_IExposable = exports.et2_IPrint = exports.et2_IDetachedDOM = exports.et2_ISubmitListener = exports.et2_IAligned = exports.et2_IResizeable = exports.et2_IInput = exports.et2_IInputNode = exports.et2_IDOMNode = exports.implements_methods = exports.et2_implements_registry = void 0;
exports.et2_implements_registry = {};
/**
 * Checks if an object / et2_widget implements given methods
 *
 * @param obj
 * @param methods
 */
function implements_methods(obj, methods) {
    for (var i = 0; i < methods.length; ++i) {
        if (typeof obj[methods[i]] !== 'function') {
            return false;
        }
    }
    return true;
}
exports.implements_methods = implements_methods;
exports.et2_IDOMNode = "et2_IDOMNode";
exports.et2_implements_registry.et2_IDOMNode = function (obj) {
    return implements_methods(obj, ["getDOMNode"]);
};
exports.et2_IInputNode = "et2_IInputNode";
exports.et2_implements_registry.et2_IInputNode = function (obj) {
    return implements_methods(obj, ["getInputNode"]);
};
exports.et2_IInput = "et2_IInput";
exports.et2_implements_registry.et2_IInput = function (obj) {
    return implements_methods(obj, ["getValue", "isDirty", "resetDirty", "isValid"]);
};
exports.et2_IResizeable = "et2_IResizeable";
exports.et2_implements_registry.et2_IResizeable = function (obj) {
    return implements_methods(obj, ["resize"]);
};
exports.et2_IAligned = "et2_IAligned";
exports.et2_implements_registry.et2_IAligned = function (obj) {
    return implements_methods(obj, ["get_align"]);
};
exports.et2_ISubmitListener = "et2_ISubmitListener";
exports.et2_implements_registry.et2_ISubmitListener = function (obj) {
    return implements_methods(obj, ["submit"]);
};
exports.et2_IDetachedDOM = "et2_IDetachedDOM";
exports.et2_implements_registry.et2_IDetachedDOM = function (obj) {
    return implements_methods(obj, ["getDetachedAttributes", "getDetachedNodes", "setDetachedAttributes"]);
};
exports.et2_IPrint = "et2_IPrint";
exports.et2_implements_registry.et2_IPrint = function (obj) {
    return implements_methods(obj, ["beforePrint", "afterPrint"]);
};
exports.et2_IExposable = "et2_IExposable";
exports.et2_implements_registry.et2_IExposable = function (obj) {
    return implements_methods(obj, ["getMedia"]);
};
