"use strict";
/**
 * EGroupware eTemplate2 - Searchbox widget
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package api
 * @link https://www.egroupware.org
 * @author Ralf Becker
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
exports.Et2Searchbox = void 0;
/* eslint-disable import/no-extraneous-dependencies */
var Et2Textbox_1 = require("./Et2Textbox");
/**
 * @customElement et2-searchbox
 */
var Et2Searchbox = /** @class */ (function (_super) {
    __extends(Et2Searchbox, _super);
    function Et2Searchbox() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this.overlay = false;
        _this.fix = true;
        _this.clearable = true;
        _this.type = 'search';
        _this.placeholder = 'search';
        _this.enterkeyhint = 'search';
        return _this;
    }
    Object.defineProperty(Et2Searchbox, "properties", {
        /** @type {any} */
        get: function () {
            return __assign(__assign({}, _super.properties), { 
                /**
                 * Define whether the searchbox overlays while it's open (true) or stay as solid box in front of the search button (false). Default is false.
                 * @todo implement again
                 */
                overlay: Boolean, 
                /**
                 * Define whether the searchbox should be a fix input field or flexible search button. Default is true (fix).
                 * @todo implement again
                 */
                fix: Boolean });
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Overwritten to trigger a change/search
     *
     * @param event
     */
    Et2Searchbox.prototype.handleKeyDown = function (event) {
        var hasModifier = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
        // Pressing enter when focused on an input should submit the form like a native input, but we wait a tick before
        // submitting to allow users to cancel the keydown event if they need to
        if (event.key === 'Enter' && !hasModifier) {
            event.preventDefault();
            // Stop from bubbling; enter in search is just for here.
            event.stopPropagation();
            // Lose focus, which triggers change, instead of calling change handler which would trigger again when losing focus
            this.blur();
        }
    };
    return Et2Searchbox;
}(Et2Textbox_1.Et2Textbox));
exports.Et2Searchbox = Et2Searchbox;
// @ts-ignore TypeScript is not recognizing that this is a LitElement
customElements.define("et2-searchbox", Et2Searchbox);
