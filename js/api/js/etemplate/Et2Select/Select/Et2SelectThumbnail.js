"use strict";
/**
 * EGroupware eTemplate2 - Image selection WebComponent
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package api
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
exports.Et2SelectThumbnail = void 0;
var Et2Select_1 = require("../Et2Select");
var lit_1 = require("lit");
var Et2SelectThumbnail = /** @class */ (function (_super) {
    __extends(Et2SelectThumbnail, _super);
    function Et2SelectThumbnail() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this.search = false;
        _this.allowFreeEntries = true;
        _this.editModeEnabled = true;
        _this.multiple = true;
        _this.pill = false;
        return _this;
    }
    Object.defineProperty(Et2SelectThumbnail, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\n\t\t\t/* Hide selected options from the dropdown */\n\t\t\t::slotted([checked])\n\t\t\t{\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t/* Hide dropdown icon */\n\n\t\t\t\t::part(expand-icon), .expand-icon {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t"], ["\n\t\n\t\t\t/* Hide selected options from the dropdown */\n\t\t\t::slotted([checked])\n\t\t\t{\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t/* Hide dropdown icon */\n\n\t\t\t\t::part(expand-icon), .expand-icon {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t"])))
            ]);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Create an entry that is not in the options and add it to the value
     * Overridden here to set the icon as the text, since this is a thumbnail
     *
     * @param {string} text Used as both value and label
     */
    Et2SelectThumbnail.prototype.createFreeEntry = function (text) {
        if (!this.validateFreeEntry(text)) {
            return false;
        }
        // Make sure not to double-add
        if (!this.select_options.find(function (o) { return o.value == text; })) {
            this.__select_options.push({
                value: text,
                label: "",
                icon: text
            });
            this.requestUpdate('select_options');
        }
        this.requestUpdate();
        // Make sure not to double-add
        if (this.multiple && this.value.indexOf(text) == -1) {
            this.value.push(text);
        }
        else if (!this.multiple) {
            this.value = text;
            return;
        }
        return true;
    };
    Object.defineProperty(Et2SelectThumbnail.prototype, "tagTag", {
        get: function () {
            return "et2-thumbnail-tag";
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Custom tag
     *
     * Override this to customise display when multiple=true.
     * There is no restriction on the tag used, unlike _optionTemplate()
     *
     * @param {Et2Option} option
     * @param {number} index
     * @returns {TemplateResult}
     * @protected
     */
    Et2SelectThumbnail.prototype._tagTemplate = function (option, index) {
        // Different image - slot in just an image so we can have complete control over styling
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <et2-thumbnail-tag\n                    ?removable=", "\n            >\n                <img\n                        part=\"image\"\n                        slot=\"prefix\"\n                        src=\"", "\"\n                />\n            </et2-thumbnail-tag>\n\t\t"], ["\n            <et2-thumbnail-tag\n                    ?removable=", "\n            >\n                <img\n                        part=\"image\"\n                        slot=\"prefix\"\n                        src=\"", "\"\n                />\n            </et2-thumbnail-tag>\n\t\t"])), this.multiple && !this.readonly, option.value);
    };
    return Et2SelectThumbnail;
}(Et2Select_1.Et2Select));
exports.Et2SelectThumbnail = Et2SelectThumbnail;
customElements.define("et2-select-thumbnail", Et2SelectThumbnail);
var templateObject_1, templateObject_2;
