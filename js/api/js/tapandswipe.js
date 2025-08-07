"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.tapAndSwipe = void 0;
var tapAndSwipe = /** @class */ (function () {
    /**
     * Constructor
     * @param _element
     * @param _options
     */
    function tapAndSwipe(_element, _options) {
        /**
         * Keeps the touch X start point
         * @private
         */
        this._startX = null;
        /**
         * Keeps the touch Y start point
         * @private
         */
        this._startY = null;
        /**
         * Keeps the touch X end point
         * @private
         */
        this._endX = null;
        /**
         * Keeps the touch Y end point
         * @private
         */
        this._endY = null;
        /**
         * keeps the distance travelled between startX point and endX point
         * @private
         */
        this._distanceX = null;
        /**
         * keeps the distance travelled between startY point and endY point
         * @private
         */
        this._distanceY = null;
        /**
         * flag to keep the status of type of tap
         * @private
         */
        this._isTapAndHold = false;
        /**
         * keeps the timeout id for taphold
         */
        this._tapHoldTimeout = null;
        /**
         * keeps the timeout id for tap
         */
        this._tapTimeout = null;
        /**
         * keeps the contact point on touch start
         * @private
         */
        this._fingercount = null;
        this._scrolledElementObj = null;
        this._hasBeenScrolled = false;
        this._scrollEventTriggered = false;
        this._stillMoving = false;
        /**
         * Options
         * @protected
         */
        this.options = null;
        /**
         * Keeps the html node
         */
        this.element = null;
        this.options = __assign(__assign({}, tapAndSwipe._default), _options);
        var element = _element || _options.element;
        // Dont construct if the element is not there
        if (!element || !(typeof element != 'string' && element instanceof EventTarget))
            return;
        this.element = (element instanceof EventTarget) ? element : document.querySelector(element);
        this.element.addEventListener('touchstart', this._onTouchStart.bind(this), false);
        this.element.addEventListener('touchend', this._ontouchEnd.bind(this), false);
        this.element.addEventListener('touchmove', this._onTouchMove.bind(this), false);
        this.element.addEventListener('touchcancel', this._onTouchCancel.bind(this), false);
    }
    tapAndSwipe.prototype._onScrolled = function (event) {
        this._scrollEventTriggered = true;
    };
    tapAndSwipe.prototype._onTouchCancel = function (event) {
        //cleanup tapHoldTimeout
        window.clearTimeout(this._tapHoldTimeout);
        //cleanup tapHoldTimeout
        window.clearTimeout(this._tapTimeout);
    };
    tapAndSwipe.prototype._onTouchMove = function (event) {
        this._stillMoving = true;
    };
    /**
     * on touch start event handler
     * @param event
     * @private
     */
    tapAndSwipe.prototype._onTouchStart = function (event) {
        var _this = this;
        this._startX = event.changedTouches[0].pageX;
        this._startY = event.changedTouches[0].pageY;
        this._isTapAndHold = false;
        this._fingercount = event.touches.length;
        if (event.composedPath()) {
            var scrolledItem = event.composedPath().filter(function (_item) {
                if (_item instanceof HTMLElement)
                    _item.addEventListener('scroll', _this._onScrolled.bind(_this), false);
                return _item instanceof HTMLElement && _this.element.contains(_item) && (_item.scrollTop != 0 || _item.scrollLeft != 0);
            });
            if (scrolledItem.length > 0) {
                this._scrolledElementObj = { el: scrolledItem[0], scrollTop: scrolledItem[0].scrollTop, scrollLeft: scrolledItem[0].scrollLeft };
            }
            else {
                this._scrolledElementObj = null;
            }
        }
        this._tapHoldTimeout = window.setTimeout(function (_) {
            _this._isTapAndHold = true;
            //check scrolling
            if (_this.options.allowScrolling && _this._stillMoving) {
                return;
            }
            _this.options.tapAndHold.call(_this, event, _this._fingercount);
        }, this.options.tapHoldThreshold);
    };
    /**
     * On touch end event handler
     * @param event
     * @private
     */
    tapAndSwipe.prototype._ontouchEnd = function (event) {
        this._endX = event.changedTouches[0].pageX;
        this._endY = event.changedTouches[0].pageY;
        this._stillMoving = false;
        if (this._scrolledElementObj) {
            switch (this.options.allowScrolling) {
                case "vertical":
                    this._hasBeenScrolled = this._scrolledElementObj.el.scrollTop != this._scrolledElementObj.scrollTop;
                    break;
                case "horizental":
                    this._hasBeenScrolled = this._scrolledElementObj.el.scrollLeft != this._scrolledElementObj.scrollLeft;
                    break;
                case "both":
                    this._hasBeenScrolled = (this._scrolledElementObj.el.scrollTop != this._scrolledElementObj.scrollTop) ||
                        (this._scrolledElementObj.el.scrollLeft != this._scrolledElementObj.scrollLeft);
                    break;
                default:
                    this._hasBeenScrolled = false;
            }
        }
        else {
            this._hasBeenScrolled = false;
        }
        this._handler(event);
    };
    /**
     * Handles the type of gesture and calls the right callback for it
     * @param event
     * @private
     */
    tapAndSwipe.prototype._handler = function (event) {
        var _this = this;
        var _a;
        //cleanup tapHoldTimeout
        window.clearTimeout(this._tapHoldTimeout);
        this._distanceX = Math.abs(this._endX - this._startX);
        this._distanceY = Math.abs(this._endY - this._startY);
        var isTabOrHold = (this._endX == this._startX && this._endY == this._startY
            || (Math.sqrt((this._distanceX) * (this._distanceX) + (this._distanceY * 2))
                < this.options.threshold));
        this._hasBeenScrolled = (_a = this._hasBeenScrolled) !== null && _a !== void 0 ? _a : (!isTabOrHold && this._scrollEventTriggered);
        //check scrolling
        if (this.options.allowScrolling && this._hasBeenScrolled) {
            // let the scrolling happens
            return;
        }
        // Tap & TapAndHold handler
        if (isTabOrHold) {
            if (!this._isTapAndHold) {
                this._tapTimeout = window.setTimeout(function (_) {
                    _this.options.tap.call(_this, event, _this._fingercount);
                }, 100);
            }
            return;
        }
        // left swipe handler
        if (this._endX + this.options.threshold < this._startX && this._distanceX > this._distanceY) {
            if (this._distanceX < this.options.minSwipeThreshold)
                return;
            this.options.swipe.call(this, event, 'left', this._distanceX, this._fingercount);
            return;
        }
        // right swipe handler
        if (this._endX - this.options.threshold > this._startX && this._distanceX > this._distanceY) {
            if (this._distanceX < this.options.minSwipeThreshold)
                return;
            this.options.swipe.call(this, event, 'right', this._distanceX, this._fingercount);
            return;
        }
        // up swipe handler
        if (this._endY + this.options.threshold < this._startY && this._distanceY > this._distanceX) {
            if (this._distanceY < this.options.minSwipeThreshold)
                return;
            this.options.swipe.call(this, event, 'up', this._distanceY, this._fingercount);
            return;
        }
        // down swipe handler
        if (this._endY - this.options.threshold > this._startY && this._distanceY > this._distanceX) {
            if (this._distanceY < this.options.minSwipeThreshold)
                return;
            this.options.swipe.call(this, event, 'down', this._distanceY, this._fingercount);
            return;
        }
    };
    /**
     * destroy the event listeners
     */
    tapAndSwipe.prototype.destroy = function () {
        this.element.removeEventListener('touchstart', this._onTouchStart);
        this.element.removeEventListener('touchend', this._ontouchEnd);
        this.element.removeEventListener('touchcancel', this._onTouchCancel);
    };
    tapAndSwipe._default = {
        threshold: 5,
        tapHoldThreshold: 3000,
        minSwipeThreshold: 150,
        allowScrolling: 'both',
        swipe: function () { },
        tap: function () { },
        tapAndHold: function () { }
    };
    return tapAndSwipe;
}());
exports.tapAndSwipe = tapAndSwipe;
