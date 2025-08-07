"use strict";
/**
 * EGroupware eTemplate2 - Readonly Textbox widget (WebComponent)
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
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
exports.Et2TextboxReadonly = void 0;
var Et2Description_1 = require("../Et2Description/Et2Description");
/**
 * A readonly textbox is just a description.  You should use that instead, but here it is.
 */
var Et2TextboxReadonly = /** @class */ (function (_super) {
    __extends(Et2TextboxReadonly, _super);
    function Et2TextboxReadonly() {
        var _this = _super.call(this) || this;
        _this.noLang = true; // never translation r/o textboxes
        return _this;
    }
    return Et2TextboxReadonly;
}(Et2Description_1.Et2Description));
exports.Et2TextboxReadonly = Et2TextboxReadonly;
// We can't bind the same class to a different tag
// @ts-ignore TypeScript is not recognizing that Et2Textbox is a LitElement
customElements.define("et2-textbox_ro", Et2TextboxReadonly);
