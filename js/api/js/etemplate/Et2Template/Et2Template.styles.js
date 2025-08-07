"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var lit_1 = require("lit");
exports.default = lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t:host {\n\t\tdisplay: block;\n\t\tposition: relative;\n\t}\n\n\t.template--loading {\n\t\tposition: absolute;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tmin-height: 5rem;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\n\t\tbackground-color: var(--sl-panel-background-color);\n\t\tcolor: var(--application-color, var(--primary-color));\n\n\t\tz-index: var(--sl-z-index-dialog);\n\n\t\tfont-size: 5rem;\n\t}\n\n\t.template {\n\t\theight: 100%;\n\t}\n"], ["\n\t:host {\n\t\tdisplay: block;\n\t\tposition: relative;\n\t}\n\n\t.template--loading {\n\t\tposition: absolute;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tmin-height: 5rem;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\n\t\tbackground-color: var(--sl-panel-background-color);\n\t\tcolor: var(--application-color, var(--primary-color));\n\n\t\tz-index: var(--sl-z-index-dialog);\n\n\t\tfont-size: 5rem;\n\t}\n\n\t.template {\n\t\theight: 100%;\n\t}\n"])));
var templateObject_1;
