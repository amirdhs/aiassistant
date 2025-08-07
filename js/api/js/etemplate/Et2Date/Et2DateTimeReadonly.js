"use strict";
/**
 * EGroupware eTemplate2 - Readonly date+time WebComponent
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
exports.Et2DateTimeReadonly = void 0;
var Et2Date_1 = require("./Et2Date");
var Et2DateReadonly_1 = require("./Et2DateReadonly");
/**
 * This is a stripped-down read-only widget used in nextmatch
 */
var Et2DateTimeReadonly = /** @class */ (function (_super) {
    __extends(Et2DateTimeReadonly, _super);
    function Et2DateTimeReadonly() {
        var _this = _super.call(this) || this;
        _this.parser = Et2Date_1.parseDateTime;
        _this.formatter = Et2Date_1.formatDateTime;
        return _this;
    }
    return Et2DateTimeReadonly;
}(Et2DateReadonly_1.Et2DateReadonly));
exports.Et2DateTimeReadonly = Et2DateTimeReadonly;
// @ts-ignore TypeScript is not recognizing that Et2Date is a LitElement
customElements.define("et2-date-time_ro", Et2DateTimeReadonly);
