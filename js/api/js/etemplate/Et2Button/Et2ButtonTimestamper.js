"use strict";
/**
 * EGroupware eTemplate2 - JS Timestamp button object
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
 * @link https://www.egroupware.org
 * @author Nathan Gray
 * @copyright Nathan Gray 2017
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
exports.Et2ButtonTimestamper = void 0;
var et2_core_interfaces_1 = require("../et2_core_interfaces");
var date_js_1 = require("../lib/date.js");
var Et2Button_1 = require("./Et2Button");
/**
 * Class which implements the "et2-button-timestamp" tag
 *
 * Clicking the button puts the current time and current user at the end of
 * the provided field.
 */
var Et2ButtonTimestamper = /** @class */ (function (_super) {
    __extends(Et2ButtonTimestamper, _super);
    function Et2ButtonTimestamper() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        // Property default values
        _this.image = 'timestamp';
        _this.noSubmit = true;
        _this.onclick = _this.stamp.bind(_this);
        return _this;
    }
    Object.defineProperty(Et2ButtonTimestamper, "properties", {
        get: function () {
            return __assign(__assign({}, _super.properties), { 
                /**
                 * Which field to place the timestamp in
                 */
                target: {
                    type: String
                }, 
                /**
                 * Format for the timestamp.  User is always after.
                 */
                format: {
                    type: String
                }, 
                /**
                 * Timezone.  Default is user time.
                 */
                timezone: {
                    type: String
                } });
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Stamp the date / user into the target widget
     *
     * @param _ev
     */
    Et2ButtonTimestamper.prototype.stamp = function (event) {
        var _this = this;
        var now = new Date(new Date().toLocaleString('en-US', {
            timeZone: this.timezone || this.egw().preference('tz')
        }));
        var format = this.format || this.egw().preference('dateformat') + ' ' + (this.egw().preference("timeformat") === "12" ? "h:ia" : "H:i") + ' ';
        var text = date_js_1.date(format, now);
        // Get properly formatted user name
        // Try from account first, it's faster
        var fromAccount = this.egw().user("account_fullname") || "";
        if (fromAccount != "") {
            this.setText(text + fromAccount + ': ');
        }
        else {
            var user_1 = '' + parseInt(this.egw().user('account_id'));
            this.egw().accounts('accounts').then(function (accounts) {
                var account = accounts.filter(function (option) { return option.value == user_1; })[0];
                _this.setText(text + account.label + ': ');
            });
        }
    };
    Et2ButtonTimestamper.prototype.setText = function (text) {
        var widget = this._get_input(this.target);
        var input = widget.input ? widget.input : widget.getDOMNode();
        if (input.context) {
            input = input.get(0);
        }
        var scrollPos = input.scrollTop;
        var browser = ((input.selectionStart || input.selectionStart == "0") ?
            "standards" : (document["selection"] ? "ie" : false));
        var pos = 0;
        var tinymce = tinyMCE && tinyMCE.EditorManager.get(input.id) || false;
        // Find cursor or selection
        if (browser == "ie") {
            input.focus();
            var range = document["selection"].createRange();
            range.moveStart("character", -input.value.length);
            pos = range.text.length;
        }
        else if (browser == "standards") {
            pos = input.selectionStart;
        }
        // If on a tab, switch to that tab so user can see it
        var tabbox = widget;
        while (tabbox._parent && tabbox.nodeName !== 'ET2-TABBOX') {
            tabbox = tabbox._parent;
        }
        if (tabbox.nodeName === 'ET2-TABBOX') {
            tabbox.activateTab(widget);
        }
        // If tinymce, update it
        if (tinymce) {
            tinymce.insertContent(text);
        }
        else {
            // Insert the text
            var front = (input.value).substring(0, pos);
            var back = (input.value).substring(pos, input.value.length);
            // for webComponent, we need to set the component value too, otherwise the change is lost!
            if (typeof widget.tagName !== 'undefined') {
                widget.value = front + text + back;
            }
            input.value = front + text + back;
            // Clean up a little
            pos = pos + text.length;
            if (browser == "ie") {
                input.focus();
                var range = document["selection"].createRange();
                range.moveStart("character", -input.value.length);
                range.moveStart("character", pos);
                range.moveEnd("character", 0);
                range.select();
            }
            else if (browser == "standards") {
                input.selectionStart = pos;
                input.selectionEnd = pos;
                input.focus();
            }
            input.scrollTop = scrollPos;
            input.focus();
        }
    };
    Et2ButtonTimestamper.prototype._get_input = function (target) {
        var input = null;
        var widget = null;
        if (typeof target == 'string') {
            widget = this.getRoot().getWidgetById(target);
        }
        else if (target.instanceOf && target.instanceOf(et2_core_interfaces_1.et2_IInput)) {
            widget = target;
        }
        else if (typeof target == 'string' && target.indexOf('#') < 0 && jQuery('#' + this.target).is('input')) {
            input = this.target;
        }
        if (widget) {
            return widget;
        }
        if (input === null || input === void 0 ? void 0 : input.context) {
            input = input.get(0);
        }
        return input;
    };
    return Et2ButtonTimestamper;
}(Et2Button_1.Et2Button));
exports.Et2ButtonTimestamper = Et2ButtonTimestamper;
// @ts-ignore TypeScript is not recognizing that Et2Button is a LitElement
customElements.define("et2-button-timestamp", Et2ButtonTimestamper);
