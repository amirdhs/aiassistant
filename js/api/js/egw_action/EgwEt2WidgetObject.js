"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EgwEt2WidgetObject = void 0;
var egw_action_constants_1 = require("./egw_action_constants");
/**
 * Generic interface object so any webComponent can participate in action system.
 * This interface can be extended if special handling is needed, but it should work
 * for any widget.
 */
var EgwEt2WidgetObject = /** @class */ (function () {
    function EgwEt2WidgetObject(node) {
        this.node = null;
        this._state = egw_action_constants_1.EGW_AO_STATE_NORMAL || egw_action_constants_1.EGW_AO_STATE_VISIBLE;
        this.node = node;
    }
    EgwEt2WidgetObject.prototype.reconnectActionsCallback = function (p0) {
    };
    EgwEt2WidgetObject.prototype.stateChangeCallback = function (p0) {
    };
    // @ts-ignore
    EgwEt2WidgetObject.prototype.getDOMNode = function () {
        return this.node;
    };
    EgwEt2WidgetObject.prototype.getWidget = function () {
        return this.node;
    };
    EgwEt2WidgetObject.prototype.getState = function () {
        return this._state;
    };
    EgwEt2WidgetObject.prototype.makeVisible = function () {
    };
    EgwEt2WidgetObject.prototype.reconnectActions = function () {
    };
    EgwEt2WidgetObject.prototype.setReconnectActionsCallback = function (_callback, _context) {
    };
    EgwEt2WidgetObject.prototype.setState = function (_state) {
        this._state = _state;
    };
    EgwEt2WidgetObject.prototype.setStateChangeCallback = function (_callback, _context) {
    };
    EgwEt2WidgetObject.prototype.triggerEvent = function (_event, _data) {
        return false;
    };
    EgwEt2WidgetObject.prototype.updateState = function (_stateBit, _set, _shiftState) {
    };
    return EgwEt2WidgetObject;
}());
exports.EgwEt2WidgetObject = EgwEt2WidgetObject;
