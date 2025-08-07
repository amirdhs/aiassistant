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
exports.EgwDragAction = void 0;
var EgwAction_1 = require("./EgwAction");
/**
 * The egwDragAction class overwrites the egwAction class and adds the new
 * "dragType" property. The "onExecute" event of the drag action will be called
 * whenever dragging starts. The onExecute JS handler should return the
 * drag-drop helper object - otherwise a default helper will be generated.
 */
var EgwDragAction = /** @class */ (function (_super) {
    __extends(EgwDragAction, _super);
    /**
     * @param {EgwAction} parent
     * @param {string} _id
     * @param {string} _caption
     * @param {string} _iconUrl
     * @param {(string|function)} _onExecute
     * @param {bool} _allowOnMultiple
     */
    function EgwDragAction(parent, _id, _caption, _iconUrl, _onExecute, _allowOnMultiple) {
        var _this = _super.call(this, parent, _id, _caption, _iconUrl, _onExecute, _allowOnMultiple) || this;
        _this.dragType = "default";
        _this.type = "drag";
        _this.hideOnDisabled = true;
        return _this;
    }
    EgwDragAction.prototype.set_dragType = function (_value) {
        this.dragType = _value;
    };
    return EgwDragAction;
}(EgwAction_1.EgwAction));
exports.EgwDragAction = EgwDragAction;
