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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2EmailTag = void 0;
/**
 * EGroupware eTemplate2 - Email Tag WebComponent
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package api
 * @link https://www.egroupware.org
 * @author Nathan Gray
 */
var lit_1 = require("lit");
var property_js_1 = require("lit/decorators/property.js");
var class_map_js_1 = require("lit/directives/class-map.js");
var shoelace_1 = require("../../Styles/shoelace");
var Et2Tag_1 = require("./Et2Tag");
var utils_1 = require("../../Et2Email/utils");
var until_js_1 = require("lit/directives/until.js");
/**
 * Display a single email address
 * On hover, queries the server to see if the email is associated with a contact already.  If it is, we
 * show the contact's avatar, clicking it opens CRM view for that contact.  If the email is unknown, we
 * show and Add icon.  Clicking it opens the add contact dialog with the email pre-filled.
 *
 * Tag is usually used in a Et2EmailSelect with multiple=true, but there's no reason it can't go anywhere
 */
var Et2EmailTag = /** @class */ (function (_super) {
    __extends(Et2EmailTag, _super);
    function Et2EmailTag() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this.contactPlus = true;
        /**
         * What to display for the selected email addresses
         *
         *	- full: "Mr Test User <test@example.com>
         *	- name: "Mr Test User"
         *	- domain: "Mr Test User (example.com)"
         *	- email: "test@example.com"
         *
         * If name is unknown, we'll use the email instead.
         */
        _this.emailDisplay = "domain";
        _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
        _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
        _this.handleMouseClick = _this.handleMouseClick.bind(_this);
        _this.handleContactMouseDown = _this.handleContactMouseDown.bind(_this);
        return _this;
    }
    Object.defineProperty(Et2EmailTag, "styles", {
        get: function () {
            return [
                _super.styles,
                shoelace_1.default,
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t.tag {\n\t\t\t  position: relative;\n\t\t\t}\n\n\t\t\t.tag__prefix {\n\t\t\t  flex: 0 1 auto;\n\n\t\t\t  opacity: 30%;\n\t\t\t  cursor: pointer;\n\n\n\t\t\t\tet2-lavatar {\n\t\t\t\t\t--size: var(--icon-width, 1em);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.tag__has_plus et2-button-icon {\n\t\t\t  visibility: visible;\n\t\t\t}\n\n\t\t\t:host(:hover) .tag__has_plus {\n\t\t\t  opacity: 100%;\n\t\t\t}\n\n\t\t\t/* Address is for a contact - always show */\n\n\t\t\t.tag__prefix.tag__has_contact {\n\t\t\t  opacity: 100%;\n\t\t\t}\n\n\t\t\t.tag__remove {\n\t\t\t  order: 3;\n\t\t\t}\n\n\t\t\t/* Shoelace disabled gives a not-allowed cursor, but we also set disabled for read-only.\n\t\t\t * We don't want the not-allowed cursor, since you can always click the email address\n\t\t\t */\n\n\t\t\t:host([readonly]) {\n\t\t\t  cursor: pointer !important;\n\t\t\t}\n\n\t\t\t"], ["\n\t\t\t.tag {\n\t\t\t  position: relative;\n\t\t\t}\n\n\t\t\t.tag__prefix {\n\t\t\t  flex: 0 1 auto;\n\n\t\t\t  opacity: 30%;\n\t\t\t  cursor: pointer;\n\n\n\t\t\t\tet2-lavatar {\n\t\t\t\t\t--size: var(--icon-width, 1em);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.tag__has_plus et2-button-icon {\n\t\t\t  visibility: visible;\n\t\t\t}\n\n\t\t\t:host(:hover) .tag__has_plus {\n\t\t\t  opacity: 100%;\n\t\t\t}\n\n\t\t\t/* Address is for a contact - always show */\n\n\t\t\t.tag__prefix.tag__has_contact {\n\t\t\t  opacity: 100%;\n\t\t\t}\n\n\t\t\t.tag__remove {\n\t\t\t  order: 3;\n\t\t\t}\n\n\t\t\t/* Shoelace disabled gives a not-allowed cursor, but we also set disabled for read-only.\n\t\t\t * We don't want the not-allowed cursor, since you can always click the email address\n\t\t\t */\n\n\t\t\t:host([readonly]) {\n\t\t\t  cursor: pointer !important;\n\t\t\t}\n\n\t\t\t"])))
            ];
        },
        enumerable: false,
        configurable: true
    });
    Et2EmailTag.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        if (this.contactPlus && this.egw().app('addressbook')) {
            this.addEventListener("mouseenter", this.handleMouseEnter);
            this.addEventListener("mouseleave", this.handleMouseLeave);
        }
    };
    Et2EmailTag.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        this.removeEventListener("mouseenter", this.handleMouseEnter);
        this.removeEventListener("mouseleave", this.handleMouseLeave);
    };
    Et2EmailTag.prototype.handleMouseEnter = function (e) {
        this.shadowRoot.querySelector(".tag").classList.add("contact_plus");
    };
    Et2EmailTag.prototype.handleMouseLeave = function (e) {
        this.shadowRoot.querySelector(".tag").classList.remove("contact_plus");
    };
    Et2EmailTag.prototype.handleMouseClick = function (e) {
        var _a;
        e.stopPropagation();
        var extra = {
            'presets[email]': (_a = this.value) !== null && _a !== void 0 ? _a : ""
        };
        this.egw().open('', 'addressbook', 'add', extra);
    };
    Et2EmailTag.prototype.handleContactMouseDown = function (e) {
        var _this = this;
        e.stopPropagation();
        utils_1.checkContact(this.value).then(function (result) {
            _this.egw().open(result.id, 'addressbook', 'view', {
                title: result.n_fn,
                icon: result.photo
            });
        });
    };
    Object.defineProperty(Et2EmailTag.prototype, "_contactPlusNode", {
        /**
         * Get the node that is shown & clicked on to add email as contact
         *
         * @returns {Element}
         */
        get: function () {
            return this.shadowRoot.querySelector(".tag__prefix");
        },
        enumerable: false,
        configurable: true
    });
    Et2EmailTag.prototype._contentTemplate = function () {
        var content = utils_1.formatEmailAddress(this.value, this.emailDisplay);
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <span part=\"content\" class=\"tag__content\" title=\"", "\">\n\t\t\t", "\n        </span>"], ["\n            <span part=\"content\" class=\"tag__content\" title=\"", "\">\n\t\t\t", "\n        </span>"])), this.value, until_js_1.until(content, this.value));
    };
    Et2EmailTag.prototype._prefixTemplate = function () {
        var _this = this;
        var classes = {
            "tag__prefix": true,
        };
        var button_or_avatar = utils_1.checkContact(this.value).then(function (option) {
            var button_or_avatar;
            if (typeof option == "object") {
                // Show the lavatar for the contact
                classes['tag__has_contact'] = true;
                // lavatar uses a size property, not a CSS variable
                var style = getComputedStyle(_this);
                button_or_avatar = lit_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                <et2-lavatar slot=\"prefix\" exportparts=\"image\" part=\"icon\" tabindex=\"-1\"\n                             @mousedown=", "\n                             lname=", "\n                             fname=", "\n                             image=", "\n                             contactid=", "\n                             statustext=\"", "\"\n                >\n                </et2-lavatar>"], ["\n                <et2-lavatar slot=\"prefix\" exportparts=\"image\" part=\"icon\" tabindex=\"-1\"\n                             @mousedown=", "\n                             lname=", "\n                             fname=", "\n                             image=", "\n                             contactid=", "\n                             statustext=\"", "\"\n                >\n                </et2-lavatar>"])), _this.handleContactMouseDown, option.lname || lit_1.nothing, option.fname || lit_1.nothing, option.photo || lit_1.nothing, option.photo ? lit_1.nothing : "email:" + option.email, _this.egw().lang("Open existing contact") + ": " + option.n_fn);
            }
            else {
                // Show a button to add as new contact
                classes['tag__has_plus'] = true;
                button_or_avatar = lit_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                    <et2-button-icon image=\"add\" tabindex=\"-1\" @click=", " .noSubmit=", "\n                                 label=\"", "\"\n                                 statustext=\"", "\">\n                </et2-button-icon>"], ["\n                    <et2-button-icon image=\"add\" tabindex=\"-1\" @click=", " .noSubmit=", "\n                                 label=\"", "\"\n                                 statustext=\"", "\">\n                </et2-button-icon>"])), _this.handleMouseClick, true, _this.egw().lang("Add a new contact"), _this.egw().lang("Add a new contact"));
            }
            return lit_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["<span part=\"prefix\" class=", ">\n\t\t\t\t<slot name=\"prefix\">\n\t\t\t\t</slot>\n\t\t\t\t", "\n\t\t\t</span>"], ["<span part=\"prefix\" class=", ">\n\t\t\t\t<slot name=\"prefix\">\n\t\t\t\t</slot>\n\t\t\t\t", "\n\t\t\t</span>"])), class_map_js_1.classMap(classes), button_or_avatar);
        });
        return lit_1.html(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n            ", ""], ["\n            ",
            ""])), until_js_1.until(button_or_avatar, lit_1.html(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n                <span part=\"prefix\" class=", "> \n\t\t\t\t\t<slot name=\"prefix\"></slot>\n\t\t\t\t\t<sl-spinner></sl-spinner>\n\t\t\t\t</span>"], ["\n                <span part=\"prefix\" class=", "> \n\t\t\t\t\t<slot name=\"prefix\"></slot>\n\t\t\t\t\t<sl-spinner></sl-spinner>\n\t\t\t\t</span>"])), class_map_js_1.classMap(classes))));
    };
    __decorate([
        property_js_1.property({ type: Boolean, reflect: true })
    ], Et2EmailTag.prototype, "contactPlus", void 0);
    __decorate([
        property_js_1.property({ type: String })
    ], Et2EmailTag.prototype, "emailDisplay", void 0);
    return Et2EmailTag;
}(Et2Tag_1.Et2Tag));
exports.Et2EmailTag = Et2EmailTag;
customElements.define("et2-email-tag", Et2EmailTag);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
