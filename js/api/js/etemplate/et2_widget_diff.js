"use strict";
/**
 * EGroupware eTemplate2 - JS Diff object
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
 * @link https://www.egroupware.org
 * @author Nathan Gray
 * @copyright Nathan Gray 2012
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
exports.et2_diff = void 0;
var et2_core_widget_1 = require("./et2_core_widget");
var Et2Diff_1 = require("./Et2Diff/Et2Diff");
/**
 * Class that displays the diff between two [text] values
 *
 * @augments et2_valueWidget
 */
var et2_diff = /** @class */ (function (_super) {
    __extends(et2_diff, _super);
    function et2_diff() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return et2_diff;
}(Et2Diff_1.Et2Diff));
exports.et2_diff = et2_diff;
et2_core_widget_1.et2_register_widget(et2_diff, ["diff"]);
