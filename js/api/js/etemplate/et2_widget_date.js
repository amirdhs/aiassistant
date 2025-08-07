"use strict";
/**
 * EGroupware eTemplate2 - Stubs for no longer existing legacy date-widget
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
 * @link https://www.egroupware.org
 * @author Nathan Gray
 * @copyright Nathan Gray 2011
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
exports.et2_date_range = exports.et2_date_ro = exports.et2_date_duration_ro = exports.et2_date_duration = exports.et2_date = void 0;
var Et2Date_1 = require("./Et2Date/Et2Date");
var Et2DateDuration_1 = require("./Et2Date/Et2DateDuration");
var Et2DateDurationReadonly_1 = require("./Et2Date/Et2DateDurationReadonly");
var Et2DateReadonly_1 = require("./Et2Date/Et2DateReadonly");
var Et2DateRange_1 = require("./Et2Date/Et2DateRange");
/**
 * @deprecated use Et2Date
 */
var et2_date = /** @class */ (function (_super) {
    __extends(et2_date, _super);
    function et2_date() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return et2_date;
}(Et2Date_1.Et2Date));
exports.et2_date = et2_date;
/**
 * @deprecated use Et2Date
 */
var et2_date_duration = /** @class */ (function (_super) {
    __extends(et2_date_duration, _super);
    function et2_date_duration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return et2_date_duration;
}(Et2DateDuration_1.Et2DateDuration));
exports.et2_date_duration = et2_date_duration;
/**
 * @deprecated use Et2Date
 */
var et2_date_duration_ro = /** @class */ (function (_super) {
    __extends(et2_date_duration_ro, _super);
    function et2_date_duration_ro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return et2_date_duration_ro;
}(Et2DateDurationReadonly_1.Et2DateDurationReadonly));
exports.et2_date_duration_ro = et2_date_duration_ro;
/**
 * @deprecated use Et2Date
 */
var et2_date_ro = /** @class */ (function (_super) {
    __extends(et2_date_ro, _super);
    function et2_date_ro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return et2_date_ro;
}(Et2DateReadonly_1.Et2DateReadonly));
exports.et2_date_ro = et2_date_ro;
/**
 * Widget for selecting a date range
 *
 * @todo port to web-component
 */
var et2_date_range = /** @class */ (function (_super) {
    __extends(et2_date_range, _super);
    function et2_date_range() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return et2_date_range;
}(Et2DateRange_1.Et2DateRange));
exports.et2_date_range = et2_date_range;
