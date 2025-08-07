"use strict";
/**
 * EGroupware eTemplate2 - Readonly date-time_today WebComponent
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package api
 * @link https://www.egroupware.org
 * @author Nathan Gray
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2DateTimeToday = void 0;
var Et2Date_1 = require("./Et2Date");
var Et2DateReadonly_1 = require("./Et2DateReadonly");
/**
 * Widget displays date/time with different formatting relative to today
 * If the date is today, we show just the time, otherwise just the date.
 */
var Et2DateTimeToday = /** @class */ (function (_super) {
    __extends(Et2DateTimeToday, _super);
    function Et2DateTimeToday() {
        var _this = _super.call(this) || this;
        _this.parser = Et2Date_1.parseDateTime;
        _this.formatter = _this.formatDateTime;
        return _this;
    }
    /**
     * Format date+time relative to "now"
     * If the date is today, we show just the time.  Otherwise, the date.
     *
     * @param {Date} date
     * @returns {string}
     */
    Et2DateTimeToday.prototype.formatDateTime = function (date, options) {
        if (options === void 0) { options = { dateFormat: "", timeFormat: "" }; }
        var display = "";
        // Today - just the time
        if (Et2Date_1.formatDate(date, { dateFormat: 'Y-m-d' }) == Et2Date_1.formatDate(new Date(), { dateFormat: 'Y-m-d' })) {
            display = Et2Date_1.formatTime(date);
        }
        // Before today - just the date
        else {
            display = Et2Date_1.formatDate(date);
        }
        return display;
    };
    return Et2DateTimeToday;
}(Et2DateReadonly_1.Et2DateReadonly));
exports.Et2DateTimeToday = Et2DateTimeToday;
// @ts-ignore TypeScript is not recognizing that this is a LitElement
customElements.define("et2-date-time-today", Et2DateTimeToday);
