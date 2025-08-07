"use strict";
/**
 * EGroupware eTemplate2 - Description that can expose
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
 * @link https://www.egroupware.org
 * @author Nathan Gray
 * @copyright 2022 Nathan Gray
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
exports.Et2DescriptionExpose = void 0;
var ExposeMixin_1 = require("./ExposeMixin");
var Et2Description_1 = require("../Et2Description/Et2Description");
var lit_1 = require("lit");
/**
 * Shows a description and if you click on it, it shows the file specified by href in gallery.
 *
 * If the gallery cannot handle the file type (specified by mime) then href is handled as
 * a normal description, and clicking follows the link.
 */
//@ts-ignore Something not right with types & inheritance according to TypeScript
var Et2DescriptionExpose = /** @class */ (function (_super) {
    __extends(Et2DescriptionExpose, _super);
    function Et2DescriptionExpose() {
        return _super.call(this) || this;
    }
    Object.defineProperty(Et2DescriptionExpose, "properties", {
        get: function () {
            return __assign(__assign({}, _super.properties), { 
                /**
                 * Mime type
                 * Used to determine this widget can be exposed.  If not one of the OK mime types, will be treated
                 * as a normal description
                 */
                mime: {
                    type: String,
                    reflect: true
                }, 
                /**
                 * hash for data stored on service-side with egw_link::(get|set)_data()
                 */
                mimeData: { type: String } });
        },
        enumerable: false,
        configurable: true
    });
    Et2DescriptionExpose.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
    };
    Et2DescriptionExpose.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
    };
    Object.defineProperty(Et2DescriptionExpose.prototype, "value", {
        get: function () {
            return _super.prototype.value;
        },
        /** These guys needed to get value where it needs to be */
        set: function (new_value) {
            return _super.prototype.value = new_value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Needed to for transformAttributes() to set the value.
     * Not sure why Et2Description.set_value() isn't enough.
     */
    Et2DescriptionExpose.prototype.set_value = function (value) {
        _super.prototype.set_value.call(this, value);
    };
    /**
     * Override the wrap link, since clicking on a link would work and do both
     * @param href
     * @param value
     * @returns {TemplateResult<1>}
     * @protected
     */
    Et2DescriptionExpose.prototype.wrapLink = function (href, value) {
        if (this.isExposable()) {
            return lit_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), value);
        }
        else {
            // Expose cannot handle this particular file / link, wrap it as normal
            return _super.prototype.wrapLink.call(this, href, value);
        }
    };
    Object.defineProperty(Et2DescriptionExpose.prototype, "exposeValue", {
        /**
         * Used to determine if this widget is exposable.  Images always are, even if we don't actually
         * know the mime type.
         *
         * @returns {ExposeValue}
         */
        get: function () {
            return {
                mime: this.mime,
                path: this.href,
                download_url: this.href,
            };
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Get the info needed to show this image as slide(s)
     */
    Et2DescriptionExpose.prototype.getMedia = function (_value) {
        var media = _super.prototype.getMedia.call(this, _value);
        if (media) {
            media[0].title = this.value;
        }
        return media;
    };
    return Et2DescriptionExpose;
}(ExposeMixin_1.ExposeMixin(Et2Description_1.Et2Description)));
exports.Et2DescriptionExpose = Et2DescriptionExpose;
customElements.define("et2-description-expose", Et2DescriptionExpose);
var templateObject_1;
