"use strict";
/**
 * EGroupware eTemplate2 - et2-appicon widget
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2AppIcon = void 0;
var Et2Image_1 = require("./Et2Image");
var Et2AppIcon = /** @class */ (function (_super) {
    __extends(Et2AppIcon, _super);
    function Et2AppIcon() {
        var _this = _super.call(this) || this;
        _this.defaultSrc = 'nonav';
        return _this;
    }
    Et2AppIcon.prototype.parse_href = function (_app) {
        if (!_app)
            _app = this.egw().app_name();
        var src = (this.egw().app(_app, 'icon_app') || _app) + '/' + (this.egw().app(_app, 'icon') || 'navbar');
        return _super.prototype.parse_href.call(this, src);
    };
    return Et2AppIcon;
}(Et2Image_1.Et2Image));
exports.Et2AppIcon = Et2AppIcon;
customElements.define("et2-appicon", Et2AppIcon);
