"use strict";
/**
 * EGroupware eTemplate2 - Contains interfaces used inside the dataview
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage dataview
 * @link https://www.egroupware.org
 * @author Andreas Stöckel
 * @copyright EGroupware GmbH 2011-2021
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.et2_dataview_rowAOI = exports.EGW_SELECTMODE_TOGGLE = exports.EGW_SELECTMODE_DEFAULT = void 0;
/*egw:uses
    egw_action.egw_action_common;
    egw_action.egw_action;
    /vendor/bower-asset/jquery-touchswipe/jquery.touchSwipe.js;
*/
var egw_action_1 = require("../egw_action/egw_action");
var egw_action_constants_1 = require("../egw_action/egw_action_constants");
var egw_action_common_1 = require("../egw_action/egw_action_common");
var egw_menu_1 = require("../egw_action/egw_menu");
var tapandswipe_1 = require("../tapandswipe");
/**
 * Contains the action object interface implementation for the nextmatch widget
 * row.
 */
exports.EGW_SELECTMODE_DEFAULT = 0;
exports.EGW_SELECTMODE_TOGGLE = 1;
/**
 * An action object interface for each nextmatch widget row - "inherits" from
 * egwActionObjectInterface
 *
 * @param {DOMNode} _node
 */
function et2_dataview_rowAOI(_node) {
    "use strict";
    var aoi = new egw_action_1.egwActionObjectInterface();
    aoi.node = _node;
    aoi.selectMode = exports.EGW_SELECTMODE_DEFAULT;
    aoi.checkBox = null; //(jQuery(":checkbox", aoi.node))[0];
    // Rows without a checkbox OR an id set are unselectable
    aoi.doGetDOMNode = function () {
        return aoi.node;
    };
    // Prevent the browser from selecting the content of the element, when
    // a special key is pressed.
    //Seems not to be necessary in nextmatch anymore
    //_node.addEventListener("mousedown",egwPreventSelect);
    /**
     * Now append some action code to the node
     *
     * @memberOf et2_dataview_rowAOI
     * @param {DOMEvent} e
     * @param {object} _params
     */
    var selectHandler = function (e, _params) {
        // Reset the focus so that keyboard navigation will work properly
        // after the element has been clicked
        egw_action_common_1.egwUnfocus();
        // Reset the prevent selection code (in order to allow wanted
        // selection of text)
        _node.onselectstart = null;
        if (e.target != aoi.checkBox) {
            var selected = egw_action_common_1.egwBitIsSet(aoi.getState(), egw_action_constants_1.EGW_AO_STATE_SELECTED);
            var state = egw_action_common_1.egwGetShiftState(e);
            if (_params) {
                if (egw_action_common_1.egwIsMobile()) {
                    switch (_params.swip) {
                        case "left":
                        case "right":
                            state = 1;
                            // Hide context menu on swip actions
                            if (egw_menu_1._egw_active_menu)
                                egw_menu_1._egw_active_menu.hide();
                            break;
                        case "up":
                        case "down":
                            return;
                    }
                }
            }
            switch (aoi.selectMode) {
                case exports.EGW_SELECTMODE_DEFAULT:
                    aoi.updateState(egw_action_constants_1.EGW_AO_STATE_SELECTED, !egw_action_common_1.egwBitIsSet(state, egw_action_constants_1.EGW_AO_SHIFT_STATE_MULTI) || !selected, state);
                    break;
                case exports.EGW_SELECTMODE_TOGGLE:
                    aoi.updateState(egw_action_constants_1.EGW_AO_STATE_SELECTED, !selected, egw_action_common_1.egwSetBit(state, egw_action_constants_1.EGW_AO_SHIFT_STATE_MULTI, true));
                    break;
            }
        }
    };
    if (egw_action_common_1.egwIsMobile()) {
        var swipe = new tapandswipe_1.tapAndSwipe(_node, {
            // set the same threshold as action_popup event to get the tapAndHold working
            tapHoldThreshold: 1000,
            swipe: function (event, direction, distance) {
                selectHandler(event, { swip: direction });
            },
            tap: function (event) {
                selectHandler(event);
            },
            tapAndHold: function (event) {
                return;
            }
        });
    }
    else {
        jQuery(_node).click(selectHandler);
    }
    jQuery(aoi.checkBox).change(function () {
        aoi.updateState(egw_action_constants_1.EGW_AO_STATE_SELECTED, this.checked, egw_action_constants_1.EGW_AO_SHIFT_STATE_MULTI);
    });
    aoi.doSetState = function (_state) {
        var _a;
        var selected = egw_action_common_1.egwBitIsSet(_state, egw_action_constants_1.EGW_AO_STATE_SELECTED);
        if (this.checkBox) {
            this.checkBox.checked = selected;
        }
        // Node might not be set yet / anymore
        if (!this.node || typeof ((_a = this.node) === null || _a === void 0 ? void 0 : _a.classList) == "undefined") {
            return;
        }
        this.node.classList.toggle('focused', egw_action_common_1.egwBitIsSet(_state, egw_action_constants_1.EGW_AO_STATE_FOCUSED));
        this.node.classList.toggle('selected', selected);
        this.node.classList.toggle('drag--moving', egw_action_common_1.egwBitIsSet(_state, egw_action_constants_1.EGW_AO_STATE_DRAGGING));
    };
    return aoi;
}
exports.et2_dataview_rowAOI = et2_dataview_rowAOI;
