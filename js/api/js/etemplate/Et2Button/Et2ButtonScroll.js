"use strict";
/**
 * EGroupware eTemplate2 - Duration date widget (WebComponent)
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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2ButtonScroll = void 0;
var lit_1 = require("lit");
var ButtonMixin_1 = require("./ButtonMixin");
/**
 * Up / Down spinner buttons are used to adjust a value by a set amount
 *
 * @event et2-scroll Emitted when one of the buttons is clicked.  Check event.detail for direction.  1 for up, -1 for down.
 *
 * example:
 * Add the scroll into an input, then catch the et2-scroll event to adjust the value:
 * <et2-button-scroll slot="suffix" @et2-scroll=${this.handleScroll}></et2-button-scroll>
 *
 * handleScroll(e) {
 * 	this.value = "" + (this.valueAsNumber + e.detail * (parseFloat(this.step) || 1));
 * }
 */
var Et2ButtonScroll = /** @class */ (function (_super) {
    __extends(Et2ButtonScroll, _super);
    function Et2ButtonScroll() {
        var _this = _super.call(this) || this;
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    Object.defineProperty(Et2ButtonScroll, "styles", {
        get: function () {
            return __spreadArrays((_super.styles ? (Array.isArray(_super.styles) ? _super.styles : [_super.styles]) : []), [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t  /* Scroll buttons */\n\n\t\t\t  .et2-button-scroll {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\twidth: calc(var(--sl-input-height-medium) / 2);\n\t\t\t  }\n\n\t\t\t  et2-button-icon {\n\t\t\t\tfont-size: 85%;\n\t\t\t\theight: calc(var(--sl-input-height-medium) / 2);\n\t\t\t\t/* Override spacing in sl-icon-button */\n\t\t\t\t--sl-spacing-x-small: 3px;\n\t\t\t  }\n\t\t\t"], ["\n\t\t\t  /* Scroll buttons */\n\n\t\t\t  .et2-button-scroll {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\twidth: calc(var(--sl-input-height-medium) / 2);\n\t\t\t  }\n\n\t\t\t  et2-button-icon {\n\t\t\t\tfont-size: 85%;\n\t\t\t\theight: calc(var(--sl-input-height-medium) / 2);\n\t\t\t\t/* Override spacing in sl-icon-button */\n\t\t\t\t--sl-spacing-x-small: 3px;\n\t\t\t  }\n\t\t\t"]))),
            ]);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Catch clicks on buttons and dispatch an et2-scroll event with the direction included
     *
     * @param e
     * @private
     */
    Et2ButtonScroll.prototype.handleClick = function (e) {
        var direction = parseInt(e.target.dataset.direction || "1") || 0;
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent("et2-scroll", { bubbles: true, detail: direction }));
    };
    Et2ButtonScroll.prototype.render = function () {
        // No spinner buttons on mobile
        if (typeof egwIsMobile == "function" && egwIsMobile()) {
            return '';
        }
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <div class=\"et2-button-scroll\"\n                 part=\"form-control\"\n                 exportparts=\"button:button\"\n                 slot=\"suffix\"\n                 @click=", "\n            >\n                <et2-button-icon\n                        noSubmit\n                        data-direction=\"1\"\n                        image=\"chevron-up\"\n                        part=\"button\"\n                >\u2191\n                </et2-button-icon>\n                <et2-button-icon\n                        noSubmit\n                        data-direction=\"-1\"\n                        image=\"chevron-down\"\n                        part=\"button\"\n                >\u2193\n                </et2-button-icon>\n            </div>"], ["\n            <div class=\"et2-button-scroll\"\n                 part=\"form-control\"\n                 exportparts=\"button:button\"\n                 slot=\"suffix\"\n                 @click=", "\n            >\n                <et2-button-icon\n                        noSubmit\n                        data-direction=\"1\"\n                        image=\"chevron-up\"\n                        part=\"button\"\n                >\u2191\n                </et2-button-icon>\n                <et2-button-icon\n                        noSubmit\n                        data-direction=\"-1\"\n                        image=\"chevron-down\"\n                        part=\"button\"\n                >\u2193\n                </et2-button-icon>\n            </div>"])), this.handleClick);
    };
    return Et2ButtonScroll;
}(ButtonMixin_1.ButtonMixin(lit_1.LitElement)));
exports.Et2ButtonScroll = Et2ButtonScroll;
if (typeof customElements.get("et2-button-scroll") == "undefined") {
    customElements.define("et2-button-scroll", Et2ButtonScroll);
}
var templateObject_1, templateObject_2;
