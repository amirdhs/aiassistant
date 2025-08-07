"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2ThumbnailTag = void 0;
/**
 * EGroupware eTemplate2 - Thumbnail Tag WebComponent
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package api
 * @link https://www.egroupware.org
 * @author Nathan Gray
 */
var lit_1 = require("lit");
var shoelace_1 = require("../../Styles/shoelace");
var Et2Tag_1 = require("./Et2Tag");
/**
 * Used in a Et2ThumbnailSelect with multiple=true
 *
 * It's just easier to deal with the styling here due to scoping
 */
var Et2ThumbnailTag = /** @class */ (function (_super) {
    __extends(Et2ThumbnailTag, _super);
    function Et2ThumbnailTag() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this.pill = false;
        return _this;
    }
    Object.defineProperty(Et2ThumbnailTag, "styles", {
        get: function () {
            return [
                _super.styles,
                shoelace_1.default,
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t.tag {\n\t\t\t\t--icon-width: 100%;\n\t\t\t\tmax-width: 15em;\n\t\t\t\theight: unset;\n\t\t\t}\n\t\t\t\n\t\t\t::slotted(img) {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 50px;\n\t\t\t} \n\n\t\t"], ["\n\t\t\t.tag {\n\t\t\t\t--icon-width: 100%;\n\t\t\t\tmax-width: 15em;\n\t\t\t\theight: unset;\n\t\t\t}\n\t\t\t\n\t\t\t::slotted(img) {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 50px;\n\t\t\t} \n\n\t\t"])))
            ];
        },
        enumerable: false,
        configurable: true
    });
    return Et2ThumbnailTag;
}(Et2Tag_1.Et2Tag));
exports.Et2ThumbnailTag = Et2ThumbnailTag;
customElements.define("et2-thumbnail-tag", Et2ThumbnailTag);
var templateObject_1;
