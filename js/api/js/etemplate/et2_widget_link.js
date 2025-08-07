"use strict";
/**
 * EGroupware eTemplate2 - JS Link object
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
 * @link https://www.egroupware.org
 * @author Nathan Gray
 * @copyright 2011 Nathan Gray
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
exports.et2_link_list = void 0;
var Et2LinkList_1 = require("./Et2Link/Et2LinkList");
/**
 * @deprecated use Et2LinkList
 */
// can't just define as type, as tracker/app.ts uses it with iterateOver()!
// export type et2_link_list = Et2LinkList;
var et2_link_list = /** @class */ (function (_super) {
    __extends(et2_link_list, _super);
    function et2_link_list() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return et2_link_list;
}(Et2LinkList_1.Et2LinkList));
exports.et2_link_list = et2_link_list;
