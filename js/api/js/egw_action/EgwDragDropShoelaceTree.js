"use strict";
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
exports.EgwDragDropShoelaceTree = exports.EXPAND_FOLDER_ON_DRAG_DROP_TIMEOUT = void 0;
/**
 * EGroupware egw_dragdrop_shoelaceTree - egw action framework
 *
 * @link https://www.egroupware.org
 * @author Andreas Stöckel <as@stylite.de>
 * @copyright 2011 by Andreas Stöckel
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package egw_action
 */
var egw_action_1 = require("./egw_action");
var egw_action_constants_1 = require("./egw_action_constants");
var egw_action_common_1 = require("./egw_action_common");
exports.EXPAND_FOLDER_ON_DRAG_DROP_TIMEOUT = 1000;
var EgwDragDropShoelaceTree = /** @class */ (function (_super) {
    __extends(EgwDragDropShoelaceTree, _super);
    function EgwDragDropShoelaceTree(_tree) {
        var _this = _super.call(this) || this;
        _this.tree = _tree;
        _this.findActionTargetHandler = _tree;
        _this.timeouts = {};
        return _this;
    }
    EgwDragDropShoelaceTree.prototype.doTriggerEvent = function (egw_event, data) {
        var _a;
        var dom_event = (_a = data.event) !== null && _a !== void 0 ? _a : data;
        var target = this.findActionTargetHandler.findActionTarget(dom_event);
        if (egw_event == egw_action_constants_1.EGW_AI_DRAG_ENTER && !target.target.classList.contains("draggedOver")) {
            // Remove drag classes from all items
            this.tree.shadowRoot.querySelectorAll("sl-tree-item.draggedOver").forEach(function (n) {
                n.classList.remove("draggedOver", "drop-hover");
            });
            target.target.classList.add("draggedOver", "drop-hover");
            // Open nodes with children after a wait
            if (target.target.hasAttribute("lazy") || target.target.querySelector(target.target.nodeName)) {
                this.timeouts[target.target.id] = setTimeout(function () {
                    if (target.target.classList.contains("draggedOver")) {
                        target.target.expanded = true;
                    }
                }, exports.EXPAND_FOLDER_ON_DRAG_DROP_TIMEOUT);
            }
        }
        else if (egw_event == egw_action_constants_1.EGW_AI_DRAG_OUT) {
            target.target.classList.remove("draggedOver", "drop-hover");
            clearTimeout(this.timeouts[target.target.id]);
        }
        else if (egw_event == egw_action_constants_1.EGW_AI_DRAG) {
            target.action.setSelected(true);
        }
        return true;
    };
    EgwDragDropShoelaceTree.prototype.doSetState = function (_state) {
        if (!this.tree || !this.tree.focusItem) {
            return;
        }
        if (this.stateChangeContext) {
            var target = this.tree.shadowRoot.querySelector("[id='" + this.stateChangeContext.id + "']");
            if (target && egw_action_common_1.egwBitIsSet(_state, egw_action_constants_1.EGW_AO_STATE_FOCUSED)) {
                target.focus();
            }
        }
        // Update the "focused" flag
        if (egw_action_common_1.egwBitIsSet(_state, egw_action_constants_1.EGW_AO_STATE_FOCUSED)) {
            this.tree.focus();
        }
        if (egw_action_common_1.egwBitIsSet(_state, egw_action_constants_1.EGW_AO_STATE_SELECTED)) {
            // _tree.selectItem(this.id, false);	// false = do not trigger onSelect
        }
    };
    EgwDragDropShoelaceTree.prototype.getWidget = function () {
        return this.tree;
    };
    EgwDragDropShoelaceTree.prototype.doGetDOMNode = function () {
        return this.tree;
    };
    return EgwDragDropShoelaceTree;
}(egw_action_1.egwActionObjectInterface));
exports.EgwDragDropShoelaceTree = EgwDragDropShoelaceTree;
