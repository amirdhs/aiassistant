"use strict";
/**
 * EGroupware eTemplate2 - Account-selection WebComponent
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package api
 * @link https://www.egroupware.org
 * @author Ralf Becker <rb@egroupware.org>
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2SelectAccount = void 0;
var Et2Select_1 = require("../Et2Select");
var FindSelectOptions_1 = require("../FindSelectOptions");
var SelectAccountMixin_1 = require("../SelectAccountMixin");
var StaticOptions_1 = require("../StaticOptions");
var lit_1 = require("lit");
var property_js_1 = require("lit/decorators/property.js");
/**
 * @customElement et2-select-account
 */
var Et2SelectAccount = /** @class */ (function (_super) {
    __extends(Et2SelectAccount, _super);
    function Et2SelectAccount() {
        var _this = _super.call(this) || this;
        // all types can search the server.  If there are a lot of accounts, local list will
        // not be complete
        if (_this.egw().preference('account_selection', 'common') !== 'none') {
            _this.searchUrl = "EGroupware\\Api\\Etemplate\\Widget\\Taglist::ajax_search";
        }
        _this.searchOptions = { type: 'account', account_type: 'accounts' };
        _this.accountType = 'accounts';
        return _this;
    }
    Et2SelectAccount.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        // Start fetch of select_options
        this.fetchComplete = this._getAccounts();
    };
    /**
     * Pre-fill the account list according to type & preferences
     *
     * @protected
     * @internal
     */
    Et2SelectAccount.prototype._getAccounts = function () {
        var _this = this;
        var type = this.egw().preference('account_selection', 'common');
        var fetch = [];
        var process = function (options) {
            // Shallow copy to avoid re-using the same object.
            // Uses more memory, but otherwise multiple selectboxes get "tied" together
            var cleaned = FindSelectOptions_1.cleanSelectOptions(options)
                // slice to avoid problems with lots of accounts
                .slice(0, /* Et2WidgetWithSearch.RESULT_LIMIT */ 100);
            _this.account_options = _this.account_options.concat(cleaned);
        };
        // for primary_group we only display owngroups == own memberships, not other groups
        if (type === 'primary_group' && this.accountType !== 'accounts') {
            if (this.accountType === 'both') {
                fetch.push(this.egw().accounts('accounts').then(process));
            }
            fetch.push(this.egw().accounts('owngroups').then(process));
        }
        else if (type !== "none") {
            fetch.push(this.egw().accounts(this.accountType).then(process));
        }
        return Promise.all(fetch).then(function () {
            _this.requestUpdate("select_options");
            _this.value = _this.value;
        });
    };
    Object.defineProperty(Et2SelectAccount.prototype, "accountType", {
        get: function () {
            return this.__accountType;
        },
        /**
         * Which account-types to return: users, groups or both
         */
        set: function (type) {
            this.__accountType = type;
            this.searchOptions.account_type = type;
            _super.prototype.select_options = this.select_options;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2SelectAccount.prototype, "select_options", {
        /**
         * Get account info for select options from common client-side account cache
         */
        get: function () {
            var type = this.egw().preference('account_selection', 'common');
            if (type === 'none' && typeof this.egw().user('apps').admin === 'undefined') {
                return [];
            }
            return _super.prototype.select_options;
        },
        set: function (new_options) {
            _super.prototype.select_options = new_options;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Override filter to not, since we don't have all accounts available
     */
    Et2SelectAccount.prototype.filterOutMissingOptions = function (value) {
        return value;
    };
    /**
     * Override icon for the select option
     *
     * @param option
     * @protected
     */
    Et2SelectAccount.prototype._iconTemplate = function (option) {
        // lavatar uses a size property, not a CSS variable
        var style = getComputedStyle(this);
        return lit_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            <et2-lavatar slot=\"prefix\" part=\"icon\" exportparts=\"image\" .size=", "\n                         lname=", "\n                         fname=", "\n                         image=", "\n                         contactid=", "\n            >\n            </et2-lavatar>"], ["\n            <et2-lavatar slot=\"prefix\" part=\"icon\" exportparts=\"image\" .size=", "\n                         lname=", "\n                         fname=", "\n                         image=", "\n                         contactid=", "\n            >\n            </et2-lavatar>"])), style.getPropertyValue("--icon-width"), option.lname || lit_1.nothing, option.fname || lit_1.nothing, option.icon || lit_1.nothing, option.value ? "account:" + option.value : lit_1.nothing);
    };
    __decorate([
        property_js_1.property()
    ], Et2SelectAccount.prototype, "accountType", null);
    return Et2SelectAccount;
}(SelectAccountMixin_1.SelectAccountMixin(StaticOptions_1.Et2StaticSelectMixin(Et2Select_1.Et2Select))));
exports.Et2SelectAccount = Et2SelectAccount;
customElements.define("et2-select-account", Et2SelectAccount);
var templateObject_1;
