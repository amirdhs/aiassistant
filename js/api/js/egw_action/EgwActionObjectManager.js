"use strict";
/**
 * EGroupware egw_action framework - egw action framework
 *
 * @link https://www.egroupware.org
 * @author Andreas Stöckel <as@stylite.de>
 * @copyright 2011 by Andreas Stöckel
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package egw_action
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
exports.EgwActionObjectManager = void 0;
var egw_action_constants_1 = require("./egw_action_constants");
var EgwActionObject_1 = require("./EgwActionObject");
var egw_action_1 = require("./egw_action");
/**
 * The egwActionObjectManager is a dummy class which only contains a dummy
 * AOI. It may be used as root object or as object containers.
 *
 * @param {string} _id
 * @param {string} _manager
 * @return {EgwActionObjectManager}
 */
var EgwActionObjectManager = /** @class */ (function (_super) {
    __extends(EgwActionObjectManager, _super);
    function EgwActionObjectManager(_id, _manager) {
        var _this = this;
        var aoi = new egw_action_1.egwActionObjectInterface();
        //const ao = new egwActionObject(_id, null, aoi, _manager, EGW_AO_FLAG_IS_CONTAINER)
        _this = _super.call(this, _id, null, aoi, _manager, egw_action_constants_1.EGW_AO_FLAG_IS_CONTAINER) || this;
        _this.triggerCallback = function () {
            return false;
        };
        return _this;
    }
    return EgwActionObjectManager;
}(EgwActionObject_1.EgwActionObject));
exports.EgwActionObjectManager = EgwActionObjectManager;
