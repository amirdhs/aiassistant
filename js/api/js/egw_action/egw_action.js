"use strict";
/**
 * EGroupware egw_action framework - egw action framework
 *
 * @link https://www.egroupware.org
 * @author Andreas Stöckel <as@stylite.de>
 * @copyright 2011 by Andreas Stöckel
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package egw_action
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
exports.getDropImplementation = exports.getDragImplementation = exports.egwDragAction = exports.egwDropAction = exports.egwActionObjectManager = exports.egwActionObjectInterface = exports.egwActionObject = exports.egwActionLink = exports.egwActionImplementation = exports.egwActionManager = exports.egwAction = exports.egwActionHandler = exports.egw_getAppActionManager = exports.egw_getAppObjectManager = exports.egw_getObjectManager = exports.egw_getActionManager = exports.egw_globalObjectManager = void 0;
var egw_action_constants_1 = require("./egw_action_constants");
var egw_action_common_1 = require("./egw_action_common");
var EgwAction_1 = require("./EgwAction");
var EgwActionManager_1 = require("./EgwActionManager");
var EgwActionLink_1 = require("./EgwActionLink");
var EgwActionObject_1 = require("./EgwActionObject");
var EgwActionObjectManager_1 = require("./EgwActionObjectManager");
var EgwDragAction_1 = require("./EgwDragAction");
var egwDragActionImplementation_1 = require("./egwDragActionImplementation");
var EgwDropAction_1 = require("./EgwDropAction");
var EgwDropActionImplementation_1 = require("./EgwDropActionImplementation");
require("./egwGlobal");
var EgwPopupAction_1 = require("./EgwPopupAction");
var EgwPopupActionImplementation_1 = require("./EgwPopupActionImplementation");
/**
 * Getter functions for the global egwActionManager and egwObjectManager objects
 */
var egw_globalActionManager = null;
exports.egw_globalObjectManager = null;
/**
 * Returns the action manager for the given application - each application has its
 * own sub-ActionManager in the global action manager object to prevent collisions
 * from happening
 *
 * @param _id is the name of the sub-actionManager which should be returned.
 *    If the action manager does not exist right now, it is created. If the
 *    parameter is omitted or null, the global action manager is returned.
 * @param {boolean} [_create=true] If an objectManager with the given id is not
 *    found, it will be created at the top level.
 * @param {number} [_search_depth=Infinite] How deep into existing action children
 *    to search.
 */
function egw_getActionManager(_id, _create, _search_depth) {
    if (_create === void 0) { _create = true; }
    if (_search_depth === void 0) { _search_depth = Number.MAX_VALUE; }
    // Check whether the global action manager had been created, if not do so
    var res = egw_globalActionManager;
    if (egw_globalActionManager == null) {
        res = egw_globalActionManager = new EgwActionManager_1.EgwActionManager();
    }
    // Check whether the sub-action manager exists, if not, create it
    if (typeof _id != 'undefined' && _id != null) {
        res = egw_globalActionManager.getActionById(_id, _search_depth);
        if (res == null && _create) {
            res = egw_globalActionManager.addAction("actionManager", _id);
        }
    }
    return res;
}
exports.egw_getActionManager = egw_getActionManager;
/**
 * Returns the object manager for the given application - each application may
 * have its own object manager where it can place action objects or containers.
 *
 * @param _id is the name of the sub-object manager should be returned. If the
 *    object manager does not exist right now, it is created. If the parameter
 *    is ommited or null, the global object manager is returned.
 * @param {boolean} [_create=true] If an objectManager with the given id is not
 *    found, it will be created at the top level.
 * @param {number} [_search_depth=Infinite] How deep into existing action children
 *    to search.
 */
