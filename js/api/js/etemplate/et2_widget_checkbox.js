"use strict";
/**
 * EGroupware eTemplate2 - JS Checkbox object
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
exports.et2_checkbox = void 0;
var Et2Checkbox_1 = require("./Et2Checkbox/Et2Checkbox");
/**
 * @deprecated use Et2Checkbox
 */
var et2_checkbox = /** @class */ (function (_super) {
    __extends(et2_checkbox, _super);
    function et2_checkbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return et2_checkbox;
}(Et2Checkbox_1.Et2Checkbox));
exports.et2_checkbox = et2_checkbox;
