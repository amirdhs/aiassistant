"use strict";
/**
 * EGroupware eTemplate2 - Details WebComponent
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package api
 * @link https://www.egroupware.org
 * @author Hadi Nategh
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2Details = void 0;
var Et2Widget_1 = require("../../Et2Widget/Et2Widget");
var lit_1 = require("lit");
var shoelace_1 = require("@shoelace-style/shoelace");
var shoelace_2 = require("../../Styles/shoelace");
var property_js_1 = require("lit/decorators/property.js");
var custom_element_js_1 = require("lit/decorators/custom-element.js");
var class_map_js_1 = require("lit/directives/class-map.js");
/**
 * Details show a brief summary and expand to show additional content
 *
 * @slot - The details’ main content.
 * @slot summary - The details’ summary. Alternatively, you can use the summary attribute.
 * @slot expand-icon - Optional expand icon to use instead of the default. Works best with <sl-icon>.
 * @slot collapse-icon - Optional collapse icon to use instead of the default. Works best with <sl-icon>.
 *
 * @csspart base - Component wrapper
 * @csspart header - Header content
 * @csspart summary-icon - expand / collapse icon wrapper
 * @csspart content - The details' main content
 */
var Et2Details = /** @class */ (function (_super) {
    __extends(Et2Details, _super);
    function Et2Details() {
        var _this = _super.call(this) || this;
        /**
         * Toggle when hover over
         */
        _this.toggleOnHover = false;
        /**
         * Makes details content fixed position to break out of the container
         */
        _this.hoist = false;
        /**
         * set toggle alignment either to left or right. Default is right alignment.
         */
        _this.toggleAlign = "right";
        /**
         * Overlay summary container with the details container when in open state
         */
        _this.overlaySummaryOnOpen = false;
        _this.handleAccordionOpen = _this.handleAccordionOpen.bind(_this);
        _this._mouseOutEvent = _this._mouseOutEvent.bind(_this);
        return _this;
    }
    Object.defineProperty(Et2Details, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                shoelace_2.default,
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t:host {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t}\n\t\t\t\t:host([align=\"right\"]) > div {\n\t\t\t\t\tjustify-content: flex-end;\n\t\t\t\t}\n\n\t\t\t\t:host([align=\"left\"]) > div {\n\t\t\t\t\tjustify-content: flex-start;\n\t\t\t\t}\n\n\t\t\t\t/* CSS for child elements */\n\n\t\t\t\t::slotted(*) {\n\t\t\t\t\tflex: 1 1 auto;\n\t\t\t\t}\n\n\t\t\t\t::slotted(img), ::slotted(et2-image) {\n\t\t\t\t\t/* Stop images from growing.  In general we want them to stay */\n\t\t\t\t\tflex-grow: 0;\n\t\t\t\t}\n\n\t\t\t\t::slotted([align=\"left\"]) {\n\t\t\t\t\tmargin-right: auto;\n\t\t\t\t\torder: -1;\n\t\t\t\t}\n\n\t\t\t\t::slotted([align=\"right\"]) {\n\t\t\t\t\tmargin-left: auto;\n\t\t\t\t\torder: 1;\n\t\t\t\t}\n\n\t\t\t\t.details {\n\t\t\t\t\tborder: var(--sl-panel-border-width) solid var(--sl-panel-border-color);\n\t\t\t\t\tmargin: 0px;\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t}\n\n\t\t\t\t.details__content {\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tmin-height: 1px;\n\t\t\t\t\toverflow-y: auto;\n\t\t\t\t}\n\n\t\t\t\t.details.hoist {\n\t\t\t\t\tposition: relative;\n\t\t\t\t\toverflow: visible;\n\t\t\t\t}\n\n\t\t\t\t.details__body {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.details--open .details__body {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tflex: 1 1 auto;\n\t\t\t\t}\n\n\t\t\t\t.details:not(.hoist).details--open.details--overlay-summary {\n\t\t\t\t\t.details__summary {\n\t\t\t\t\t\tvisibility: hidden;\n\t\t\t\t\t}\n\n\t\t\t\t\t.details__body {\n\t\t\t\t\t\tmargin-top: calc(-1 * var(--sl-input-height-medium));\n\t\t\t\t\t}\n\n\t\t\t\t\t.details__body.overlaySummaryRightAligned {\n\t\t\t\t\t\tpadding-right: calc(3 * var(--sl-spacing-medium));\n\t\t\t\t\t}\n\n\t\t\t\t\t.details__body.overlaySummaryLeftAligned {\n\t\t\t\t\t\tpadding-left: calc(3 * var(--sl-spacing-medium));\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t.details.hoist .details__body {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tz-index: var(--sl-z-index-drawer);\n\t\t\t\t\tbackground: var(--sl-color-neutral-0);\n\t\t\t\t\tbox-shadow: var(--sl-shadow-large);\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\tmin-width: fit-content;\n\t\t\t\t\tborder-radius: var(--sl-border-radius-small);\n\t\t\t\t\tborder: var(--sl-panel-border-width) solid var(--sl-panel-border-color);\n\t\t\t\t\tmax-height: 15em;\n\t\t\t\t\toverflow-y: auto;\n\t\t\t\t}\n\n\t\t\t\t.details.hoist .details__body.overlaySummaryLeftAligned {\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 2em;\n\t\t\t\t\twidth: calc(100% - 2em);\n\t\t\t\t}\n\n\t\t\t\t.details.hoist .details__body.overlaySummaryRightAligned {\n\t\t\t\t\ttop: 0;\n\t\t\t\t}\n\n\t\t\t\t.details__summary-icon--left-aligned {\n\t\t\t\t\torder: -1;\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\t:host {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t}\n\t\t\t\t:host([align=\"right\"]) > div {\n\t\t\t\t\tjustify-content: flex-end;\n\t\t\t\t}\n\n\t\t\t\t:host([align=\"left\"]) > div {\n\t\t\t\t\tjustify-content: flex-start;\n\t\t\t\t}\n\n\t\t\t\t/* CSS for child elements */\n\n\t\t\t\t::slotted(*) {\n\t\t\t\t\tflex: 1 1 auto;\n\t\t\t\t}\n\n\t\t\t\t::slotted(img), ::slotted(et2-image) {\n\t\t\t\t\t/* Stop images from growing.  In general we want them to stay */\n\t\t\t\t\tflex-grow: 0;\n\t\t\t\t}\n\n\t\t\t\t::slotted([align=\"left\"]) {\n\t\t\t\t\tmargin-right: auto;\n\t\t\t\t\torder: -1;\n\t\t\t\t}\n\n\t\t\t\t::slotted([align=\"right\"]) {\n\t\t\t\t\tmargin-left: auto;\n\t\t\t\t\torder: 1;\n\t\t\t\t}\n\n\t\t\t\t.details {\n\t\t\t\t\tborder: var(--sl-panel-border-width) solid var(--sl-panel-border-color);\n\t\t\t\t\tmargin: 0px;\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t}\n\n\t\t\t\t.details__content {\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tmin-height: 1px;\n\t\t\t\t\toverflow-y: auto;\n\t\t\t\t}\n\n\t\t\t\t.details.hoist {\n\t\t\t\t\tposition: relative;\n\t\t\t\t\toverflow: visible;\n\t\t\t\t}\n\n\t\t\t\t.details__body {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.details--open .details__body {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tflex: 1 1 auto;\n\t\t\t\t}\n\n\t\t\t\t.details:not(.hoist).details--open.details--overlay-summary {\n\t\t\t\t\t.details__summary {\n\t\t\t\t\t\tvisibility: hidden;\n\t\t\t\t\t}\n\n\t\t\t\t\t.details__body {\n\t\t\t\t\t\tmargin-top: calc(-1 * var(--sl-input-height-medium));\n\t\t\t\t\t}\n\n\t\t\t\t\t.details__body.overlaySummaryRightAligned {\n\t\t\t\t\t\tpadding-right: calc(3 * var(--sl-spacing-medium));\n\t\t\t\t\t}\n\n\t\t\t\t\t.details__body.overlaySummaryLeftAligned {\n\t\t\t\t\t\tpadding-left: calc(3 * var(--sl-spacing-medium));\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t.details.hoist .details__body {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tz-index: var(--sl-z-index-drawer);\n\t\t\t\t\tbackground: var(--sl-color-neutral-0);\n\t\t\t\t\tbox-shadow: var(--sl-shadow-large);\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\tmin-width: fit-content;\n\t\t\t\t\tborder-radius: var(--sl-border-radius-small);\n\t\t\t\t\tborder: var(--sl-panel-border-width) solid var(--sl-panel-border-color);\n\t\t\t\t\tmax-height: 15em;\n\t\t\t\t\toverflow-y: auto;\n\t\t\t\t}\n\n\t\t\t\t.details.hoist .details__body.overlaySummaryLeftAligned {\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 2em;\n\t\t\t\t\twidth: calc(100% - 2em);\n\t\t\t\t}\n\n\t\t\t\t.details.hoist .details__body.overlaySummaryRightAligned {\n\t\t\t\t\ttop: 0;\n\t\t\t\t}\n\n\t\t\t\t.details__summary-icon--left-aligned {\n\t\t\t\t\torder: -1;\n\t\t\t\t}\n\t\t\t"]))),
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Details, "translate", {
        /**
         * List of properties that get translated
         * Done separately to not interfere with properties - if we re-define label property,
         * labels go missing.
         */
        get: function () {
            return __assign(__assign({}, _super.translate), { summary: true });
        },
        enumerable: false,
        configurable: true
    });
    Et2Details.prototype.connectedCallback = function () {
        var _this = this;
        _super.prototype.connectedCallback.call(this);
        if (this.accordionGroup) {
            window.document.addEventListener("sl-show", this.handleAccordionOpen);
        }
        this.updateComplete.then(function () {
            if (_this.toggleOnHover) {
                _this.addEventListener("mouseover", _this.show);
                window.document.addEventListener('mouseout', _this._mouseOutEvent);
            }
        });
    };
    Et2Details.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        window.document.removeEventListener("sl-show", this.handleAccordionOpen);
        window.document.removeEventListener('mouseout', this._mouseOutEvent);
    };
    /**
     * Handle mouse out event for hiding out details
     * @param event
     */
    Et2Details.prototype._mouseOutEvent = function (event) {
        if (!this.getDOMNode().contains(event.relatedTarget))
            this.hide();
    };
    Et2Details.prototype.handleAccordionOpen = function (event) {
        if (event.target !== this && this.accordionGroup && event.target.accordionGroup == this.accordionGroup) {
            this.hide();
        }
    };
    Et2Details.prototype.render = function () {
        var isRtl = this.matches(':dir(rtl)');
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <div\n                    part=\"base\"\n                    class=", "\n            >\n                <summary\n                        part=\"header\"\n                        id=\"header\"\n                        class=\"details__header\"\n                        role=\"button\"\n                        aria-expanded=", "\n                        aria-controls=\"content\"\n                        aria-disabled=", "\n                        tabindex=", "\n                        @click=", "\n                        @keydown=", "\n                >\n                    <slot name=\"summary\" part=\"summary\" class=\"details__summary\">", "</slot>\n\n                    <span part=\"summary-icon\" class=", ">\n\t\t\t\t\t\t<slot name=\"expand-icon\">\n\t\t\t\t\t\t\t<sl-icon library=\"system\" name=", "></sl-icon>\n\t\t\t\t\t\t</slot>\n\t\t\t\t\t\t<slot name=\"collapse-icon\">\n\t\t\t\t\t\t\t<sl-icon library=\"system\" name=", "></sl-icon>\n\t\t\t\t\t\t</slot>\n\t\t\t\t\t</span>\n                </summary>\n                <div class=", " role=\"region\" aria-labelledby=\"header\">\n                    <slot part=\"content\" id=\"content\" class=\"details__content\"></slot>\n                </div>\n            </div>\n\t\t"], ["\n            <div\n                    part=\"base\"\n                    class=",
            "\n            >\n                <summary\n                        part=\"header\"\n                        id=\"header\"\n                        class=\"details__header\"\n                        role=\"button\"\n                        aria-expanded=", "\n                        aria-controls=\"content\"\n                        aria-disabled=", "\n                        tabindex=", "\n                        @click=", "\n                        @keydown=", "\n                >\n                    <slot name=\"summary\" part=\"summary\" class=\"details__summary\">", "</slot>\n\n                    <span part=\"summary-icon\" class=",
            ">\n\t\t\t\t\t\t<slot name=\"expand-icon\">\n\t\t\t\t\t\t\t<sl-icon library=\"system\" name=", "></sl-icon>\n\t\t\t\t\t\t</slot>\n\t\t\t\t\t\t<slot name=\"collapse-icon\">\n\t\t\t\t\t\t\t<sl-icon library=\"system\" name=", "></sl-icon>\n\t\t\t\t\t\t</slot>\n\t\t\t\t\t</span>\n                </summary>\n                <div class=",
            " role=\"region\" aria-labelledby=\"header\">\n                    <slot part=\"content\" id=\"content\" class=\"details__content\"></slot>\n                </div>\n            </div>\n\t\t"])), class_map_js_1.classMap({
            details: true,
            'details--open': this.open,
            'details--disabled': this.disabled,
            'details--rtl': isRtl,
            'details--overlay-summary': this.overlaySummaryOnOpen,
            'hoist': this.hoist
        }), this.open ? 'true' : 'false', this.disabled ? 'true' : 'false', this.disabled ? '-1' : '0', this.handleSummaryClick, this.handleSummaryKeyDown, this.summary, class_map_js_1.classMap({
            "details__summary-icon": true,
            "details__summary-icon--left-aligned": this.toggleAlign == "left"
        }), isRtl ? 'chevron-left' : 'chevron-right', isRtl ? 'chevron-left' : 'chevron-right', class_map_js_1.classMap({
            details__body: true,
            overlaySummaryLeftAligned: this.overlaySummaryOnOpen && this.toggleAlign === 'left',
            overlaySummaryRightAligned: this.overlaySummaryOnOpen && this.toggleAlign !== 'left',
        }));
    };
    __decorate([
        property_js_1.property({ type: Boolean })
    ], Et2Details.prototype, "toggleOnHover", void 0);
    __decorate([
        property_js_1.property({ type: Boolean })
    ], Et2Details.prototype, "hoist", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2Details.prototype, "toggleAlign", void 0);
    __decorate([
        property_js_1.property({ type: Boolean })
    ], Et2Details.prototype, "overlaySummaryOnOpen", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2Details.prototype, "accordionGroup", void 0);
    Et2Details = __decorate([
        custom_element_js_1.customElement("et2-details")
    ], Et2Details);
    return Et2Details;
}(Et2Widget_1.Et2Widget(shoelace_1.SlDetails)));
exports.Et2Details = Et2Details;
var templateObject_1, templateObject_2;
