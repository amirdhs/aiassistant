"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var lit_1 = require("lit");
var icon_library_js_1 = require("@shoelace-style/shoelace/dist/utilities/icon-library.js");
var egw_global_1 = require("../../jsapi/egw_global");
/**
 * Here is the common overrides and customisations for Shoelace
 */
/**
 * Make shoelace icons available
 */
icon_library_js_1.registerIconLibrary('default', {
    resolver: function (name) {
        var _a;
        return typeof egw_global_1.egw !== "undefined" && typeof egw_global_1.egw.image == "function" ? ((_a = egw_global_1.egw.image(name)) !== null && _a !== void 0 ? _a : (egw_global_1.egw.webserverUrl || "") + "/node_modules/@shoelace-style/shoelace/dist/assets/icons/" + name + ".svg") : '';
    },
});
/**
 * Register egw images as an icon library
 * @example <sl-icon library="egw" name="infolog/navbar"/>
 * @example <sl-icon library="egw" name="5_day_view"/>
 */
if (typeof egw_global_1.egw !== "undefined" && typeof egw_global_1.egw.image == "function") {
    icon_library_js_1.registerIconLibrary('egw', {
        resolver: function (name) {
            return (egw_global_1.egw.image(name) || '');
        },
    });
}
/**
 * Customise shoelace styles to match our stuff
 * External CSS & widget styles will override this
 */
exports.default = [lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t.form-control--has-label .form-control__label {\n\t\tdisplay: inline-block;\n\t\tcolor: var(--sl-input-label-color);\n\t\tmargin-right: var(--sl-spacing-medium);\n\t}\n\n\t/* Hide placeholder in disabled inputs */\n\n\t.input--disabled input::placeholder, input[disabled]::placeholder, [disabled]::part(display-input)::placeholder {\n\t\topacity: 0;\n\t}\n"], ["\n\t.form-control--has-label .form-control__label {\n\t\tdisplay: inline-block;\n\t\tcolor: var(--sl-input-label-color);\n\t\tmargin-right: var(--sl-spacing-medium);\n\t}\n\n\t/* Hide placeholder in disabled inputs */\n\n\t.input--disabled input::placeholder, input[disabled]::placeholder, [disabled]::part(display-input)::placeholder {\n\t\topacity: 0;\n\t}\n"])))];
var templateObject_1;
