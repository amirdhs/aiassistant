"use strict";
/**
 * EGroupware eTemplate2 - Readonly select WebComponent
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package api
 * @link https://www.egroupware.org
 * @author Ralf Becker <rb@egroupware.org>
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
exports.Et2VfsNameReadonly = exports.Et2VfsName = void 0;
var Et2Textbox_1 = require("../Et2Textbox/Et2Textbox");
var Et2Description_1 = require("../Et2Description/Et2Description");
var egw_global_1 = require("../../jsapi/egw_global");
var Et2VfsName = /** @class */ (function (_super) {
    __extends(Et2VfsName, _super);
    function Et2VfsName() {
        var _this = _super.call(this) || this;
        _this.validator = /^[^\/\\]+$/;
        return _this;
    }
    Object.defineProperty(Et2VfsName.prototype, "value", {
        get: function () {
            return egw_global_1.egw.encodePath(_super.prototype.value || '');
        },
        set: function (_value) {
            if (_value.path) {
                _value = _value.path;
            }
            try {
                _value = egw_global_1.egw.decodePath(_value);
            }
            catch (e) {
                _value = 'Error! ' + _value;
            }
            _super.prototype.value = _value;
        },
        enumerable: false,
        configurable: true
    });
    return Et2VfsName;
}(Et2Textbox_1.Et2Textbox));
exports.Et2VfsName = Et2VfsName;
// @ts-ignore TypeScript is not recognizing that this widget is a LitElement
customElements.define("et2-vfs-name", Et2VfsName);
var Et2VfsNameReadonly = /** @class */ (function (_super) {
    __extends(Et2VfsNameReadonly, _super);
    function Et2VfsNameReadonly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Et2VfsNameReadonly.prototype, "value", {
        get: function () {
            return egw_global_1.egw.encodePath(_super.prototype.value || '');
        },
        set: function (_value) {
            if (_value.path) {
                _value = _value.path;
            }
            try {
                _value = egw_global_1.egw.decodePath(_value);
            }
            catch (e) {
                _value = 'Error! ' + _value;
            }
            _super.prototype.value = _value;
        },
        enumerable: false,
        configurable: true
    });
    return Et2VfsNameReadonly;
}(Et2Description_1.Et2Description));
exports.Et2VfsNameReadonly = Et2VfsNameReadonly;
// @ts-ignore TypeScript is not recognizing that this widget is a LitElement
customElements.define("et2-vfs-name_ro", Et2VfsNameReadonly);