function egw_getObjectManager(_id, _create, _search_depth) {
    if (_create === void 0) { _create = true; }
    if (_search_depth === void 0) { _search_depth = Number.MAX_VALUE; }
    // Check whether the global object manager exists
    var res = exports.egw_globalObjectManager;
    if (res == null) {
        res = exports.egw_globalObjectManager = new EgwActionObjectManager_1.EgwActionObjectManager("_egwGlobalObjectManager", egw_getActionManager());
    }
    // Check whether the sub-object manager exists, if not, create it
    if (typeof _id != 'undefined' && _id != null) {
        res = exports.egw_globalObjectManager.getObjectById(_id, _search_depth);
        if (res == null && _create) {
            res = new EgwActionObjectManager_1.EgwActionObjectManager(_id, egw_getActionManager(_id, true, _search_depth));
            exports.egw_globalObjectManager.addObject(res);
        }
    }
    return res;
}
exports.egw_getObjectManager = egw_getObjectManager;
/**
 * Returns the object manager for the current application
 *
 * @param {boolean} _create
 * @param {string} _appName //appName might not always be the current app, e.g. running app content under admin tab
 * @return {EgwActionObjectManager}
 */
function egw_getAppObjectManager(_create, _appName) {
    if (_create === void 0) { _create = true; }
    if (_appName === void 0) { _appName = ""; }
    return egw_getObjectManager(_appName ? _appName : window.egw(window).app_name(), _create, 1);
}
exports.egw_getAppObjectManager = egw_getAppObjectManager;
/**
 * Returns the action manager for the current application
 *
 * @param {boolean} _create
 * @return {EgwActionManager}
 */
// this function is never used
function egw_getAppActionManager(_create) {
    return egw_getActionManager(window.egw_getAppName(), _create, 1);
}
exports.egw_getAppActionManager = egw_getAppActionManager;
/** egwActionHandler Interface **/
/**
 * Constructor for the egwActionHandler interface which (at least) should have the
 * execute function implemented.
 *
 * @param {function} _executeEvent
 * @return {egwActionHandler}
 * TODO no usage?
 */
function egwActionHandler(_executeEvent) {
    //Copy the executeEvent parameter
    this.execute = _executeEvent;
}
exports.egwActionHandler = egwActionHandler;
/** egwAction Object
 * @deprecated use EgwAction
 * **/
var egwAction = /** @class */ (function (_super) {
    __extends(egwAction, _super);
    function egwAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return egwAction;
}(EgwAction_1.EgwAction));
exports.egwAction = egwAction;
/** egwActionManager Object **/
/**
 * @deprecated
 */
var egwActionManager = /** @class */ (function (_super) {
    __extends(egwActionManager, _super);
    function egwActionManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return egwActionManager;
}(EgwActionManager_1.EgwActionManager));
exports.egwActionManager = egwActionManager;
/**
 * Associative array where action classes may register themselves
 *
 */
if (typeof window._egwActionClasses == "undefined") {
    window._egwActionClasses = {
        actionManager: undefined,
        default: undefined,
        drag: undefined,
        drop: undefined,
        popup: undefined
    };
}
if (typeof window._egwActionClasses.actionManager == "undefined") {
    window._egwActionClasses.actionManager = { actionConstructor: EgwActionManager_1.EgwActionManager, implementation: null };
}
if (typeof window._egwActionClasses.default == "undefined") {
    window._egwActionClasses.default = { actionConstructor: EgwAction_1.EgwAction, implementation: null };
}
if (typeof window._egwActionClasses.drag == "undefined") {
    window._egwActionClasses.drag = { actionConstructor: EgwDragAction_1.EgwDragAction, implementation: getDragImplementation() };
}
if (typeof window._egwActionClasses.drop == "undefined") {
    window._egwActionClasses.drop = { actionConstructor: EgwDropAction_1.EgwDropAction, implementation: getDropImplementation() };
}
if (typeof window._egwActionClasses.popup == "undefined") {
    window._egwActionClasses.popup = {
        "actionConstructor": EgwPopupAction_1.EgwPopupAction,
        "implementation": EgwPopupActionImplementation_1.getPopupImplementation
    };
}
/** EgwActionImplementation Interface **/
/**
 * @deprecated implement upperCase interface EgwActionImplementation instead
 */
