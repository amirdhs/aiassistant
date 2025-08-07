"use strict";
/**
 * EGroupware eTemplate2 - JS Template base class
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
 * @link https://www.egroupware.org
 * @author Andreas Stöckel
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
exports.et2_template = void 0;
var Et2Template_1 = require("./Et2Template/Et2Template");
/**
 * @deprecated use Et2Template
 */
var et2_template = /** @class */ (function (_super) {
    __extends(et2_template, _super);
    function et2_template() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return et2_template;
}(Et2Template_1.Et2Template));
exports.et2_template = et2_template;
