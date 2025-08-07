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
exports.Et2VfsGid = exports.Et2VfsUid = void 0;
var Et2SelectReadonly_1 = require("../Et2Select/Select/Et2SelectReadonly");
var Et2VfsUid = /** @class */ (function (_super) {
    __extends(Et2VfsUid, _super);
    function Et2VfsUid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Et2VfsUid.prototype, "value", {
        get: function () {
            return _super.prototype.value;
        },
        set: function (_val) {
            if (!_val || _val === '0') {
                this.select_options = [{ value: '0', label: 'root' }];
            }
            _super.prototype.value = _val;
        },
        enumerable: false,
        configurable: true
    });
    return Et2VfsUid;
}(Et2SelectReadonly_1.Et2SelectAccountReadonly));
exports.Et2VfsUid = Et2VfsUid;
// @ts-ignore TypeScript is not recognizing that this widget is a LitElement
customElements.define("et2-vfs-uid", Et2VfsUid);
var Et2VfsGid = /** @class */ (function (_super) {
    __extends(Et2VfsGid, _super);
    function Et2VfsGid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Et2VfsGid;
}(Et2VfsUid));
exports.Et2VfsGid = Et2VfsGid;
// @ts-ignore TypeScript is not recognizing that this widget is a LitElement
customElements.define("et2-vfs-gid", Et2VfsGid);
