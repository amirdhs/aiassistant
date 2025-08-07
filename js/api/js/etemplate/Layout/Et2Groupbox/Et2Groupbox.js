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
exports.Et2Groupbox = void 0;
var Et2Details_1 = require("../Et2Details/Et2Details");
var lit_1 = require("lit");
var shoelace_1 = require("../../Styles/shoelace");
var property_js_1 = require("lit/decorators/property.js");
var custom_element_js_1 = require("lit/decorators/custom-element.js");
/**
 * Groupbox shows content in a box with a summary
 */
var Et2Groupbox = /** @class */ (function (_super) {
    __extends(Et2Groupbox, _super);
    function Et2Groupbox() {
        var _this = _super.call(this) || this;
        /**
         * Where to show the summary: false (default) summary is shown on top border, true: summary is shown inside
         */
        _this.summaryInside = false;
        // groupbox is always open
        _this.open = true;
        return _this;
    }
    Object.defineProperty(Et2Groupbox, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                shoelace_1.default,
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t:host {\n\t\t\t\t\theight: auto;\n\t\t\t\t}\n\n\t\t\t\tslot[name=\"collapse-icon\"], slot[name=\"expand-icon\"] {\n                    display: none;\n                }\n\n\t\t\t\t.details {\n\t\t\t\t\theight: 100%;\n                    position: relative;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: column;\n                }\n\n\t\t\t\t.details__body {\n\t\t\t\t\tflex: 1 1 auto;\n\t\t\t\t\tposition: relative;\n\t\t\t\t}\n\n\t\t\t\t.summaryOnTop .details__body {\n\t\t\t\t\theight: 100% !important;\n\t\t\t\t\tposition: relative;\n\t\t\t\t}\n\n\t\t\t\t.details__content {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\toverflow-y: auto;\n\t\t\t\t\theight: 100%;\n\t\t\t\t}\n\n\t\t\t\tsummary {\n\t\t\t\t\tflex: 0 0 auto;\n                    pointer-events: none;\n                }\n\n\t\t\t\t.details.summaryOnTop > summary {\n                    position: absolute;\n                    pointer-events: none;\n                    width: fit-content;\n                    line-height: 0;\n                    top: -.5rem;\n                    left: .5rem;\n                    background: var(--sl-color-neutral-0);\n                }\n\n\t\t\t\t.details.summaryOnTop {\n                    padding-top: .5rem;\n                    margin-top: .5rem;\n\t\t\t\t\theight: auto;\n\t\t\t\t\toverflow: visible;\n                }\n\t\t\t"], ["\n\t\t\t\t:host {\n\t\t\t\t\theight: auto;\n\t\t\t\t}\n\n\t\t\t\tslot[name=\"collapse-icon\"], slot[name=\"expand-icon\"] {\n                    display: none;\n                }\n\n\t\t\t\t.details {\n\t\t\t\t\theight: 100%;\n                    position: relative;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: column;\n                }\n\n\t\t\t\t.details__body {\n\t\t\t\t\tflex: 1 1 auto;\n\t\t\t\t\tposition: relative;\n\t\t\t\t}\n\n\t\t\t\t.summaryOnTop .details__body {\n\t\t\t\t\theight: 100% !important;\n\t\t\t\t\tposition: relative;\n\t\t\t\t}\n\n\t\t\t\t.details__content {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\toverflow-y: auto;\n\t\t\t\t\theight: 100%;\n\t\t\t\t}\n\n\t\t\t\tsummary {\n\t\t\t\t\tflex: 0 0 auto;\n                    pointer-events: none;\n                }\n\n\t\t\t\t.details.summaryOnTop > summary {\n                    position: absolute;\n                    pointer-events: none;\n                    width: fit-content;\n                    line-height: 0;\n                    top: -.5rem;\n                    left: .5rem;\n                    background: var(--sl-color-neutral-0);\n                }\n\n\t\t\t\t.details.summaryOnTop {\n                    padding-top: .5rem;\n                    margin-top: .5rem;\n\t\t\t\t\theight: auto;\n\t\t\t\t\toverflow: visible;\n                }\n\t\t\t"]))),
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Et2Groupbox.prototype.firstUpdated = function (changedProperties) {
        _super.prototype.firstUpdated.call(this, changedProperties);
        this.shadowRoot.querySelector('.details').classList.toggle('summaryOnTop', !this.summaryInside);
    };
    /**
     * A property has changed, and we want to make adjustments to other things
     * based on that
     *
     * @param  changedProperties
     */
    Et2Groupbox.prototype.updated = function (changedProperties) {
        _super.prototype.updated.call(this, changedProperties);
        if (changedProperties.has('summaryInside')) {
            this.shadowRoot.querySelector('.details').classList.toggle('summaryOnTop', !this.summaryInside);
        }
    };
    __decorate([
        property_js_1.property({ type: Boolean })
    ], Et2Groupbox.prototype, "summaryInside", void 0);
    Et2Groupbox = __decorate([
        custom_element_js_1.customElement("et2-groupbox")
    ], Et2Groupbox);
    return Et2Groupbox;
}(Et2Details_1.Et2Details));
exports.Et2Groupbox = Et2Groupbox;
var templateObject_1;
