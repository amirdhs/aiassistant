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
exports.egwDropActionImplementation = exports.EgwDropActionImplementation = void 0;
var egw_action_constants_1 = require("./egw_action_constants");
var egw_action_1 = require("./egw_action");
var EgwPopupActionImplementation_1 = require("./EgwPopupActionImplementation");
var EgwDropActionImplementation = /** @class */ (function () {
    function EgwDropActionImplementation() {
        var _this = this;
        this.type = "drop";
        //keeps track of current drop element where dragged item's entered.
        // it's necessary for dragenter/dragleave issue correction.
        this.currentDropEl = null;
        this.registerAction = function (_aoi, _callback, _context) {
            var _a, _b;
            var parentNode = null;
            var parentAO = null;
            var isNew = false;
            var node = _aoi.getDOMNode() && _aoi.getDOMNode()[0] ? _aoi.getDOMNode()[0] : _aoi.getDOMNode();
            var self = _this;
            // Is there a parent that handles action targets?
            if (typeof _context.findActionTargetHandler !== "undefined" && typeof ((_b = (_a = _context.findActionTargetHandler) === null || _a === void 0 ? void 0 : _a.iface) === null || _b === void 0 ? void 0 : _b.getWidget) == "function") {
                parentAO = _context.findActionTargetHandler;
                parentNode = parentAO.iface.getWidget();
            }
            if (!_aoi.findActionTargetHandler && parentNode && typeof parentNode.findActionTarget == "function") {
                _aoi.findActionTargetHandler = parentNode;
            }
            if (node) {
                if (typeof _aoi.handlers == "undefined") {
                    _aoi.handlers = {};
                }
                if (typeof _aoi.handlers[_this.type] == "undefined") {
                    _aoi.handlers[_this.type] = [];
                }
                node.classList.add('et2dropzone');
                var dragover = function (event) {
                    if (event.preventDefault) {
                        event.preventDefault();
                    }
                    return true;
                };
                var dragenter = function (event) {
                    var _a, _b;
                    // don't trigger dragenter if we are entering the drag element
                    // don't go further if the dragged element is no there (happens when a none et2 dragged element is being dragged)
                    if (!self.getTheDraggedDOM() || self.isTheDraggedDOM(this) || this == self.currentDropEl)
                        return;
                    // stop the event from being fired for its children
                    event.stopPropagation();
                    event.preventDefault();
                    if (_aoi.findActionTargetHandler && typeof _aoi.findActionTargetHandler.findActionTarget === "function") {
                        // Bubbling up to parent
                        var parentData = _aoi.findActionTargetHandler.findActionTarget(event);
                        self.currentDropEl = (_a = parentData.target) !== null && _a !== void 0 ? _a : event.currentTarget;
                        _aoi = (_b = parentData.action.iface) !== null && _b !== void 0 ? _b : _aoi;
                    }
                    else {
                        self.currentDropEl = event.currentTarget;
                    }
                    event.dataTransfer.dropEffect = 'link';
                    var data = {
                        event: event,
                        ui: self.getTheDraggedData()
                    };
                    _aoi.triggerEvent(egw_action_constants_1.EGW_AI_DRAG_ENTER, data);
                    // cleanup drop hover class from all other DOMs if there's still anything left
                    Array.from(document.getElementsByClassName('et2dropzone drop-hover')).forEach(function (_i) {
                        _i.classList.remove('drop-hover');
                    });
                    this.classList.add('drop-hover');
                    return false;
                };
                var drop = function (event) {
                    var _a;
                    event.preventDefault();
                    // don't go further if the dragged element is no there (happens when a none et2 dragged element is being dragged)
                    if (!self.getTheDraggedDOM())
                        return;
                    var dropActionObject = _context;
                    var helper = self.getHelperDOM();
                    // remove the hover class
                    this.classList.remove('drop-hover');
                    if (this.findActionTarget) {
                        dropActionObject = (_a = this.findActionTarget(event).action) !== null && _a !== void 0 ? _a : _context;
                    }
                    else if (self.isTheDraggedDOM(this)) {
                        // clean up the helper dom
                        if (helper) {
                            helper.remove();
                        }
                        return;
                    }
                    var ui = self.getTheDraggedData();
                    ui.position = { top: event.clientY, left: event.clientX };
                    ui.offset = { top: event.offsetY, left: event.offsetX };
                    var data = JSON.parse(event.dataTransfer.getData('application/json'));
                    if (!self.isAccepted(data, dropActionObject, _callback, undefined)) {
                        // clean up the helper dom
                        if (helper)
                            helper.remove();
                        return;
                    }
                    var selected = data.selected.map(function (item) {
                        return egw_action_1.egw_getObjectManager(item.id, false);
                    });
                    //links is an Object of DropActions bound to their names
                    var links = _callback.call(dropActionObject, "links", self, egw_action_constants_1.EGW_AO_EXEC_THIS);
                    // Disable all links which only accept types which are not
                    // inside ddTypes
                    for (var k in links) {
                        var accepted = links[k].actionObj.acceptedTypes;
                        var enabled = false;
                        for (var i = 0; i < data.ddTypes.length; i++) {
                            if (accepted.indexOf(data.ddTypes[i]) != -1) {
                                enabled = true;
                                break;
                            }
                        }
                        // Check for allowing multiple selected
                        if (!links[k].actionObj.allowOnMultiple && selected.length > 1) {
                            enabled = false;
                        }
                        if (!enabled) {
                            links[k].enabled = false;
                            links[k].visible = !links[k].actionObj.hideOnDisabled;
                        }
                    }
                    // Check whether there is only one link
                    var cnt = 0;
                    var lnk = null;
                    for (var k in links) {
                        if (links[k].enabled && links[k].visible) {
                            lnk = links[k];
                            cnt += 1 + links[k].actionObj.children.length;
                            // Add ui, so you know what happened where
                            lnk.actionObj.ui = ui;
                        }
                    }
                    if (cnt == 1) {
                        window.setTimeout(function () {
                            lnk.actionObj.execute(selected, dropActionObject);
                        }, 0);
                    }
                    if (cnt > 1) {
                        // More than one drop action link is associated
                        // to the drop event - show those as a popup menu
                        // and let the user decide which one to use.
                        // This is possible as the popup and the popup action
                        // object and the drop action object share same
                        // set of properties.
                        var popup_1 = EgwPopupActionImplementation_1.getPopupImplementation();
                        var pos_1 = popup_1._getPageXY(event);
                        // Don't add paste actions, this is a drop
                        popup_1.auto_paste = false;
                        window.setTimeout(function () {
                            popup_1.executeImplementation(pos_1, selected, links, dropActionObject);
                            // Reset, popup is reused
                            popup_1.auto_paste = true;
                        }, 0); // Timeout is needed to have it working in IE
                    }
                    // Set cursor back to auto. Seems FF can't handle cursor reversion
                    jQuery('body').css({ cursor: 'auto' });
                    _aoi.triggerEvent(egw_action_constants_1.EGW_AI_DRAG_OUT, { event: event, ui: self.getTheDraggedData() });
                    // clean up the helper dom
                    if (helper)
                        helper.remove();
                    self.getTheDraggedDOM().classList.remove('drag--moving');
                };
                var dragleave = function (event) {
                    var _a, _b;
                    event.stopImmediatePropagation();
                    // don't trigger dragleave if we are leaving the drag element
                    // don't go further if the dragged element is no there (happens when a none et2 dragged element is being dragged)
                    if (!self.getTheDraggedDOM() || self.isTheDraggedDOM(this))
                        return;
                    if (_aoi.findActionTargetHandler && typeof _aoi.findActionTargetHandler.findActionTarget === "function") {
                        // Bubbling up to parent
                        var parentData = _aoi.getWidget().findActionTarget(event);
                        _aoi = (_b = (_a = parentData === null || parentData === void 0 ? void 0 : parentData.action) === null || _a === void 0 ? void 0 : _a.iface) !== null && _b !== void 0 ? _b : _aoi;
                    }
                    var data = {
                        event: event,
                        ui: self.getTheDraggedData()
                    };
                    _aoi.triggerEvent(egw_action_constants_1.EGW_AI_DRAG_OUT, data);
                    this.classList.remove('drop-hover');
                    event.preventDefault();
                    return false;
                };
                if (_aoi.handlers[_this.type].length == 0) {
                    // DND Event listeners
                    node.addEventListener('dragenter', dragenter, false);
                    _aoi.handlers[_this.type].push({ type: 'dragenter', listener: dragenter });
                    node.addEventListener('dragleave', dragleave, false);
                    _aoi.handlers[_this.type].push({ type: 'dragleave', listener: dragleave });
                    node.addEventListener('dragover', dragover, false);
                    _aoi.handlers[_this.type].push({ type: 'dragover', listener: dragover });
                    node.addEventListener('drop', drop, false);
                    _aoi.handlers[_this.type].push({ type: 'drop', listener: drop });
                }
                return true;
            }
            return false;
        };
        this.unregisterAction = function (_aoi) {
            var _a;
            var node = _aoi.getDOMNode();
            if (node) {
                node.classList.remove('et2dropzone');
            }
            // Unregister handlers
            if (_aoi.handlers) {
                (_a = _aoi.handlers[this.type]) === null || _a === void 0 ? void 0 : _a.forEach(function (h) { return node.removeEventListener(h.type, h.listener); });
                delete _aoi.handlers[this.type];
            }
            return true;
        };
        /**
         * Builds the context menu and shows it at the given position/DOM-Node.
         *
         * @param {string} _context
         * @param {array} _selected
         * @param {object} _links
         */
        this.executeImplementation = function (_context, _selected, _links) {
            if (_context == "links") {
                return _links;
            }
        };
        this.isTheDraggedDOM = function (_dom) {
            return _dom.classList.contains('drag--moving');
        };
        this.getTheDraggedDOM = function () {
            return document.querySelector('.drag--moving');
        };
        this.getHelperDOM = function () {
            return document.querySelector('.et2_egw_action_ddHelper');
        };
        this.getTheDraggedData = function () {
            // @ts-ignore // in our case dataset will be present
            var data = _this.getTheDraggedDOM().dataset.egwactionobjid;
            var selected = [];
            if (data) {
                data = JSON.parse(data);
                selected = data.map(function (item) {
                    return egw_action_1.egw_getObjectManager(item.id, false);
                });
            }
            return {
                draggable: _this.getTheDraggedDOM(),
                helper: _this.getHelperDOM(),
                selected: selected,
                position: undefined,
                offset: undefined
            };
        };
        // check if given draggable is accepted for drop
        this.isAccepted = function (_data, _context, _callback, _node) {
            if (_node && !_node.classList.contains('et2dropzone'))
                return false;
            if (typeof _data.ddTypes != "undefined") {
                var accepted = _this._fetchAccepted(_callback.call(_context, "links", _this, egw_action_constants_1.EGW_AO_EXEC_THIS));
                // Check whether all drag types of the selected objects
                // are accepted
                var ddTypes = _data.ddTypes;
                for (var i = 0; i < ddTypes.length; i++) {
                    if (accepted.indexOf(ddTypes[i]) != -1) {
                        return true;
                    }
                }
            }
            return false;
        };
        this._fetchAccepted = function (_links) {
            // Accumulate the accepted types
            var accepted = [];
            for (var k in _links) {
                for (var i = 0; i < _links[k].actionObj.acceptedTypes.length; i++) {
                    var type = _links[k].actionObj.acceptedTypes[i];
                    if (accepted.indexOf(type) == -1) {
                        accepted.push(type);
                    }
                }
            }
            return accepted;
        };
    }
    return EgwDropActionImplementation;
}());
exports.EgwDropActionImplementation = EgwDropActionImplementation;
var egwDropActionImplementation = /** @class */ (function (_super) {
    __extends(egwDropActionImplementation, _super);
    function egwDropActionImplementation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return egwDropActionImplementation;
}(EgwDropActionImplementation));
exports.egwDropActionImplementation = egwDropActionImplementation;
