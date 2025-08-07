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
exports.EgwActionManager = void 0;
var EgwAction_1 = require("./EgwAction");
/**
 * egwActionManager manages a list of actions - it overwrites the egwAction class
 * and allows child actions to be added to it.
 *
 * @param {EgwAction} _parent
 * @param {string} _id
 * @return {EgwActionManager}
 */
var EgwActionManager = /** @class */ (function (_super) {
    __extends(EgwActionManager, _super);
    function EgwActionManager(_parent, _id) {
        if (_parent === void 0) { _parent = null; }
        if (_id === void 0) { _id = ""; }
        var _this = _super.call(this, _parent, _id) || this;
        _this.type = "actionManager";
        _this.canHaveChildren = true;
        return _this;
    }
    return EgwActionManager;
}(EgwAction_1.EgwAction));
exports.EgwActionManager = EgwActionManager;
