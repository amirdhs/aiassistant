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
exports.EgwDropAction = void 0;
var EgwAction_1 = require("./EgwAction");
/**
 * The egwDropAction class overwrites the egwAction class and adds the "acceptedTypes"
 * property. This array should contain all "dragTypes" the drop action is allowed to
 *
 * @param {EgwAction} _id
 * @param {string} _handler
 * @param {string} _caption
 * @param {string} _icon
 * @param {(string|function)} _onExecute
 * @param {bool} _allowOnMultiple
 * @returns {egwDropAction}
 */
var EgwDropAction = /** @class */ (function (_super) {
    __extends(EgwDropAction, _super);
    function EgwDropAction(_id, _handler, _caption, _icon, _onExecute, _allowOnMultiple) {
        var _this = _super.call(this, _id, _handler, _caption, _icon, _onExecute, _allowOnMultiple) || this;
        _this.type = "drop";
        _this.acceptedTypes = ["default"];
        _this.canHaveChildren = ["drag", "popup"];
        _this["default"] = false;
        _this.order = 0;
        _this.group = 0;
        return _this;
    }
    EgwDropAction.prototype.set_default = function (_value) {
        this["default"] = _value;
    };
    ;
    EgwDropAction.prototype.set_order = function (_value) {
        this.order = _value;
    };
    ;
    EgwDropAction.prototype.set_group = function (_value) {
        this.group = _value;
    };
    ;
    /**
     * The acceptType property allows strings as well as arrays - strings are
     * automatically included in an array.
     *
     * @param {(string|array)} _value
     */
    EgwDropAction.prototype.set_acceptedTypes = function (_value) {
        if (_value instanceof Array) {
            this.acceptedTypes = _value;
        }
        else {
            this.acceptedTypes = [_value];
        }
    };
    ;
    return EgwDropAction;
}(EgwAction_1.EgwAction));
exports.EgwDropAction = EgwDropAction;
