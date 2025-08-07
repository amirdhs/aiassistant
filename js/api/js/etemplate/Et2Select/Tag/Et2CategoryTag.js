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
exports.Et2CategoryTag = void 0;
/**
 * EGroupware eTemplate2 - Category Tag WebComponent
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
 * Tag is usually used in a Et2CategorySelect with multiple=true, but there's no reason it can't go anywhere
 */
var Et2CategoryTag = /** @class */ (function (_super) {
    __extends(Et2CategoryTag, _super);
    function Et2CategoryTag() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _super.apply(this, args) || this;
    }
    Object.defineProperty(Et2CategoryTag, "styles", {
        get: function () {
            return [
                _super.styles,
                shoelace_1.default,
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t.tag {\n\t\t\t\tgap: var(--sl-spacing-2x-small);\n\t\t\t\t/* --category-color is passed through in _styleTemplate() */\n\t\t\t\tborder-left: 6px solid var(--category-color, transparent);\n\t\t\t}\n\t\t"], ["\n\t\t\t.tag {\n\t\t\t\tgap: var(--sl-spacing-2x-small);\n\t\t\t\t/* --category-color is passed through in _styleTemplate() */\n\t\t\t\tborder-left: 6px solid var(--category-color, transparent);\n\t\t\t}\n\t\t"])))
            ];
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Due to how the scoping / encapulation works, we need to re-assign the category color
     * variable here so it can be passed through.  .cat_# {--category-color} is not visible.
     *
     * @returns {TemplateResult}
     * @protected
     */
    Et2CategoryTag.prototype._styleTemplate = function () {
        var cat_var = "var(--cat-" + this.value + "-color)";
        // @formatter:off
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["<style>.tag { --category-color: ", "}</style>"], ["<style>.tag { --category-color: ", "}</style>"])), cat_var);
        //@formatter:on
    };
    return Et2CategoryTag;
}(Et2Tag_1.Et2Tag));
exports.Et2CategoryTag = Et2CategoryTag;
customElements.define("et2-category-tag", Et2CategoryTag);
var templateObject_1, templateObject_2;
