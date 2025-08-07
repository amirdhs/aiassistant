"use strict";
/**
 * EGroupware eTemplate2 - Box widget
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
exports.Et2VBox = exports.Et2HBox = exports.Et2Box = void 0;
var lit_1 = require("lit");
var class_map_js_1 = require("lit/directives/class-map.js");
var Et2Widget_1 = require("../../Et2Widget/Et2Widget");
/**
 * @summary A basic wrapper to group other widgets
 *
 * @slot - Any other widget
 */
var Et2Box = /** @class */ (function (_super) {
    __extends(Et2Box, _super);
    function Et2Box() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Et2Box, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            :host {\n\t\t\t\tdisplay: block;\n            }\n            :host > div {\n            \tdisplay: flex;\n            \tflex-wrap: nowrap;\n            \tjustify-content: flex-start;\n            \talign-items: stretch;\n            \tgap: 5px;\n            \theight: 100%;\n\t\t\t}\n\t\t\t:host([align=\"right\"]) > div {\n\t\t\t\tjustify-content: flex-end;\n\t\t\t}\n\t\t\t:host([align=\"left\"]) > div {\n\t\t\t\tjustify-content: flex-start;\n\t\t\t}\n\t\t\t:host([align=\"center\"]) > div {\n\t\t\t\tjustify-content: center;\n\t\t\t}\n\t\t\t/* CSS for child elements */\n            ::slotted(*) {\n            \tflex: 1 1 auto;\n            }\n            ::slotted(img),::slotted(et2-image) {\n            \t/* Stop images from growing.  In general we want them to stay */\n            \tflex-grow: 0;\n            }\n            ::slotted([align=\"left\"]) {\n            \tmargin-right: auto;\n            \torder: -1;\n            }\n            ::slotted([align=\"right\"]) {\n            \tmargin-left: auto;\n            \torder: 1;\n\t\t\t\ttext-align: initial;\n            }\n            \n            /* work around for chromium print bug, see render() */\n            :host > .no-print-gap {\n            \tgap: 0px;\n            }\n            "], ["\n            :host {\n\t\t\t\tdisplay: block;\n            }\n            :host > div {\n            \tdisplay: flex;\n            \tflex-wrap: nowrap;\n            \tjustify-content: flex-start;\n            \talign-items: stretch;\n            \tgap: 5px;\n            \theight: 100%;\n\t\t\t}\n\t\t\t:host([align=\"right\"]) > div {\n\t\t\t\tjustify-content: flex-end;\n\t\t\t}\n\t\t\t:host([align=\"left\"]) > div {\n\t\t\t\tjustify-content: flex-start;\n\t\t\t}\n\t\t\t:host([align=\"center\"]) > div {\n\t\t\t\tjustify-content: center;\n\t\t\t}\n\t\t\t/* CSS for child elements */\n            ::slotted(*) {\n            \tflex: 1 1 auto;\n            }\n            ::slotted(img),::slotted(et2-image) {\n            \t/* Stop images from growing.  In general we want them to stay */\n            \tflex-grow: 0;\n            }\n            ::slotted([align=\"left\"]) {\n            \tmargin-right: auto;\n            \torder: -1;\n            }\n            ::slotted([align=\"right\"]) {\n            \tmargin-left: auto;\n            \torder: 1;\n\t\t\t\ttext-align: initial;\n            }\n            \n            /* work around for chromium print bug, see render() */\n            :host > .no-print-gap {\n            \tgap: 0px;\n            }\n            "]))),
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Et2Box.prototype.render = function () {
        /**
         * Work around Chromium bug
         * https://bugs.chromium.org/p/chromium/issues/detail?id=1161709
         *
         * Printing with gap on empty element gives huge print output
         */
        var noGap = false;
        if (this.querySelectorAll(":scope > :not([disabled])").length == 0) {
            noGap = true;
        }
        return lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            <div part=\"base\" ", " class=", ">\n                <slot></slot>\n            </div> "], ["\n            <div part=\"base\" ", " class=",
            ">\n                <slot></slot>\n            </div> "])), this.id ? lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["id=\"", "\""], ["id=\"", "\""])), this.id) : '', class_map_js_1.classMap({
            "no-print-gap": noGap
        }));
    };
    Et2Box.prototype.set_label = function (new_label) {
        // Boxes don't have labels
    };
    Et2Box.prototype._createNamespace = function () {
        return true;
    };
    /**
     * Code for implementing et2_IDetachedDOM
     *
     * Individual widgets are detected and handled by the grid, but the interface is needed for this to happen
     *
     * @param {array} _attrs array to add further attributes to
     */
    Et2Box.prototype.getDetachedAttributes = function (_attrs) {
        _attrs.push('data', 'onclick', 'statustext');
    };
    Et2Box.prototype.getDetachedNodes = function () {
        return [this.getDOMNode()];
    };
    Et2Box.prototype.setDetachedAttributes = function (_nodes, _values) {
        if (_values.data) {
            this.data = _values.data;
        }
    };
    return Et2Box;
}(Et2Widget_1.Et2Widget(lit_1.LitElement)));
exports.Et2Box = Et2Box;
customElements.define("et2-box", Et2Box);
var Et2HBox = /** @class */ (function (_super) {
    __extends(Et2HBox, _super);
    function Et2HBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Et2HBox, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                lit_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            :host > div {\n            \tflex-direction: row;\n\t\t\t}"], ["\n            :host > div {\n            \tflex-direction: row;\n\t\t\t}"])))
            ]);
        },
        enumerable: false,
        configurable: true
    });
    return Et2HBox;
}(Et2Box));
exports.Et2HBox = Et2HBox;
customElements.define("et2-hbox", Et2HBox);
/**
 * @summary Vertically align child widgets
 *
 * This box includes styling to stop children from growing vertically.
 * Set css```flex-grow: 1``` on the child to allow it to grow.
 *
 * @slot - Any other widget
 */
var Et2VBox = /** @class */ (function (_super) {
    __extends(Et2VBox, _super);
    function Et2VBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Et2VBox, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                lit_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\t\t\t  :host > div {\n\t\t\t\tflex-direction: column;\n\t\t\t  }\n\n\t\t\t  :host([align=\"center\"]) > div {\n\t\t\t\talign-items: center;\n\t\t\t  }\n\n\t\t\t  /* CSS for child elements */\n\n\t\t\t  ::slotted(*) {\n\t\t\t\t/* Stop children from growing vertically.  In general we want them to stay their \"normal\" height */\n\t\t\t\tflex-grow: 0;\n\t\t\t  }\n\n\t\t\t"], ["\n\t\t\t  :host > div {\n\t\t\t\tflex-direction: column;\n\t\t\t  }\n\n\t\t\t  :host([align=\"center\"]) > div {\n\t\t\t\talign-items: center;\n\t\t\t  }\n\n\t\t\t  /* CSS for child elements */\n\n\t\t\t  ::slotted(*) {\n\t\t\t\t/* Stop children from growing vertically.  In general we want them to stay their \"normal\" height */\n\t\t\t\tflex-grow: 0;\n\t\t\t  }\n\n\t\t\t"])))
            ]);
        },
        enumerable: false,
        configurable: true
    });
    return Et2VBox;
}(Et2Box));
exports.Et2VBox = Et2VBox;
customElements.define("et2-vbox", Et2VBox);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
