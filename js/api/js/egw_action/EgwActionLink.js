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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EgwActionLink = void 0;
var egw_action_common_1 = require("./egw_action_common");
/**
 * The egwActionLink is used to interconnect egwActionObjects and egwActions.
 * This gives each action object the possibility to decide, whether the action
 * should be active in this context or not.
 *
 * @param _manager is a reference to the egwActionManager which contains the action
 *    the object wants to link to.
 */
var EgwActionLink = /** @class */ (function () {
    function EgwActionLink(_manager) {
        this.enabled = true;
        this.visible = true;
        this.actionId = "";
        this.actionObj = null;
        this.manager = _manager;
    }
    EgwActionLink.prototype.updateLink = function (_data) {
        egw_action_common_1.egwActionStoreJSON(_data, this, true);
    };
    EgwActionLink.prototype.set_enabled = function (_value) {
        this.enabled = _value;
    };
    ;
    EgwActionLink.prototype.set_visible = function (_value) {
        this.visible = _value;
    };
    ;
    EgwActionLink.prototype.set_actionId = function (_value) {
        this.actionId = _value;
        this.actionObj = this.manager.getActionById(_value);
        if (!this.actionObj)
            throw "Action object with id '" + _value + "' does not exist!";
    };
    ;
    return EgwActionLink;
}());
exports.EgwActionLink = EgwActionLink;