var egwActionImplementation = /** @class */ (function () {
    function egwActionImplementation() {
        this.doRegisterAction = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            throw "Abstract function call: registerAction";
        };
        this.doUnregisterAction = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            throw "Abstract function call: unregisterAction";
        };
        this.doExecuteImplementation = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            throw "Abstract function call: executeImplementation";
        };
    }
    egwActionImplementation.prototype.executeImplementation = function (_context, _selected, _links) {
        return this.doExecuteImplementation(_context, _selected, _links);
    };
    egwActionImplementation.prototype.registerAction = function (_actionObjectInterface, _triggerCallback, _context) {
        if (_context === void 0) { _context = null; }
        return this.doRegisterAction(_actionObjectInterface, _triggerCallback, _context);
    };
    egwActionImplementation.prototype.unregisterAction = function (_actionObjectInterface) {
        return this.doUnregisterAction(_actionObjectInterface);
    };
    return egwActionImplementation;
}());
exports.egwActionImplementation = egwActionImplementation;
/** egwActionLink Object **/
/**
 * @deprecated implement upperCase class instead
 */
var egwActionLink = /** @class */ (function (_super) {
    __extends(egwActionLink, _super);
    function egwActionLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return egwActionLink;
}(EgwActionLink_1.EgwActionLink));
exports.egwActionLink = egwActionLink;
/**
 * @deprecated implement upperCase interface EgwActionImplementation instead
 */
var egwActionObject = /** @class */ (function (_super) {
    __extends(egwActionObject, _super);
    function egwActionObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return egwActionObject;
}(EgwActionObject_1.EgwActionObject));
exports.egwActionObject = egwActionObject;
/** egwActionObjectInterface Interface **/
/**
 * @deprecated This is just a default wrapper class for the EgwActionObjectInterface interface.
 * Please directly implement it instead!
 * ... implements EgwActionObjectInterface{
 *     getDomNode(){...}
 * }
 * instead of className{
 *     var aoi = new egwActionObjectInterface()
 *     aoi.doGetDomNode = function ...
 * }
 *
 * @return {egwActionObjectInterface}
 */
var egwActionObjectInterface = /** @class */ (function () {
    function egwActionObjectInterface() {
        //Preset the iface functions
        this._state = egw_action_constants_1.EGW_AO_STATE_NORMAL || egw_action_constants_1.EGW_AO_STATE_VISIBLE;
        // _outerCall may be used to determine, whether the state change has been
        // evoked from the outside and the stateChangeCallback has to be called
        this.stateChangeCallback = null;
        // The doTriggerEvent function may be overwritten by the aoi if it wants to
        // support certain action implementation specific events like EGW_AI_DRAG_OVER
        this.stateChangeContext = null;
        this.reconnectActionsCallback = null;
        this.reconnectActionsContext = null;
        this.handlers = {};
    }
    egwActionObjectInterface.prototype.doGetDOMNode = function () {
        return null;
    };
    ;
    // or not.
    egwActionObjectInterface.prototype.doSetState = function (_state) {
    };
    ;
    // or EGW_AI_DRAG_OUT
    egwActionObjectInterface.prototype.doTriggerEvent = function (_event, _data) {
        return false;
    };
    ;
    egwActionObjectInterface.prototype.doMakeVisible = function () {
    };
    ;
    egwActionObjectInterface.prototype.getDOMNode = function () {
        return this.doGetDOMNode();
    };
    egwActionObjectInterface.prototype.getState = function () {
        return this._state;
    };
    egwActionObjectInterface.prototype.makeVisible = function () {
        return this.doMakeVisible();
    };
    egwActionObjectInterface.prototype.reconnectActions = function () {
        if (this.reconnectActionsCallback) {
            this.reconnectActionsCallback.call(this.reconnectActionsContext);
        }
    };
    egwActionObjectInterface.prototype.setReconnectActionsCallback = function (_callback, _context) {
        this.reconnectActionsCallback = _callback;
        this.reconnectActionsContext = _context;
    };
    egwActionObjectInterface.prototype.setState = function (_state) {
        //Call the doSetState function with the new state (if it has changed at all)
        if (_state != this._state) {
            this._state = _state;
            this.doSetState(_state);
        }
    };
    egwActionObjectInterface.prototype.setStateChangeCallback = function (_callback, _context) {
        this.stateChangeCallback = _callback;
        this.stateChangeContext = _context;
    };
    egwActionObjectInterface.prototype.triggerEvent = function (_event, _data) {
        if (_data === void 0) { _data = null; }
        return this.doTriggerEvent(_event, _data);
    };
    egwActionObjectInterface.prototype.updateState = function (_stateBit, _set, _shiftState) {
        // Calculate the new state
        //this does not guarantee a valid state at runtime
        var newState = egw_action_common_1.egwSetBit(this._state, _stateBit, _set);
        // Call the stateChangeCallback if the state really changed
        if (this.stateChangeCallback) {
            this._state = this.stateChangeCallback.call(this.stateChangeContext, newState, _stateBit, _shiftState);
        }
        else {
            this._state = newState;
        }
    };
    return egwActionObjectInterface;
}());
exports.egwActionObjectInterface = egwActionObjectInterface;
/** egwActionObjectManager Object **/
/**
 * @deprecated implement upperCase class instead
 */
