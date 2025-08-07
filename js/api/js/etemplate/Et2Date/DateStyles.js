"use strict";
/**
 * Sharable date styles constant
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStyles = void 0;
var lit_1 = require("lit");
var colorsDefStyles_1 = require("../Styles/colorsDefStyles");
var Et2Widget_1 = require("../Et2Widget/Et2Widget");
exports.dateStyles = [
    colorsDefStyles_1.colorsDefStyles,
    lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t:host {\n\t\tdisplay: block;\n\t\twhite-space: nowrap;\n\t\tmin-width: fit-content;\n\t\tbackground-color: transparent;\n\t}\n\t.overdue {\n\t\tcolor: red; // var(--whatever the theme color)\n\t}\n\tinput.flatpickr {\n\t\tborder: 1px solid;\n\t\tborder-color: var(--input-border-color);\n\t\tcolor: var(--input-text-color);\n\t\tpadding-top: 4px;\n\t\tpadding-bottom: 4px;\n\t\tflex: 1 1 auto;\n\t}\n\tinput.flatpickr:hover {\n\t\tbackground-image: ", ";\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-position-x: right;\n\t\tbackground-position-y: 1px;\n\t\tbackground-size: 18px;\n\t}\n"], ["\n\t:host {\n\t\tdisplay: block;\n\t\twhite-space: nowrap;\n\t\tmin-width: fit-content;\n\t\tbackground-color: transparent;\n\t}\n\t.overdue {\n\t\tcolor: red; // var(--whatever the theme color)\n\t}\n\tinput.flatpickr {\n\t\tborder: 1px solid;\n\t\tborder-color: var(--input-border-color);\n\t\tcolor: var(--input-text-color);\n\t\tpadding-top: 4px;\n\t\tpadding-bottom: 4px;\n\t\tflex: 1 1 auto;\n\t}\n\tinput.flatpickr:hover {\n\t\tbackground-image: ", ";\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-position-x: right;\n\t\tbackground-position-y: 1px;\n\t\tbackground-size: 18px;\n\t}\n"])), Et2Widget_1.cssImage("datepopup"))
];
var templateObject_1;
