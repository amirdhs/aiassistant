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
exports.activateLinks = void 0;
var lit_1 = require("lit");
var directive_js_1 = require("lit/directive.js");
var repeat_js_1 = require("lit/directives/repeat.js");
var et2_core_common_1 = require("./et2_core_common");
/**
 * Activates links in text
 *
 * @example
 * this.value = "This text has links to https://www.egroupware.org";
 * ...
 * render()
 * {
 *     return html`activateLinks(this.value)`;
 * }
 * renders as:
 * <a href="https://www.egroupware.org" target="_blank">egroupware.org</a>
 */
var ActivateLinksDirective = /** @class */ (function (_super) {
    __extends(ActivateLinksDirective, _super);
    function ActivateLinksDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActivateLinksDirective.prototype.render = function (text_with_urls, _target) {
        var list = et2_core_common_1.et2_activateLinks(text_with_urls);
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["", ""], ["",
            ""])), repeat_js_1.repeat(list, function (item, index) {
            // No urls in this section
            if (typeof item == "string" || typeof item == "number") {
                // Just text.  Easy (framework handles \n)
                return item;
            }
            // Url found, deal with it
            else if (item && item.text) {
                if (!item.href) {
                    console.warn("et2_activateLinks gave bad data", item, _target);
                    item.href = "";
                }
                var click = null;
                var target = null;
                // open mailto links depending on preferences in mail app
                if (item.href.substr(0, 7) == "mailto:" &&
                    egw.user('apps').mail &&
                    egw.preference('force_mailto', 'addressbook') != '1') {
                    click = function (event) {
                        egw.open_link(this);
                        return false;
                    }.bind(item.href);
                    item.href = "#";
                }
                if (typeof _target != "undefined" && _target && _target != "_self" && item.href.substr(0, 7) != "mailto:") {
                    target = _target;
                }
                return lit_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<a href=\"", "\" @click=", " target=\"", "\">", "</a>"], ["<a href=\"", "\" @click=", " target=\"", "\">", "</a>"])), item.href, click, target, item.text);
            }
        }));
    };
    return ActivateLinksDirective;
}(directive_js_1.Directive));
exports.activateLinks = directive_js_1.directive(ActivateLinksDirective);
var templateObject_1, templateObject_2;
