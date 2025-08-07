"use strict";
/**
 * EGroupware eTemplate2 - Button widget
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
 * @link https://www.egroupware.org
 * @author Nathan Gray
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2Button = void 0;
var Et2InputWidget_1 = require("../Et2InputWidget/Et2InputWidget");
require("../Et2Image/Et2Image");
var shoelace_1 = require("@shoelace-style/shoelace");
var ButtonMixin_1 = require("./ButtonMixin");
var Et2Button = /** @class */ (function (_super) {
    __extends(Et2Button, _super);
    function Et2Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Et2Button, "properties", {
        get: function () {
            return __assign(__assign({}, _super.properties), { label: { type: String, noAccessor: true, reflect: true } });
        },
        enumerable: false,
        configurable: true
    });
    Et2Button.prototype.firstUpdated = function (_changedProperties) {
        var _this = this;
        _super.prototype.firstUpdated.call(this, _changedProperties);
        // Register default keyboard shortcut, if applicable
        this._register_default_keyhandler(this.id);
        if (!this.label && this.__image) {
            /*
             Label / no label should get special classes set, but they're missing without this extra requestUpdate()
             This is a work-around for button--has-prefix & button--has-label not being set, something to do
             with how we're setting them.
             */
            this.updateComplete.then(function () {
                _this.requestUpdate();
            });
        }
    };
    Object.defineProperty(Et2Button.prototype, "label", {
        get: function () {
            var _a, _b;
            return (_b = (_a = this._labelNode) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim();
        },
        set: function (new_label) {
            var _this = this;
            this.updateComplete.then(function () {
                if (!_this._labelNode) {
                    var textNode = document.createTextNode(new_label);
                    _this.appendChild(textNode);
                    // for some reason button doesn't get resized properly without a forced rendereing therefore the
                    // requestUpdate is used to trigger a refresh.
                    _this.requestUpdate();
                }
                else {
                    _this._labelNode.textContent = new_label;
                    // for some reason button doesn't get resized properly without a forced rendereingtherefore the
                    // requestUpdate is used to trigger a refresh.
                    _this.requestUpdate();
                }
            });
        },
        enumerable: false,
        configurable: true
    });
    return Et2Button;
}(ButtonMixin_1.ButtonMixin(Et2InputWidget_1.Et2InputWidget(shoelace_1.SlButton))));
exports.Et2Button = Et2Button;
customElements.define("et2-button", Et2Button);
