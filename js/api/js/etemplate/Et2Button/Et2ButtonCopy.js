"use strict";
/**
 * EGroupware eTemplate2 - Button widget
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2ButtonCopy = void 0;
var Et2Widget_1 = require("../Et2Widget/Et2Widget");
var shoelace_1 = require("@shoelace-style/shoelace");
var custom_element_js_1 = require("lit/decorators/custom-element.js");
var Et2ButtonCopy = /** @class */ (function (_super) {
    __extends(Et2ButtonCopy, _super);
    function Et2ButtonCopy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Et2ButtonCopy = __decorate([
        custom_element_js_1.customElement('et2-button-copy')
    ], Et2ButtonCopy);
    return Et2ButtonCopy;
}(Et2Widget_1.Et2Widget(shoelace_1.SlCopyButton)));
exports.Et2ButtonCopy = Et2ButtonCopy;
