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
exports.getDragImplementation = exports.egwDragActionImplementation = exports.EgwDragActionImplementation = void 0;
var egw_global_1 = require("../jsapi/egw_global");
var egw_action_constants_1 = require("./egw_action_constants");
var EgwDragActionImplementation = /** @class */ (function () {
    function EgwDragActionImplementation() {
        var _this = this;
        this.type = "drag";
        this.helper = null;
        this.ddTypes = [];
        this.selected = [];
        this.defaultDDHelper = function (_selected) {
            var _a, _b, _c, _d, _e;
            // Table containing clone of rows
            var table = (document.createElement("table"));
            table.classList.add('egwGridView_grid', 'et2_egw_action_ddHelper_row');
            // tr element to use as last row to show 'more ...' label
            var moreRow = (document.createElement('tr'));
            moreRow.classList.add('et2_egw_action_ddHelper_moreRow');
            // Main div helper container
            var div = (document.createElement("div"));
            div.append(table);
            var rows = [];
            // Maximum number of rows to show
            var maxRows = 3;
            // item label
            var itemLabel = egw_global_1.egw.lang((egw_global_1.egw.link_get_registry(egw_global_1.egw.app_name(), _selected.length > 1 ? 'entries' : 'entry') || egw_global_1.egw.app_name()));
            var index = 0;
            // Take select all into account when counting number of rows, because they may not be
            // in _selected object
            var pseudoNumRows = ((_c = (_b = (_a = _selected[0]) === null || _a === void 0 ? void 0 : _a._context) === null || _b === void 0 ? void 0 : _b._selectionMgr) === null || _c === void 0 ? void 0 : _c._selectAll) ? (_e = (_d = _selected[0]._context) === null || _d === void 0 ? void 0 : _d._selectionMgr) === null || _e === void 0 ? void 0 : _e._total : _selected.length;
            // Clone nodes but use copy webComponent properties
            var carefulClone = function (node, skip_text) {
                if (skip_text === void 0) { skip_text = false; }
                // Don't clone text nodes, it causes duplication in et2-description
                if (skip_text && node.nodeType == node.TEXT_NODE) {
                    return;
                }
                var clone = node.cloneNode();
                var widget_class = window.customElements.get(clone.localName);
                var properties = widget_class ? widget_class.properties : [];
                for (var key in properties) {
                    clone[key] = node[key];
                }
                // Children
                node.childNodes.forEach(function (c) {
                    // Don't clone text in et2-description, it causes duplication
                    var child = carefulClone(c, skip_text || ["ET2-DESCRIPTION"].indexOf(c.tagName) != -1);
                    if (child) {
                        clone.appendChild(child);
                    }
                });
                if (widget_class) {
                    clone.requestUpdate();
                }
                return clone;
            };
            for (var _f = 0, _selected_1 = _selected; _f < _selected_1.length; _f++) {
                var egwActionObject = _selected_1[_f];
                var rowNode = egwActionObject.iface.getDOMNode();
                if (egwActionObject._context && egwActionObject._context instanceof HTMLElement) {
                    rowNode = egwActionObject._context;
                }
                var row = carefulClone(rowNode);
                if (row) {
                    rows.push(row);
                    table.append(row);
                }
                index++;
                if (index == maxRows) {
                    // Label to show number of items
                    var spanCnt = (document.createElement('span'));
                    spanCnt.classList.add('et2_egw_action_ddHelper_itemsCnt');
                    div.append(spanCnt);
                    spanCnt.textContent = (pseudoNumRows + ' ' + itemLabel);
                    // Number of not shown rows
                    var restRows = pseudoNumRows - maxRows;
                    if (restRows > 0) {
                        moreRow.textContent = egw_global_1.egw.lang(pseudoNumRows - maxRows + " more " + itemLabel + " selected ...");
                    }
                    table.append(moreRow);
                    break;
                }
            }
            var text = (document.createElement('div'));
            text.classList.add('et2_egw_action_ddHelper_tip');
            div.append(text);
            // Add notice of Ctrl key, if supported
            if ('draggable' in document.createElement('span') &&
                navigator && navigator.userAgent.indexOf('Chrome') >= 0 && egw_global_1.egw.app_name() == 'filemanager') // currently only filemanager supports drag out
             {
                if (rows.length == 1) {
                    text.textContent = (egw_global_1.egw.lang('You may drag file out to your desktop', itemLabel));
                }
                else {
                    text.textContent = (egw_global_1.egw.lang('Note: If you drag out these selected rows to desktop only the first selected row will be downloaded.', itemLabel));
                }
            }
            // Final html DOM return as helper structure
            return div;
        };
        this.registerAction = function (_aoi, _callback, _context) {
            var node = _aoi.getDOMNode() && _aoi.getDOMNode()[0] ? _aoi.getDOMNode()[0] : _aoi.getDOMNode();
            if (node) {
                if (typeof _aoi.handlers == "undefined") {
                    _aoi.handlers = {};
                }
                if (typeof _aoi.handlers[_this.type] == "undefined") {
                    _aoi.handlers[_this.type] = [];
                }
                // Prevent selection
                node.onselectstart = function () {
                    return false;
                };
                if (!(window.FileReader && 'draggable' in document.createElement('span'))) {
                    // No DnD support
                    return;
                }
                // It shouldn't be so hard to get the action...
                var action_1 = null;
                var groups = _context.getActionImplementationGroups();
                if (!groups.drag) {
                    return;
                }
                if (_aoi.handlers[_this.type].length !== 0) {
                    // Already bound
                    return;
                }
                // Bind mouse handlers
                //et2_dataview_view_aoi binds mousedown event in et2_dataview_rowAOI to "egwPreventSelect" function from egw_action_common via jQuery.mousedown
                //jQuery(node).off("mousedown",egwPreventSelect)
                //et2_dataview_view_aoi binds mousedown event in et2_dataview_rowAOI to "egwPreventSelect" function from egw_action_common via addEventListener
                //node.removeEventListener("mousedown",egwPreventSelect)
                var mousedown = function (event) {
                    if (_context.isSelection(event)) {
                        node.setAttribute("draggable", false);
                    }
                    else if (event.which != 3) {
                        document.getSelection().removeAllRanges();
                    }
                };
                node.addEventListener("mousedown", mousedown);
                _aoi.handlers[_this.type].push({ type: 'mousedown', listener: mousedown });
                var mouseup = function (event) {
                    node.setAttribute("draggable", true);
                    // Set cursor back to auto. Seems FF can't handle cursor reversion
                    document.body.style.cursor = 'auto';
                };
                node.addEventListener("mouseup", mouseup);
                _aoi.handlers[_this.type].push({ type: 'mousedown', listener: mousedown });
                node.setAttribute('draggable', true);
                var ai_1 = _this;
                var dragstart = function (event) {
                    var _a;
                    var dragActionObject = _context;
                    if (this.findActionTarget) {
                        dragActionObject = (_a = this.findActionTarget(event).action) !== null && _a !== void 0 ? _a : _context;
                    }
                    // The helper function is called before the start function
                    // is evoked. Call the given callback function. The callback
                    // function will gather the selected elements and action links
                    // and call the doExecuteImplementation function. This
                    // will call the onExecute function of the first action
                    // in order to obtain the helper object (stored in ai.helper)
                    // and the multiple dragDropTypes (ai.ddTypes)
                    _callback.call(dragActionObject, false, ai_1);
                    // Stop parent elements from also starting to drag if we're nested
                    if (ai_1.selected.length) {
                        event.stopPropagation();
                    }
                    if (action_1 && egw_global_1.egw.app_name() == 'filemanager') {
                        if (dragActionObject.isSelection(event)) {
                            return;
                        }
                        // Get all selected
                        var selected = ai_1.selected;
                        // Set file data
                        for (var i = 0; i < 1; i++) {
                            var d = selected[i].data || egw_global_1.egw.dataGetUIDdata(selected[i].id).data || {};
                            if (d && d.mime && d.download_url) {
                                var url = d.download_url;
                                // NEED an absolute URL
                                if (url[0] == '/')
                                    url = egw_global_1.egw.link(url);
                                // egw.link adds the webserver, but that might not be an absolute URL - try again
                                if (url[0] == '/')
                                    url = window.location.origin + url;
                                event.dataTransfer.setData("DownloadURL", d.mime + ':' + d.name + ':' + url);
                            }
                        }
                        event.dataTransfer.effectAllowed = 'copy';
                        if (event.dataTransfer.types.length == 0) {
                            // No file data? Abort: drag does nothing
                            event.preventDefault();
                            return;
                        }
                    }
                    else {
                        event.dataTransfer.effectAllowed = 'linkMove';
                    }
                    var data = {
                        ddTypes: ai_1.ddTypes,
                        selected: ai_1.selected.map(function (item) {
                            return { id: item.id };
                        })
                    };
                    if (!ai_1.helper) {
                        ai_1.helper = ai_1.defaultDDHelper(ai_1.selected);
                    }
                    // Add a basic class to the helper in order to standardize the background layout
                    ai_1.helper.classList.add('et2_egw_action_ddHelper', 'ui-draggable-dragging');
                    document.body.append(ai_1.helper);
                    // Set a dragging state
                    ai_1.selected.forEach(function (item) {
                        var _a;
                        (_a = item.iface) === null || _a === void 0 ? void 0 : _a.setState(ai_1.selected[0].iface.getState() | egw_action_constants_1.EGW_AO_STATE_DRAGGING);
                    });
                    this.classList.add('drag--moving');
                    event.dataTransfer.setData('application/json', JSON.stringify(data));
                    // Wait for any webComponents to finish
                    var wait = [];
                    var webComponents = [];
                    var check = function (element) {
                        if (typeof element.updateComplete !== "undefined") {
                            webComponents.push(element);
                            element.requestUpdate();
                            wait.push(element.updateComplete);
                        }
                        element.childNodes.forEach(function (child) { return check(child); });
                    };
                    check(ai_1.helper);
                    // Clumsily force widget update, since we can't do it async
                    Promise.all(wait).then(function () {
                        wait = [];
                        webComponents.forEach(function (e) { return wait.push(e.updateComplete); });
                        Promise.all(wait).then(function () {
                            event.dataTransfer.setDragImage(ai_1.helper, 12, 12);
                        });
                    });
                    this.setAttribute('data-egwActionObjID', JSON.stringify(data.selected));
                };
                var dragend = function (_) {
                    var helper = document.querySelector('.et2_egw_action_ddHelper');
                    if (helper)
                        helper.remove();
                    var draggable = document.querySelector('.drag--moving');
                    if (draggable)
                        draggable.classList.remove('drag--moving');
                    // cleanup drop hover class from all other DOMs if there's still anything left
                    Array.from(document.getElementsByClassName('et2dropzone drop-hover')).forEach(function (_i) { _i.classList.remove('drop-hover'); });
                    // Clean up selected
                    ai_1.selected = [];
                };
                // Drag Event listeners
                node.addEventListener('dragstart', dragstart, false);
                _aoi.handlers[_this.type].push({ type: 'dragstart', listener: dragstart });
                node.addEventListener('dragend', dragend, false);
                _aoi.handlers[_this.type].push({ type: 'dragend', listener: dragend });
                return true;
            }
            return false;
        };
        this.unregisterAction = function (_aoi) {
            var _a;
            var node = _aoi.getDOMNode();
            if (node) {
                node.setAttribute('draggable', "false");
            }
            // Unregister handlers
            if (_aoi.handlers) {
                (_a = _aoi.handlers[_this.type]) === null || _a === void 0 ? void 0 : _a.forEach(function (h) { return node.removeEventListener(h.type, h.listener); });
                delete _aoi.handlers[_this.type];
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
            // Reset the helper object of the action implementation
            _this.helper = null;
            var hasLink = false;
            // Store the drag-drop types
            _this.ddTypes = [];
            _this.selected = _selected;
            // Call the onExecute event of the first actionObject
            for (var k in _links) {
                if (_links[k].visible) {
                    hasLink = true;
                    // Only execute the following code if a JS function is registered
                    // for the action and this is the first action link
                    if (!_this.helper && _links[k].actionObj.onExecute.hasHandler()) {
                        _this.helper = _links[k].actionObj.execute(_selected);
                    }
                    // Push the dragType of the associated action object onto the
                    // drag type list - this allows an element to support multiple
                    // drag/drop types.
                    var type = Array.isArray(_links[k].actionObj.dragType)
                        ? _links[k].actionObj.dragType
                        : [_links[k].actionObj.dragType];
                    for (var _a = 0, type_1 = type; _a < type_1.length; _a++) {
                        var i = type_1[_a];
                        if (_this.ddTypes.indexOf(i) === -1) {
                            _this.ddTypes.push(i);
                        }
                    }
                }
            }
            // If no helper has been defined, create a default one
            if (!_this.helper && hasLink) {
                _this.helper = _this.defaultDDHelper(_selected);
            }
            return true;
        };
    }
    return EgwDragActionImplementation;
}());
exports.EgwDragActionImplementation = EgwDragActionImplementation;
/**
 * @deprecated use upper case class
 */
var egwDragActionImplementation = /** @class */ (function (_super) {
    __extends(egwDragActionImplementation, _super);
    function egwDragActionImplementation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return egwDragActionImplementation;
}(EgwDragActionImplementation));
exports.egwDragActionImplementation = egwDragActionImplementation;
var _dragActionImpl = null;
function getDragImplementation() {
    if (!_dragActionImpl) {
        _dragActionImpl = new EgwDragActionImplementation();
    }
    return _dragActionImpl;
}
exports.getDragImplementation = getDragImplementation;
