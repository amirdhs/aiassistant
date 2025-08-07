"use strict";
/**
 * EGroupware eTemplate2 - JS Dialog Widget class
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @link https://www.egroupware.org
 * @author Nathan Gray
 * @copyright Nathan Gray 2013
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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.et2_dialog = void 0;
var Et2Dialog_1 = require("./Et2Dialog/Et2Dialog");
var et2_core_widget_1 = require("./et2_core_widget");
/**
 * Just a stub that wraps Et2Dialog
 *
 * Replace calls like:
 * ```ts
 * this.dialog = <et2_dialog>et2_createWidget("dialog",
    {
        callback: this.submit_callback,
        title: this.egw().lang(this.dialog_title),
        buttons: buttons,
        minWidth: 500,
        minHeight: 400,
        width: 400,
        value: data,
        template: this.egw().webserverUrl + this.TEMPLATE,
        resizable: true
    }, et2_dialog._create_parent('api'));
 * ```
 *
 * with this:
 * ```ts
 * this.dialog = new Et2Dialog(this.egw());
 * this.dialog.transformAttributes({
        callback: this.submit_callback,
        title: this.dialog_title,
        buttons: buttons,
        width: 400,
        value: data,
        template: this.egw().webserverUrl + this.TEMPLATE
    });
 document.body.appendChild(this.dialog);
 * ```
 * Dialog size now comes from contents, so it's better to leave width & height unset.
 * Set minimum dimensions in CSS.
 * Title & message are translated by Et2Dialog
 * @deprecated
 */
var et2_dialog = /** @class */ (function (_super) {
    __extends(et2_dialog, _super);
    function et2_dialog(parent, attrs) {
        var _this = _super.call(this, (parent === null || parent === void 0 ? void 0 : parent.egw()) || egw) || this;
        if (attrs.hasOwnProperty("modal")) {
            // modal is an internal property of SlDialog
            console.warn("modal is an internal property, use isModal instead");
            attrs.isModal = attrs.modal;
            delete attrs.modal;
        }
        if (attrs) {
            _this.transformAttributes(attrs);
        }
        document.body.appendChild(_this);
        return _this;
    }
    Object.defineProperty(et2_dialog.prototype, "template", {
        get: function () {
            return _super.prototype.template || {};
        },
        set: function (value) {
            _super.prototype.template = value;
        },
        enumerable: false,
        configurable: true
    });
    et2_dialog.prototype._getButtons = function () {
        if (Array.isArray(this.buttons) && this.buttons[0].text) {
            console.warn("Button definitions should follow DialogButton interface", this, this.buttons);
            return this.buttons.map(function (button) {
                if (button.text) {
                    button.label = button.text;
                }
                return button;
            });
        }
        return _super.prototype._getButtons.call(this);
    };
    et2_dialog.prototype.handleOpen = function (event) {
        _super.prototype.handleOpen.call(this, event);
        // move the overlay dialog into appendTo dom since we want it to be shown in that container
        if (this.appendTo) {
            document.getElementsByClassName(this.appendTo.replace('.', ''))[0].appendChild(this);
        }
    };
    Object.defineProperty(et2_dialog.prototype, "div", {
        /**
         * @deprecated
         * @returns {any}
         */
        get: function () {
            return this;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Create a parent to inject application specific egw object with loaded translations into et2_dialog
     *
     * @param {string|egw} _egw_or_appname egw object with already loaded translations or application name to load translations for
     */
    et2_dialog._create_parent = function (_egw_or_appname) {
        if (typeof _egw_or_appname == 'undefined') {
            // @ts-ignore
            _egw_or_appname = egw_appName;
        }
        // create a dummy parent with a correct reference to an application specific egw object
        var parent = new et2_core_widget_1.et2_widget();
        // if egw object is passed in because called from et2, just use it
        if (typeof _egw_or_appname != 'string') {
            parent.setApiInstance(_egw_or_appname);
        }
        // otherwise use given appname to create app-specific egw instance and load default translations
        else {
            parent.setApiInstance(egw(_egw_or_appname));
            parent.egw().langRequireApp(parent.egw().window, _egw_or_appname);
        }
        return parent;
    };
    return et2_dialog;
}(Et2Dialog_1.Et2Dialog));
exports.et2_dialog = et2_dialog;
// Get it working transparently as a legacy dialog
et2_core_widget_1.et2_register_widget(et2_dialog, ["dialog", "legacy_dialog"]);
var type_map = { String: "string", Function: "js" };
var attrs = {};
for (var _i = 0, _b = Object.entries(et2_dialog.properties); _i < _b.length; _i++) {
    var _c = _b[_i], key = _c[0], value = _c[1];
    var attr = et2_dialog.properties[key];
    attrs[key] = { type: type_map[((_a = attr.type) === null || _a === void 0 ? void 0 : _a.name) || attr.name] || "any" };
}
attrs["value"] = { type: "any" };
et2_core_widget_1.et2_attribute_registry[et2_dialog.name] = attrs;
customElements.define("legacy-dialog", et2_dialog);
