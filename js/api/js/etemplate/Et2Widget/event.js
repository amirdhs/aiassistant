"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForEvent = void 0;
/**
 * Waits for a specific event to be emitted from an element. Ignores events that bubble up from child elements.
 *
 * Copied from Shoelace
 * /src/internal/event.ts
 */
function waitForEvent(el, eventName) {
    return new Promise(function (resolve) {
        function done(event) {
            if (event.target === el) {
                el.removeEventListener(eventName, done);
                resolve();
            }
        }
        el.addEventListener(eventName, done);
    });
}
exports.waitForEvent = waitForEvent;
