"use strict";
/**
 * EGroupware eTemplate2 - Splitter widget
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
 * @link https://www.egroupware.org
 * @author Nathan Gray
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2Split = void 0;
var Et2Widget_1 = require("../../Et2Widget/Et2Widget");
var shoelace_1 = require("@shoelace-style/shoelace");
var et2_core_interfaces_1 = require("../../et2_core_interfaces");
var et2_core_DOMWidget_1 = require("../../et2_core_DOMWidget");
var lit_1 = require("lit");
var colorsDefStyles_1 = require("../../Styles/colorsDefStyles");
var Et2Split = /** @class */ (function (_super) {
    __extends(Et2Split, _super);
    function Et2Split() {
        var _this = _super.call(this) || this;
        _this._resize_timeout = null;
        _this._undock_position = undefined;
        // To hold troublesome elements we need to hide while resizing
        _this._hidden = [];
        // Bind handlers to instance
        _this._handleResize = _this._handleResize.bind(_this);
        _this._handleMouseDown = _this._handleMouseDown.bind(_this);
        _this._handleMouseUp = _this._handleMouseUp.bind(_this);
        _this._handleDoubleClick = _this._handleDoubleClick.bind(_this);
        return _this;
    }
    Object.defineProperty(Et2Split, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                colorsDefStyles_1.colorsDefStyles,
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t:host {\n\t\t\t\theight: 100%;\n\t\t\t}\n\t\t\tslot:not([name='handle'])::slotted(*) {\n\t\t\t\theight: 100%;\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t\t::slotted(.split-handle) {\n\t\t\t\tposition: absolute;\n\t\t\t\twidth: 20px;\n\t\t\t\theight: 20px;\n\t\t\t\tbackground-image: ", ";\n\t\t\t\tbackground-position: center;\n\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t}\n\t\t\t:host([vertical]) ::slotted(.split-handle) {\n\t\t\t\tbackground-image: ", ";\n\t\t\t}\n\t\t\t.divider {\n\t\t\t\tbackground-color: var(--gray_10)\n\t\t\t}\n\t\t\t.divider:hover {\n\t\t\t\tfilter: brightness(85%);\n\t\t\t}\n\t\t\t"], ["\n\t\t\t:host {\n\t\t\t\theight: 100%;\n\t\t\t}\n\t\t\tslot:not([name='handle'])::slotted(*) {\n\t\t\t\theight: 100%;\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t\t::slotted(.split-handle) {\n\t\t\t\tposition: absolute;\n\t\t\t\twidth: 20px;\n\t\t\t\theight: 20px;\n\t\t\t\tbackground-image: ", ";\n\t\t\t\tbackground-position: center;\n\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t}\n\t\t\t:host([vertical]) ::slotted(.split-handle) {\n\t\t\t\tbackground-image: ", ";\n\t\t\t}\n\t\t\t.divider {\n\t\t\t\tbackground-color: var(--gray_10)\n\t\t\t}\n\t\t\t.divider:hover {\n\t\t\t\tfilter: brightness(85%);\n\t\t\t}\n\t\t\t"])), Et2Widget_1.cssImage("splitter_vert"), Et2Widget_1.cssImage("splitter_horz"))
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Split, "properties", {
        get: function () {
            return __assign(__assign({}, _super.properties), { 
                /**
                 * The current position of the divider from the primary panel's edge as a percentage 0-100.
                 * Defaults to 50% of the container's initial size
                 */
                position: Number, 
                /**
                 * If no primary panel is designated, both panels will resize proportionally and docking is disabled
                 * "start" | "end" | undefined
                 */
                primary: String, 
                /**
                 * Legacy orientation
                 * "v" | "h"
                 * @deprecated use vertical=true|false instead
                 */
                orientation: String });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Split.prototype, "slots", {
        get: function () {
            var _this = this;
            return {
                handle: function () {
                    return _this._handleTemplate();
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    Et2Split.prototype.connectedCallback = function () {
        var _this = this;
        _super.prototype.connectedCallback.call(this);
        // Add listeners
        this.addEventListener("sl-reposition", this._handleResize);
        // Wait for everything to complete,
        this.getUpdateComplete().then(function () {
            // Divider node not available earlier
            _this._dividerNode.addEventListener("mousedown", _this._handleMouseDown);
            _this._dividerNode.addEventListener("mouseup", _this._handleMouseUp);
            _this._dividerNode.addEventListener("dblclick", _this._handleDoubleClick);
            // now tell legacy children to resize
            _this.iterateOver(function (widget) {
                // Nextmatches (and possibly other "full height" widgets) need to be adjusted
                // Trigger the dynamic height thing to re-initialize
                // TODO: When dynheight goes away, this can too
                if (typeof widget.dynheight !== "undefined") {
                    var outerNodetopOffset_1 = widget.dynheight.outerNode.offset().top;
                    widget.dynheight.outerNode = {
                        // Random 3px deducted to make things fit better.  Otherwise nm edges are hidden
                        width: function () { return parseInt(getComputedStyle(_this.querySelector("[slot='start']")).width) - 3; },
                        height: function () { return parseInt(getComputedStyle(_this.querySelector("[slot='start']")).height) - 3; },
                        offset: function () { return { top: outerNodetopOffset_1 }; }
                    };
                    widget.dynheight._collectBottomNodes = function () {
                        this.bottomNodes = []; //widget.dynheight.bottomNodes.filter((node) => (node[0].parentNode != this));
                    };
                }
                if (widget.resize) {
                    widget.resize();
                }
            }, _this, et2_core_DOMWidget_1.et2_DOMWidget);
        });
    };
    Et2Split.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        this.removeEventListener("sl-reposition", this._handleResize);
        this._dividerNode.removeEventListener("mousedown", this._handleMouseDown);
        this._dividerNode.removeEventListener("mouseup", this._handleMouseUp);
        this._dividerNode.removeEventListener("dblclick", this._handleDoubleClick);
    };
    /**
     * Determine if the splitter is docked
     * @return boolean
     */
    Et2Split.prototype.isDocked = function () {
        // Docked if we have a primary set, and we're all the way to one side
        return (this.primary == "start" && this.position == 100) || (this.primary == "end" && this.position == 0);
    };
    /**
     * Toggle docked or not
     *
     * @param {boolean} dock
     */
    Et2Split.prototype.toggleDock = function (dock) {
        // Need a primary panel designated so we know which one disappears
        if (typeof this.primary == "undefined") {
            return;
        }
        if (typeof dock == "undefined") {
            dock = !this.isDocked();
        }
        var undocked = (typeof this._undock_position == "undefined" || [0, 100].indexOf(this._undock_position) != -1) ? 50 : this._undock_position;
        this.position = dock ? (this.primary == 'start' ? 100 : 0) : undocked;
    };
    Et2Split.prototype.dock = function () { return this.toggleDock(true); };
    Et2Split.prototype.undock = function () { return this.toggleDock(false); };
    Object.defineProperty(Et2Split.prototype, "orientation", {
        get: function () {
            return this.vertical ? "h" : "v";
        },
        /**
         * Set the orientation of the splitter
         *
         * "h" for the splitter bar to be horizontal (children are stacked vertically)
         * "v" for the splitter bar to be vertical (children are side by side horizontally)
         *
         * @param {string} orientation
         */
        set: function (orientation) {
            this.vertical = orientation == "h";
            this.requestUpdate("vertical");
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Load user's size preference
     *
     * @protected
     */
    Et2Split.prototype._loadPreference = function () {
        if (!this.id) {
            return;
        }
        var pref = this.egw().preference(Et2Split.PREF_PREFIX + this.id, this.egw().getAppName());
        if (pref) {
            // Doesn't matter if it's left or top or what, we just want the number
            this.position = parseInt(Object.values(pref)[0]);
            if (typeof this.position != "number" || isNaN(this.position)) {
                this.position = 50;
            }
        }
        this._undock_position = this.position;
    };
    /**
     * Save the current position to user preference
     *
     * @protected
     */
    Et2Split.prototype._savePreference = function () {
        if (!this.id || !this.egw() || !this.position) {
            return;
        }
        // Store current position in preferences
        var size = this.vertical ? { sizeTop: Math.round(this.position) } : { sizeLeft: Math.round(this.position) };
        this.egw().set_preference(this.egw().getAppName(), Et2Split.PREF_PREFIX + this.id, size);
        // make sure mouse up is handled when the mouse position has crossed the min/max points. The mouseup event does not
        // get called naturally in those situations.
        if (this.position <= parseInt(this.style.getPropertyValue('--min'))
            || this.position >= parseInt(this.style.getPropertyValue('--max'))) {
            this._handleMouseUp();
        }
    };
    /**
     * Handle changes that have to happen based on changes to properties
     *
     */
    Et2Split.prototype.updated = function (changedProperties) {
        _super.prototype.updated.call(this, changedProperties);
        // if ID changes, check preference
        if (changedProperties.has("id") && this.id) {
            this._loadPreference();
        }
    };
    /**
     * Override parent to avoid resizing when not visible, as that breaks size calculations
     *
     * @returns {any}
     */
    Et2Split.prototype.handlePositionChange = function () {
        if (this.offsetParent !== null) {
            return _super.prototype.handlePositionChange.call(this);
        }
    };
    /**
     * Override parent to avoid resizing when not visible, as that breaks size calculations
     */
    Et2Split.prototype.handleResize = function (entries) {
        if (this.offsetParent !== null) {
            return _super.prototype.handleResize.call(this, entries);
        }
    };
    /**
     * Handle a resize
     * This includes notifying any manually resizing widgets, and updating preference if needed
     *
     *
     * @param e
     */
    Et2Split.prototype._handleResize = function (e, timeout) {
        if (timeout === void 0) { timeout = 100; }
        // Update where we would undock to
        if (this.position != 0 && this.position != 100) {
            this._undock_position = this.position;
        }
        if (this._resize_timeout) {
            clearTimeout(this._resize_timeout);
        }
        this._resize_timeout = setTimeout(function () {
            this._resize_timeout = undefined;
            this._savePreference();
            // Tell widgets that manually resize about it
            this.iterateOver(function (_widget) {
                if (typeof _widget.resize === 'function') {
                    _widget.resize();
                }
            }, self, et2_core_interfaces_1.et2_IResizeable);
        }.bind(this), timeout);
    };
    /**
     * Handle doubleclick (on splitter bar) to dock
     */
    Et2Split.prototype._handleDoubleClick = function (e) {
        this.toggleDock();
    };
    /**
     * Hide child iframes, they screw up sizing
     * @param e
     */
    Et2Split.prototype._handleMouseDown = function (e) {
        var _a;
        var _this = this;
        var hidden = ['iframe'];
        for (var _i = 0, hidden_1 = hidden; _i < hidden_1.length; _i++) {
            var tag = hidden_1[_i];
            var hide = this.querySelectorAll(tag);
            (_a = this._hidden).push.apply(_a, hide);
            for (var _b = 0, hide_1 = hide; _b < hide_1.length; _b++) {
                var h = hide_1[_b];
                h.style.visibility = "hidden";
                this.egw().loading_prompt(this.id, true, this.egw().lang('Recalculating frame size...'), h.parentElement);
            }
        }
        // If they move quickly, the mouse can leave the divider and we won't get the mouseup
        // On firefox, this causes incorrect sizes
        var listener = function (e) {
            _this._handleMouseUp(e);
            _this.getRootNode().removeEventListener("mouseup", listener);
        };
        this.getRootNode().addEventListener("mouseup", listener);
    };
    /**
     * Show any hidden children
     */
    Et2Split.prototype._handleMouseUp = function (e) {
        for (var _i = 0, _a = this._hidden; _i < _a.length; _i++) {
            var h = _a[_i];
            h.style.visibility = "initial";
            this.egw().loading_prompt(this.id, false);
        }
        // Do resize a little later for fast draggers using firefox
        this._handleResize(e, 500);
    };
    /**
     * HTML template for split handle
     */
    Et2Split.prototype._handleTemplate = function () {
        return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <div class=\"split-handle\"></div>"], ["\n            <div class=\"split-handle\"></div>"])));
    };
    Object.defineProperty(Et2Split.prototype, "_dividerNode", {
        get: function () {
            return this.shadowRoot.querySelector("[part='divider']");
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Loads the widget tree from an XML node
     * Overridden here to auto-assign slots if not set
     *
     * @param _node xml node
     */
    Et2Split.prototype.loadFromXML = function (_node) {
        _super.prototype.loadFromXML.call(this, _node);
        for (var i = 0; i < this.getChildren().length && i < Et2Split.PANEL_NAMES.length; i++) {
            var child = this.getChildren()[i].getDOMNode();
            if (child && !child.getAttribute("slot")) {
                child.setAttribute("slot", Et2Split.PANEL_NAMES[i]);
            }
        }
    };
    Et2Split.PREF_PREFIX = "splitter-size-";
    Et2Split.PANEL_NAMES = ["start", "end"];
    return Et2Split;
}(Et2Widget_1.Et2Widget(shoelace_1.SlSplitPanel)));
exports.Et2Split = Et2Split;
customElements.define("et2-split", Et2Split);
var templateObject_1, templateObject_2;
