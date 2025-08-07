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
exports.egwPopupAction = exports.EgwPopupAction = void 0;
var EgwAction_1 = require("./EgwAction");
var egw_action_common_1 = require("./egw_action_common");
var EgwPopupAction = /** @class */ (function (_super) {
    __extends(EgwPopupAction, _super);
    function EgwPopupAction(_id, _handler, _caption, _icon, _onExecute, _allowOnMultiple) {
        var _this = _super.call(this, _id, _handler, _caption, _icon, _onExecute, _allowOnMultiple) || this;
        _this.default = false;
        _this.order = 0;
        _this.group = 0;
        _this.hint = false;
        _this.checkbox = false;
        _this.radioGroup = 0;
        _this.checked = false;
        _this.confirm_mass_selection = null;
        _this.shortcut = null;
        _this.singleClick = false;
        _this.color = null;
        //var action = new EgwAction(_id, _handler, _caption, _icon, _onExecute, _allowOnMultiple);
        _this.type = "popup";
        _this.canHaveChildren = ["popup"];
        return _this;
    }
    EgwPopupAction.prototype.set_singleClick = function (_value) {
        this.singleClick = _value;
    };
    ;
    EgwPopupAction.prototype.set_default = function (_value) {
        this.default = _value;
    };
    ;
    EgwPopupAction.prototype.set_order = function (_value) {
        this.order = _value;
    };
    ;
    EgwPopupAction.prototype.set_group = function (_value) {
        this.group = _value;
    };
    ;
    EgwPopupAction.prototype.set_hint = function (_value) {
        this.hint = _value;
    };
    ;
    // If true, the action will be rendered as checkbox
    EgwPopupAction.prototype.set_checkbox = function (_value) {
        this.checkbox = _value;
    };
    ;
    EgwPopupAction.prototype.set_checked = function (_value) {
        this.checked = _value;
    };
    ;
    /**
     * Set either a confirmation prompt, or TRUE to indicate that this action
     * cares about large selections and to ask the confirmation prompt(s)
     *
     * @param {String|Boolean} _value
     */
    EgwPopupAction.prototype.set_confirm_mass_selection = function (_value) {
        this.confirm_mass_selection = _value;
    };
    ;
    // Allow checkbox to be set from context using the given function
    EgwPopupAction.prototype.set_isChecked = function (_value) {
        this.isChecked = new egw_action_common_1.EgwFnct(this, null, []);
        if (_value !== null) {
            this.isChecked.setValue(_value);
        }
    };
    ;
    // If radioGroup is >0 and the element is a checkbox, radioGroup specifies
    // the group of radio buttons this one belongs to
    EgwPopupAction.prototype.set_radioGroup = function (_value) {
        this.radioGroup = _value;
    };
    ;
    EgwPopupAction.prototype.set_shortcut = function (_value) {
        if (_value) {
            var sc = {
                "keyCode": -1,
                "shift": false,
                "ctrl": false,
                "alt": false,
                "caption": ""
            };
            if (typeof _value == "object" && typeof _value.keyCode != "undefined" &&
                typeof _value.caption != "undefined") {
                sc.keyCode = _value.keyCode;
                sc.caption = _value.caption;
                sc.shift = (typeof _value.shift == "undefined") ? false : _value.shift;
                sc.ctrl = (typeof _value.ctrl == "undefined") ? false : _value.ctrl;
                sc.alt = (typeof _value.alt == "undefined") ? false : _value.alt;
            }
            this.shortcut = sc;
        }
        else {
            this.shortcut = false;
        }
    };
    ;
    EgwPopupAction.prototype.set_color = function (_value) {
        this.color = _value;
    };
    return EgwPopupAction;
}(EgwAction_1.EgwAction));
exports.EgwPopupAction = EgwPopupAction;
/**
 * @deprecated
 * use uppercase class
 */
var egwPopupAction = /** @class */ (function (_super) {
    __extends(egwPopupAction, _super);
    function egwPopupAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return egwPopupAction;
}(EgwPopupAction));
exports.egwPopupAction = egwPopupAction;