var egwActionObjectManager = /** @class */ (function (_super) {
    __extends(egwActionObjectManager, _super);
    function egwActionObjectManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return egwActionObjectManager;
}(EgwActionObjectManager_1.EgwActionObjectManager));
exports.egwActionObjectManager = egwActionObjectManager;
/**
 * dragdrop
 */
/**
 * Register the drag and drop handlers
 */
if (typeof window._egwActionClasses == "undefined")
    window._egwActionClasses = {
        actionManager: undefined,
        default: undefined,
        drag: undefined,
        drop: undefined,
        popup: undefined
    };
/**
 * @deprecated
 */
var egwDropAction = /** @class */ (function (_super) {
    __extends(egwDropAction, _super);
    function egwDropAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return egwDropAction;
}(EgwDropAction_1.EgwDropAction));
exports.egwDropAction = egwDropAction;
window._egwActionClasses["drop"] = {
    "actionConstructor": EgwDropAction_1.EgwDropAction,
    "implementation": getDropImplementation
};
/**
 * @deprecated
 */
var egwDragAction = /** @class */ (function (_super) {
    __extends(egwDragAction, _super);
    function egwDragAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return egwDragAction;
}(EgwDragAction_1.EgwDragAction));
exports.egwDragAction = egwDragAction;
(function () {
    window._egwActionClasses.drag = {
        "actionConstructor": EgwDragAction_1.EgwDragAction, "implementation": getDragImplementation
    };
})();
function getDragImplementation() {
    if (typeof window["_egwActionImpls"] != "object") {
        window["_egwActionImpls"] = {};
    }
    if (!window["_egwActionImpls"]._dragActionImpl) {
        window["_egwActionImpls"]._dragActionImpl = new egwDragActionImplementation_1.EgwDragActionImplementation();
    }
    return window["_egwActionImpls"]._dragActionImpl;
}
exports.getDragImplementation = getDragImplementation;
function getDropImplementation() {
    if (typeof window["_egwActionImpls"] != "object") {
        window["_egwActionImpls"] = {};
    }
    if (!window["_egwActionImpls"]._dropActionImpl) {
        window["_egwActionImpls"]._dropActionImpl = new EgwDropActionImplementation_1.egwDropActionImplementation();
    }
    return window["_egwActionImpls"]._dropActionImpl;
}
exports.getDropImplementation = getDropImplementation;
