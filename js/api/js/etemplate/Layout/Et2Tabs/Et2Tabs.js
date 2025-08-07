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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2Tabs = void 0;
/**
 * EGroupware eTemplate2 - Box widget
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
 * @link https://www.egroupware.org
 * @author Nathan Gray
 */
var shoelace_1 = require("@shoelace-style/shoelace");
var Et2Widget_1 = require("../../Et2Widget/Et2Widget");
var et2_core_xml_1 = require("../../et2_core_xml");
var lit_1 = require("lit");
var shoelace_2 = require("../../Styles/shoelace");
var colorsDefStyles_1 = require("../../Styles/colorsDefStyles");
var Et2InputWidget_1 = require("../../Et2InputWidget/Et2InputWidget");
var Et2Tabs = /** @class */ (function (_super) {
    __extends(Et2Tabs, _super);
    function Et2Tabs() {
        var _this = _super.call(this) || this;
        /**
         * Index of currently selected tab
         * @type {number}
         * @private
         */
        _this._selectedIndex = -1;
        _this.tabData = [];
        _this.lazyLoaded = false;
        _this.extraTabs = [];
        _this.addTabs = false;
        if (egwIsMobile()) {
            _this.placement = 'end';
        }
        return _this;
    }
    Object.defineProperty(Et2Tabs, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                colorsDefStyles_1.colorsDefStyles
            ], shoelace_2.default, [
                //keyframes definition can't get into shadow root from css files, so we declare it here
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t/*scroll detection detect if scrollbar is available scroll detection only works in chromium not in Firefox or Safari*/\n\t\t\t\t@keyframes detect-scroll {\n\t\t\t\t\tfrom, to { --can-scroll:0;}\n\t\t\t\t}\n\t\t\t.tab-group--top {\n\t\t\t\theight: 100%;\n\t\t\t\tmin-height: fit-content;\n\t\t\t}\n\t\t\t.tab-group__body {\n\t\t\t\tflex: 1 1 auto;\n\t\t\t\toverflow: hidden auto;\n\t\t\t}\n\t\t\t.tab-group__body-fixed-height {\n\t\t\t\tflex: 0 0 auto;\n\t\t\t}\n\t\t\t::slotted([hidden]) {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t::slotted(et2-tab-panel) {\n\t\t\t\tflex: 1 1 auto;\n\t\t\t}\n\t\t\t::slotted(et2-tab-panel:not([active])) {\n    \t\t\tdisplay: none;\n\t\t\t}\n\n\t\t\t\t:host([tabheight]) {\n\t\t\t\t\toverflow: hidden;\n\n\t\t\t\t\t.tab-group {\n\t\t\t\t\t\tmin-height: initial;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t"], ["\n\t\t\t\t/*scroll detection detect if scrollbar is available scroll detection only works in chromium not in Firefox or Safari*/\n\t\t\t\t@keyframes detect-scroll {\n\t\t\t\t\tfrom, to { --can-scroll:0;}\n\t\t\t\t}\n\t\t\t.tab-group--top {\n\t\t\t\theight: 100%;\n\t\t\t\tmin-height: fit-content;\n\t\t\t}\n\t\t\t.tab-group__body {\n\t\t\t\tflex: 1 1 auto;\n\t\t\t\toverflow: hidden auto;\n\t\t\t}\n\t\t\t.tab-group__body-fixed-height {\n\t\t\t\tflex: 0 0 auto;\n\t\t\t}\n\t\t\t::slotted([hidden]) {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t::slotted(et2-tab-panel) {\n\t\t\t\tflex: 1 1 auto;\n\t\t\t}\n\t\t\t::slotted(et2-tab-panel:not([active])) {\n    \t\t\tdisplay: none;\n\t\t\t}\n\n\t\t\t\t:host([tabheight]) {\n\t\t\t\t\toverflow: hidden;\n\n\t\t\t\t\t.tab-group {\n\t\t\t\t\t\tmin-height: initial;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t"])))
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Tabs, "properties", {
        get: function () {
            return __assign(__assign({}, _super.properties), { 
                /**
                 * Array of [extra] tabs.
                 * Each tab needs {label:..., template:...}.
                 * Additional optional keys are prepend, hidden and id, for access into content array
                 */
                extraTabs: { type: Object }, 
                /**
                 * Add tabs to template
                 * Set to true if tabs specified in tabs property should be added to tabs read from template,
                 * default false if not which replaces what's in template
                 */
                addTabs: { type: Boolean }, 
                /**
                 * Set the height for tabs
                 * Leave unset to size automatically from either parent height attribute, or height of first tabpanel
                 * Set to 'auto' to allow tab height to flex to fill parent element
                 */
                tabHeight: { type: String, reflect: true }, 
                /**
                 * @deprecated use "placement" instead
                 * @see https://shoelace.style/components/tab-group
                 */
                alignTabs: { type: String }, 
                /**
                 * active tab is the value
                 */
                value: { type: String } });
        },
        enumerable: false,
        configurable: true
    });
    Et2Tabs.prototype.destroy = function () {
        _super.prototype.destroy && _super.prototype.destroy.call(this);
        this.tabData = [];
        // Clean these from parent
        this.tabs = [];
        this.panels = [];
    };
    Object.defineProperty(Et2Tabs.prototype, "value", {
        get: function () {
            var _a;
            return (_a = this.getActiveTab()) === null || _a === void 0 ? void 0 : _a.panel;
        },
        set: function (tab) {
            if (this.tabs && Array.isArray(this.tabs) && this.tabs.length) {
                this.show(this.__value = tab);
            }
            else {
                this.__value = tab;
            }
        },
        enumerable: false,
        configurable: true
    });
    Et2Tabs.prototype.connectedCallback = function () {
        var _this = this;
        _super.prototype.connectedCallback.call(this);
        this.updateComplete.then(function () {
            if (_this.__value) {
                _this.show(_this.__value);
            }
        });
    };
    Et2Tabs.prototype.isDirty = function () {
        return false;
    };
    Et2Tabs.prototype.loadFromXML = function (_node) {
        // Get the tabs and tabpanels tags
        var tabsElems = et2_core_xml_1.et2_directChildrenByTagName(_node, "tabs");
        var tabpanelsElems = et2_core_xml_1.et2_directChildrenByTagName(_node, "tabpanels");
        var tabData = [];
        // Check for a parent height, we'll apply it to tab panels
        var height = et2_core_xml_1.et2_readAttrWithDefault(_node.parentNode, "height", null);
        if (height && !this.tabHeight) {
            this.tabHeight = height;
        }
        // if no tabs set or they should be added to tabs from xml
        if (!this.extraTabs || this.extraTabs.length == 0 || this.addTabs) {
            if (tabsElems.length == 1 && tabpanelsElems.length == 1) {
                var tabs = tabsElems[0];
                var tabpanels = tabpanelsElems[0];
                // Parse the "tabs" tag
                this._readTabs(tabData, tabs);
                // Read and create the widgets defined in the "tabpanels"
                this._readTabPanels(tabData, tabpanels);
            }
            else {
                this.egw().debug("error", "Error while parsing tabbox, none or multiple tabs or tabpanels tags!", this);
            }
        }
        // Add in additional tabs
        if (this.extraTabs) {
            var readonly = this.getArrayMgr("readonlys").getEntry(this.id) || {};
            var _loop_1 = function (i) {
                var tab = this_1.extraTabs[i];
                var tab_id = tab.id || tab.template;
                var tab_options = { id: tab_id, template: tab.template, url: tab.url, content: tab.content, title: tab.statustext };
                var pos = tabData.length;
                if (typeof tab.prepend === "string") {
                    if ((pos = tabData.findIndex(function (t) { return t.id === tab.prepend; })) === -1) {
                        pos = tabData.length;
                    }
                }
                else if (tab.prepend) {
                    pos = 0;
                }
                tabData.splice(pos, 0, {
                    "id": tab_id,
                    "label": this_1.egw().lang(tab.label),
                    "widget": null,
                    "widget_options": tab_options,
                    "contentDiv": null,
                    "flagDiv": null,
                    "hidden": typeof tab.hidden != "undefined" ? tab.hidden : readonly[tab_id] || false,
                    "XMLNode": null,
                    "promise": null
                });
            };
            var this_1 = this;
            for (var i = 0; i < this.extraTabs.length; i++) {
                _loop_1(i);
            }
        }
        // Create the tab DOM-Nodes
        this.createTabs(tabData);
        // Use the height of the first tab if height not set
        this._sizeTabs(tabData);
        // Load any additional child nodes
        for (var i = 0; i < _node.childNodes.length; i++) {
            var node = _node.childNodes[i];
            var widgetType = node.nodeName.toLowerCase();
            // Skip text & already handled nodes
            if (["#comment", "#text", "tabs", "tabpanels"].includes(widgetType)) {
                continue;
            }
            // Create the new element
            this.createElementFromNode(node);
        }
    };
    /**
     * Use the height of the first tab if height not set
     * @protected
     */
    Et2Tabs.prototype._sizeTabs = function (tabData) {
        var _this = this;
        if (!this.tabHeight && tabData.length > 0) {
            var firstTab_1 = tabData[0].contentDiv;
            firstTab_1.updateComplete.then(function () { return __awaiter(_this, void 0, void 0, function () {
                var wait, walk, maxHeight, initial, tabHeight;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            wait = [];
                            walk = function (widget) {
                                if (widget.loading) {
                                    wait.push(widget.loading);
                                }
                                wait.push(widget.updateComplete);
                                widget.getChildren().forEach(function (child) { return walk(child); });
                            };
                            walk(firstTab_1);
                            return [4 /*yield*/, Promise.all(wait)];
                        case 1:
                            _a.sent();
                            maxHeight = getComputedStyle(this.shadowRoot.querySelector('.tab-group__body')).height;
                            initial = firstTab_1.hasAttribute("active");
                            firstTab_1.setAttribute("active", '');
                            tabHeight = getComputedStyle(firstTab_1).height;
                            if (parseInt(maxHeight) > 50 && parseInt(maxHeight) < parseInt(tabHeight)) //there was a reasonable max height set
                             {
                                this.tabHeight = maxHeight;
                            }
                            else if (maxHeight != '0px') { //max height was set but is unreasonable small
                                this.tabHeight = '86vh'; // use most of available space, but not all so Tabbox header fits too, and does not need second scrollbar
                            }
                            else {
                                this.tabHeight = tabHeight;
                            }
                            if (!initial) {
                                firstTab_1.removeAttribute("active");
                            }
                            return [2 /*return*/];
                    }
                });
            }); });
        }
    };
    Et2Tabs.prototype._readTabs = function (tabData, tabs) {
        var selected = "";
        this._selectedIndex = -1;
        var hidden = {};
        if (this.id) {
            // Set the value for this element
            var contentMgr = this.getArrayMgr("content");
            if (contentMgr != null) {
                var val = contentMgr.getEntry(this.id);
                if (val !== null) {
                    selected = val;
                }
            }
            contentMgr = this.getArrayMgr("readonlys");
            if (contentMgr != null) {
                var val = contentMgr.getEntry(this.id);
                if (val !== null && typeof val !== 'undefined') {
                    hidden = val;
                }
            }
        }
        var i = 0;
        et2_core_xml_1.et2_filteredNodeIterator(tabs, function (node, nodeName) {
            var _a;
            if (nodeName == "tab") {
                var index_name = et2_core_xml_1.et2_readAttrWithDefault(node, "id", '');
                var hide = et2_core_xml_1.et2_readAttrWithDefault(node, "hidden", hidden[index_name]);
                var widget_options = {};
                if (index_name) {
                    if (selected == index_name) {
                        this.selected_index = i;
                    }
                    // Get the class attribute and add it as widget_options
                    var classAttr = et2_core_xml_1.et2_readAttrWithDefault(node, "class", '');
                    if (classAttr) {
                        widget_options = { 'class': classAttr };
                    }
                }
                tabData.push({
                    "id": index_name,
                    "label": this.egw().lang(et2_core_xml_1.et2_readAttrWithDefault(node, "label", "Tab")),
                    "onclick": et2_core_xml_1.et2_readAttrWithDefault(node, "onclick", ''),
                    "ondblclick": et2_core_xml_1.et2_readAttrWithDefault(node, "ondblclick", ''),
                    "widget": null,
                    "widget_options": widget_options,
                    "contentDiv": null,
                    "flagDiv": null,
                    "tabNode": node,
                    "hidden": et2_core_xml_1.et2_readAttrWithDefault(node, "hidden", (_a = hidden[index_name]) !== null && _a !== void 0 ? _a : false),
                    "disabled": et2_core_xml_1.et2_readAttrWithDefault(node, "disabled", false),
                    "XMLNode": null,
                    "promise": null
                });
            }
            else {
                throw ("Error while parsing: Invalid tag '" + nodeName +
                    "' in tabs tag");
            }
            i++;
        }, this);
        // Make sure we don't try to display a hidden tab
        for (var i_1 = 0; i_1 < tabData.length && this._selectedIndex < 0; i_1++) {
            if (!tabData[i_1].hidden) {
                this._selectedIndex = i_1;
            }
        }
    };
    Et2Tabs.prototype._readTabPanels = function (tabData, tabpanels) {
        var i = 0;
        et2_core_xml_1.et2_filteredNodeIterator(tabpanels, function (node, nodeName) {
            if (i < tabData.length) {
                // Store node for later evaluation
                tabData[i].XMLNode = node;
            }
            else {
                throw ("Error while reading tabpanels tag, too many widgets!");
            }
            i++;
        }, this);
    };
    Et2Tabs.prototype.update = function (changedProperties) {
        _super.prototype.update.call(this, changedProperties);
        if (changedProperties.has("tabHeight")) {
            var body = this.shadowRoot.querySelector(".tab-group__body");
            if (body) {
                body.style.setProperty("height", this.tabHeight == parseInt(this.tabHeight) + "" ? this.tabHeight + "px" : this.tabHeight);
                body.classList.toggle("tab-group__body-fixed-height", this.tabHeight !== '' && this.tabHeight !== 'auto');
            }
        }
    };
    /**
     * Create the nodes for tabs
     *
     * @param tabData
     * @protected
     */
    Et2Tabs.prototype.createTabs = function (tabData) {
        var _this = this;
        this.tabData = tabData;
        tabData.forEach(function (tab, index) {
            // Tab - SlTabGroup looks for sl-tab, so we can't use our own without overriding a lot
            tab.flagDiv = Et2Widget_1.loadWebComponent("et2-tab", {
                slot: "nav",
                panel: tab.id,
                active: index == _this._selectedIndex,
                hidden: tab.hidden,
                disabled: tab.disabled,
                onclick: tab.onclick,
                ondblclick: tab.ondblclick
            }, _this);
            // Set tab label
            var node = document.createElement("span");
            node.appendChild(document.createTextNode(tab.label));
            node.classList.add("tabLabel");
            tab.flagDiv.appendChild(node);
            if (tab.tabNode && tab.tabNode.children.length) {
                tab.flagDiv.loadFromXML(tab.tabNode);
            }
        });
        tabData.forEach(function (tab, index) {
            _this.createPanel(tab);
        });
    };
    Et2Tabs.prototype.createPanel = function (tab, active) {
        if (active === void 0) { active = false; }
        // Tab panel
        tab.contentDiv = Et2Widget_1.loadWebComponent('et2-tab-panel', {
            id: tab.id,
            name: tab.id,
            active: active,
            hidden: tab.hidden,
            // Set readonly so it gets passed on to children
            readonly: tab.readonly
        }, this);
        // Tab content
        if (tab.XMLNode) {
            // Just read the XMLNode
            var tabContent = tab.contentDiv.createElementFromNode(tab.XMLNode);
            tab.contentDiv.appendChild(typeof window.customElements.get(tab.XMLNode.nodeName) == "undefined" ?
                tabContent.getDOMNode() : tabContent);
        }
        else {
            Et2Widget_1.loadWebComponent('et2-template', tab.widget_options, tab.contentDiv);
        }
        return tab.contentDiv;
    };
    Et2Tabs.prototype.getAllTabs = function (includeDisabled) {
        if (includeDisabled === void 0) { includeDisabled = false; }
        var slot = this.shadowRoot.querySelector('slot[name="nav"]');
        var tabNames = ["sl-tab", "et2-tab"];
        return __spreadArrays(slot.assignedElements()).filter(function (el) {
            return includeDisabled ? tabNames.indexOf(el.tagName.toLowerCase()) != -1 : tabNames.indexOf(el.tagName.toLowerCase()) !== -1 && !el.disabled;
        });
    };
    /**
     * Overridden to allow et2-tab-panel as well as sl-tab-panel
     *
     * @returns {[SlTabPanel]}
     */
    Et2Tabs.prototype.getAllPanels = function () {
        var slot = this.body;
        return __spreadArrays(slot.assignedElements()).filter(function (el) { return ['et2-tab-panel', 'sl-tab-panel'].indexOf(el.tagName.toLowerCase()) != -1; });
    };
    Et2Tabs.prototype.handleClick = function (event) {
        var target = event.target;
        var tab = target.closest('et2-tab');
        var tabGroup = (tab === null || tab === void 0 ? void 0 : tab.closest('sl-tab-group')) || (tab === null || tab === void 0 ? void 0 : tab.closest('et2-tabbox'));
        // Ensure the target tab is in this tab group
        if (tabGroup !== this) {
            return;
        }
        if (tab !== null) {
            this.setActiveTab(tab, { scrollBehavior: 'smooth' });
        }
    };
    /**
     * Keyboard navigation
     * Copy + Paste from parent due to tagname differences (sl-tab vs et2-tab)
     *
     * @param event
     */
    Et2Tabs.prototype.handleKeyDown = function (event) {
        var target = event.target;
        var tab = target.closest("et2-tab");
        var tabGroup = tab == null ? void 0 : tab.closest("et2-tabbox");
        if (tabGroup !== this) {
            return;
        }
        if (["Enter", " "].includes(event.key)) {
            if (tab !== null) {
                this.setActiveTab(tab, { scrollBehavior: "smooth" });
                event.preventDefault();
            }
        }
        if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
            var activeEl = document.activeElement;
            var isRtl = this.localize.dir() === "rtl";
            if ((activeEl == null ? void 0 : activeEl.tagName.toLowerCase()) === "et2-tab") {
                var index = this.tabs.indexOf(activeEl);
                if (event.key === "Home") {
                    index = 0;
                }
                else if (event.key === "End") {
                    index = this.tabs.length - 1;
                }
                else if (["top", "bottom"].includes(this.placement) && event.key === (isRtl ? "ArrowRight" : "ArrowLeft") || ["start", "end"].includes(this.placement) && event.key === "ArrowUp") {
                    index--;
                }
                else if (["top", "bottom"].includes(this.placement) && event.key === (isRtl ? "ArrowLeft" : "ArrowRight") || ["start", "end"].includes(this.placement) && event.key === "ArrowDown") {
                    index++;
                }
                if (index < 0) {
                    index = this.tabs.length - 1;
                }
                if (index > this.tabs.length - 1) {
                    index = 0;
                }
                this.tabs[index].focus({ preventScroll: true });
                if (this.activation === "auto") {
                    this.setActiveTab(this.tabs[index], { scrollBehavior: "smooth" });
                }
                if (["top", "bottom"].includes(this.placement)) {
                    scrollIntoView(this.tabs[index], this.nav, "horizontal");
                }
                event.preventDefault();
            }
        }
    };
    /**
     * Set up for printing
     *
     * @return {undefined|Deferred} Return a jQuery Deferred object if not done setting up
     *  (waiting for data)
     */
    Et2Tabs.prototype.beforePrint = function () {
        // Remove the "active" flag from all tabs-flags
        this.querySelector("[active]").removeAttribute("active");
        // Remove height limit
        this.style.height = '';
        // Show all enabled tabs
        for (var i = 0; i < this.tabData.length; i++) {
            var entry = this.tabData[i];
            if (entry.hidden) {
                continue;
            }
            entry.flagDiv.insertBefore(entry.contentDiv);
            entry.contentDiv.show();
        }
    };
    /**
     * Reset after printing
     */
    Et2Tabs.prototype.afterPrint = function () {
        this.setActiveTab(this._selectedIndex);
    };
    /**
     * Activate the tab containing the given widget
     *
     * @param {et2_widget} widget
     * @return {bool} widget was found in a tab
     */
    Et2Tabs.prototype.activateTab = function (widget) {
        var tab = widget;
        while (tab._parent && tab._parent.nodeName !== 'ET2-TABBOX') {
            tab = tab._parent;
        }
        if (tab.nodeName === 'ET2-TAB-PANEL') {
            this.show(tab.name);
            return true;
        }
        return false;
    };
    /**
     * get tab panel-name or label the given widget is in
     *
     * @param widget
     * @param label true: return label, otherwise return panel-name / id
     * @return string panel-name or undefined
     */
    Et2Tabs.getTabPanel = function (widget, label) {
        var _a, _b;
        var tab = widget;
        while (tab._parent && tab._parent.nodeName !== 'ET2-TABBOX') {
            tab = tab._parent;
        }
        if (tab.nodeName === 'ET2-TAB-PANEL') {
            if (label) {
                return (_b = (_a = tab._parent) === null || _a === void 0 ? void 0 : _a.querySelector('et2-tab[panel="' + tab.name + '"]')) === null || _b === void 0 ? void 0 : _b.innerText;
            }
            return tab.name;
        }
        return undefined;
    };
    /**
     * Reimplement to allow our existing function signatures too
     *
     * @deprecated use this.show(name : string)
     * @param tab number or name of tab (Sl uses that internally with a SlTab!)
     * @param options
     */
    Et2Tabs.prototype.setActiveTab = function (tab, options) {
        if (typeof tab === 'number') {
            tab = this.getAllTabs()[tab];
            return this.show(tab.panel);
        }
        if (typeof tab === 'string') {
            return this.show(tab);
        }
        return _super.prototype.setActiveTab.call(this, tab, options);
    };
    Et2Tabs.prototype.resize = function (_height) {
        if (_height && this.tabHeight != 'auto') {
            this.tabHeight = parseInt(this.tabHeight) + parseInt(_height);
        }
    };
    return Et2Tabs;
}(Et2InputWidget_1.Et2InputWidget(shoelace_1.SlTabGroup)));
exports.Et2Tabs = Et2Tabs;
customElements.define("et2-tabbox", Et2Tabs);
var templateObject_1;
