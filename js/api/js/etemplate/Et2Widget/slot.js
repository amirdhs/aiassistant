"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTextContent = exports.getInnerHTML = exports.HasSlotController = void 0;
/**
 * A reactive controller that determines when slots exist.
 *
 * Copied from Shoelace
 * /src/internal/slot.ts
 */
var HasSlotController = /** @class */ (function () {
    function HasSlotController(host) {
        var _this = this;
        var slotNames = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            slotNames[_i - 1] = arguments[_i];
        }
        this.slotNames = [];
        this.handleSlotChange = function (event) {
            var slot = event.target;
            if ((_this.slotNames.includes('[default]') && !slot.name) || (slot.name && _this.slotNames.includes(slot.name))) {
                _this.host.requestUpdate();
            }
        };
        (this.host = host).addController(this);
        this.slotNames = slotNames;
    }
    HasSlotController.prototype.hasDefaultSlot = function () {
        return __spreadArrays(this.host.childNodes).some(function (node) {
            if (node.nodeType === node.TEXT_NODE && node.textContent.trim() !== '') {
                return true;
            }
            if (node.nodeType === node.ELEMENT_NODE) {
                var el = node;
                var tagName = el.tagName.toLowerCase();
                // Ignore visually hidden elements since they aren't rendered
                if (tagName === 'sl-visually-hidden') {
                    return false;
                }
                // If it doesn't have a slot attribute, it's part of the default slot
                if (!el.hasAttribute('slot')) {
                    return true;
                }
            }
            return false;
        });
    };
    HasSlotController.prototype.hasNamedSlot = function (name) {
        return this.host.querySelector(":scope > [slot=\"" + name + "\"]") !== null;
    };
    HasSlotController.prototype.test = function (slotName) {
        return slotName === '[default]' ? this.hasDefaultSlot() : this.hasNamedSlot(slotName);
    };
    HasSlotController.prototype.hostConnected = function () {
        this.host.shadowRoot.addEventListener('slotchange', this.handleSlotChange);
    };
    HasSlotController.prototype.hostDisconnected = function () {
        this.host.shadowRoot.removeEventListener('slotchange', this.handleSlotChange);
    };
    return HasSlotController;
}());
exports.HasSlotController = HasSlotController;
/**
 * Given a slot, this function iterates over all of its assigned element and text nodes and returns the concatenated
 * HTML as a string. This is useful because we can't use slot.innerHTML as an alternative.
 */
function getInnerHTML(slot) {
    var nodes = slot.assignedNodes({ flatten: true });
    var html = '';
    __spreadArrays(nodes).forEach(function (node) {
        if (node.nodeType === Node.ELEMENT_NODE) {
            html += node.outerHTML;
        }
        if (node.nodeType === Node.TEXT_NODE) {
            html += node.textContent;
        }
    });
    return html;
}
exports.getInnerHTML = getInnerHTML;
/**
 * Given a slot, this function iterates over all of its assigned text nodes and returns the concatenated text as a
 * string. This is useful because we can't use slot.textContent as an alternative.
 */
function getTextContent(slot) {
    if (!slot) {
        return '';
    }
    var nodes = slot.assignedNodes({ flatten: true });
    var text = '';
    __spreadArrays(nodes).forEach(function (node) {
        if (node.nodeType === Node.TEXT_NODE) {
            text += node.textContent;
        }
    });
    return text;
}
exports.getTextContent = getTextContent;
