"use strict";
/**
 * EGroupware eTemplate2 - Button that's just an image
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
exports.Et2ButtonIcon = void 0;
var Et2InputWidget_1 = require("../Et2InputWidget/Et2InputWidget");
require("../Et2Image/Et2Image");
var shoelace_1 = require("@shoelace-style/shoelace");
var ButtonMixin_1 = require("./ButtonMixin");
var shoelace_2 = require("../Styles/shoelace");
var lit_1 = require("lit");
var Et2ButtonIcon = /** @class */ (function (_super) {
    __extends(Et2ButtonIcon, _super);
    function Et2ButtonIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Et2ButtonIcon, "styles", {
        get: function () {
            return __spreadArrays(shoelace_2.default, (_super.styles || []), [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            :host {\n\t\t\t\tcolor: inherit;\n                flex: 0 0 auto !important;\t\t\t\n\t\t\t}\n            "], ["\n            :host {\n\t\t\t\tcolor: inherit;\n                flex: 0 0 auto !important;\t\t\t\n\t\t\t}\n            "]))),
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2ButtonIcon.prototype, "image", {
        get: function () {
            return this.__image || this.name;
        },
        set: function (new_image) {
            var _this = this;
            var oldValue = this.__image;
            if (new_image.indexOf("http") >= 0 || new_image.indexOf(this.egw().webserverUrl) >= 0) {
                this.src = new_image;
            }
            else {
                this.src = this.egw().image(new_image);
            }
            this.__image = new_image;
            // For some reason setting it directly does not show the image
            this.updateComplete.then(function () {
                var icon = _this.shadowRoot.querySelector('sl-icon');
                icon.id = "";
                if (new_image && !_this.src) {
                    icon.src = "";
                    icon.name = new_image;
                }
                else {
                    icon.name = "";
                }
            });
        },
        enumerable: false,
        configurable: true
    });
    return Et2ButtonIcon;
}(ButtonMixin_1.ButtonMixin(Et2InputWidget_1.Et2InputWidget(shoelace_1.SlIconButton))));
exports.Et2ButtonIcon = Et2ButtonIcon;
customElements.define("et2-button-icon", Et2ButtonIcon);
var templateObject_1;
