"use strict";
/**
 * EGroupware eTemplate2 - Mixin to add expose view of media and a gallery view
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
 * @link https://www.egroupware.org
 * @author Hadi Nategh <hn[at]egroupware.org>
 * @author Nathan Gray <ng[at]egroupware.org>
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
exports.ExposeMixin = exports.MIME_REGEX = void 0;
// Don't import this more than once
require("../../../../node_modules/blueimp-gallery/js/blueimp-gallery.min");
var lit_1 = require("lit");
var et2_extension_nextmatch_1 = require("../et2_extension_nextmatch");
var Et2Dialog_1 = require("../Et2Dialog/Et2Dialog");
var et2_dataview_controller_1 = require("../et2_dataview_controller");
var egw_global_1 = require("../../jsapi/egw_global");
// Minimum data to qualify as an image and not cause errors
var IMAGE_DEFAULT = {
    title: egw_global_1.egw.lang ? egw_global_1.egw.lang ? egw_global_1.egw.lang('loading') : "'loading'" : "'loading'",
    href: '',
    type: 'image/png',
    thumbnail: '',
    loading: true
};
// For filtering to only show things we can handle
exports.MIME_REGEX = (navigator.userAgent.match(/(MSIE|Trident)/)) ?
    // IE only supports video/mp4 mime type
    new RegExp(/(video\/mp4)|(image\/:*(?!tif|x-xcf|pdf))|(audio\/:*)/, 'i') :
    new RegExp(/(video\/(mp4|ogg|webm))|(image\/:*(?!tif|x-xcf|pdf))|(audio\/:*)/, 'i');
var MIME_AUDIO_REGEX = new RegExp(/(audio\/:*)/, 'i');
// open office document mime type currently supported by webodf editor
var MIME_ODF_REGEX = new RegExp(/application\/vnd\.oasis\.opendocument\.text/);
function ExposeMixin(superclass) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            // We store the wheel handler here so we can remove it properly
            _this._wheelHandler = null;
            _this.URL_REGEXP = /url\("([^)]+)"\)/;
            // bind handler context to instance
            var handlers = [
                "expose_onclick",
                "expose_onopen",
                "expose_onopened",
                "expose_onslide",
                "expose_onslideend",
                "expose_onslidecomplete",
                "expose_onclose",
                "expose_onclosed"
            ];
            for (var _a = 0, handlers_1 = handlers; _a < handlers_1.length; _a++) {
                var key = handlers_1[_a];
                _this[key] = _this[key].bind(_this);
            }
            return _this;
        }
        Object.defineProperty(class_1, "styles", {
            get: function () {
                return __spreadArrays(_super.styles, [
                    lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t"], ["\n\t\t\t\t"])))
                ]);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(class_1, "properties", {
            get: function () {
                return __assign(__assign({}, _super.properties), { 
                    /**
                     * Function to extract an image list
                     *
                     * "Normally" we'll try to pull a list of images from the nextmatch or show just the current widget,
                     * but if you know better you can provide a method to get the list.
                     */
                    mediaContentFunction: { type: Function } });
            },
            enumerable: false,
            configurable: true
        });
        class_1.prototype.connectedCallback = function () {
            _super.prototype.connectedCallback.call(this);
            if (document.body.querySelector('#blueimp-gallery') == null) {
                this.egw().includeCSS(egw_global_1.egw.webserverUrl + "/node_modules/blueimp-gallery/css/blueimp-gallery.css");
                this.egw().includeCSS(egw_global_1.egw.webserverUrl + "/node_modules/blueimp-gallery/css/blueimp-gallery-indicator.css");
                this.egw().includeCSS(egw_global_1.egw.webserverUrl + "/node_modules/blueimp-gallery/css/blueimp-gallery-video.css");
                // Create Gallery DOM structure
                lit_1.render(this._galleryTemplate(), document.body);
            }
        };
        class_1.prototype.disconnectedCallback = function () {
            _super.prototype.disconnectedCallback.call(this);
        };
        Object.defineProperty(class_1.prototype, "exposeValue", {
            /**
             * Get the info needed to determine if this widget's value allows it to participate in expose
             * It needs to have a path, and we use mime to determine if it can expose
             *
             * It's also passed to getMedia() when we're not reading from a nextmatch
             *
             * @returns {ExposeValue}
             */
            get: function () {
                //@ts-ignore value might not exist
                return this.value || null;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Get the info needed to show the given value as slide(s)
         *
         * _value is (usually?) pulled from egw.dataGetUIDdata()
         *
         * Override this
         */
        class_1.prototype.getMedia = function (_value) {
            var mediaContent = [];
            if (_value) {
                mediaContent = [{
                        title: _value.label,
                        href: _value.download_url ? this._processUrl(_value.download_url) : this._processUrl(_value.path),
                        type: _value.mime || (_value.type ? _value.type + "/*" : "")
                    }];
                if (this.isExposable()) {
                    mediaContent[0].thumbnail = _value.thumbnail ? this._processUrl(_value.thumbnail) : mediaContent[0].href;
                }
                else {
                    var fe = egw_global_1.egw.file_editor_prefered_mimes(_value.mime);
                    if (fe && fe.mime[_value.mime] && fe.mime[_value.mime].favIconUrl) {
                        mediaContent[0].thumbnail = fe.mime[_value.mime].favIconUrl;
                    }
                }
            }
            return mediaContent;
        };
        class_1.prototype._processUrl = function (url) {
            var base_url = egw_global_1.egw.webserverUrl.match(/^\/ig/) ? egw_global_1.egw(window).window.location.origin + egw_global_1.egw.webserverUrl + '/' : egw_global_1.egw.webserverUrl + '/';
            if (base_url && base_url != '/' && url.indexOf(base_url) != 0) {
                url = base_url + url;
            }
            return url;
        };
        /**
         * Handle changes that have to happen based on changes to properties
         *
         */
        class_1.prototype.requestUpdate = function (name, oldValue, options) {
            _super.prototype.requestUpdate.call(this, name, oldValue, options);
            // if there's a value change, (de)bind the gallery
            if (name === "value") {
                this._bindGallery();
            }
        };
        /**
         * Binds a click handler so if the user clicks, we'll initialize & show the gallery
         *
         * @protected
         */
        class_1.prototype._bindGallery = function () {
            // If the media type is not supported do not bind the click handler
            if (!this.isExposable()) {
                this.classList.remove("et2_clickable");
                if (this._gallery) {
                    this._gallery.close();
                }
                return;
            }
            if (!this._gallery) {
                this.classList.add("et2_clickable");
                // Normal click handler will handle it
            }
        };
        class_1.prototype.isExposable = function () {
            if (!this.exposeValue || typeof this.exposeValue.mime !== "string") {
                return false;
            }
            if (this.exposeValue.mime.match(exports.MIME_REGEX) || this.exposeValue.mime.match(MIME_AUDIO_REGEX)) {
                return true;
            }
            return false;
        };
        /**
         * Just override the normal click handler
         *
         * @param {MouseEvent} _ev
         * @returns {boolean}
         */
        class_1.prototype._handleClick = function (_ev) {
            if ((!this.isExposable() || this.expose_onclick(_ev)) && typeof _super.prototype._handleClick === "function") {
                return _super.prototype._handleClick.call(this, _ev);
            }
            return false;
        };
        Object.defineProperty(class_1.prototype, "expose_options", {
            get: function () {
                return {
                    // The Id, element or querySelector of the gallery widget:
                    container: '#blueimp-gallery',
                    // The tag name, Id, element or querySelector of the slides container:
                    slidesContainer: 'div',
                    // The tag name, Id, element or querySelector of the title element:
                    titleElement: 'h3',
                    // The class to add when the gallery is visible:
                    displayClass: 'blueimp-gallery-display',
                    // The class to add when the gallery controls are visible:
                    controlsClass: 'blueimp-gallery-controls',
                    // The class to add when the gallery only displays one element:
                    singleClass: 'blueimp-gallery-single',
                    // The class to add when the left edge has been reached:
                    leftEdgeClass: 'blueimp-gallery-left',
                    // The class to add when the right edge has been reached:
                    rightEdgeClass: 'blueimp-gallery-right',
                    // The class to add when the automatic slideshow is active:
                    playingClass: 'blueimp-gallery-playing',
                    // The class for all slides:
                    slideClass: 'slide',
                    // The slide class for loading elements:
                    slideLoadingClass: 'loading',
                    // The slide class for elements that failed to load:
                    slideErrorClass: 'slide-error',
                    // The class for the content element loaded into each slide:
                    slideContentClass: 'slide-content',
                    // The class for the "toggle" control:
                    toggleClass: 'toggle',
                    // The class for the "prev" control:
                    prevClass: 'prev',
                    // The class for the "next" control:
                    nextClass: 'next',
                    // The class for the "close" control:
                    closeClass: 'close',
                    // The class for the "play-pause" toggle control:
                    playPauseClass: 'play-pause',
                    // The class to add for fullscreen button option
                    fullscreenClass: 'fullscreen',
                    // The list object property (or data attribute) with the object type:
                    typeProperty: 'type',
                    // The list object property (or data attribute) with the object title:
                    titleProperty: 'title',
                    // The list object property (or data attribute) with the object URL:
                    urlProperty: 'href',
                    // The gallery listens for transitionend events before triggering the
                    // opened and closed events, unless the following option is set to false:
                    displayTransition: true,
                    // Defines if the gallery slides are cleared from the gallery modal,
                    // or reused for the next gallery initialization:
                    clearSlides: true,
                    // Defines if images should be stretched to fill the available space,
                    // while maintaining their aspect ratio (will only be enabled for browsers
                    // supporting background-size="contain", which excludes IE < 9).
                    // Set to "cover", to make images cover all available space (requires
                    // support for background-size="cover", which excludes IE < 9):
                    stretchImages: true,
                    // Toggle the controls on pressing the Return key:
                    toggleControlsOnReturn: true,
                    // Toggle the automatic slideshow interval on pressing the Space key:
                    toggleSlideshowOnSpace: true,
                    // Navigate the gallery by pressing left and right on the keyboard:
                    enableKeyboardNavigation: true,
                    // Close the gallery on pressing the ESC key:
                    closeOnEscape: true,
                    // Close the gallery when clicking on an empty slide area:
                    closeOnSlideClick: false,
                    // Close the gallery by swiping up or down:
                    closeOnSwipeUpOrDown: true,
                    // Emulate touch events on mouse-pointer devices such as desktop browsers:
                    emulateTouchEvents: true,
                    // Stop touch events from bubbling up to ancestor elements of the Gallery:
                    stopTouchEventsPropagation: false,
                    // Hide the page scrollbars:
                    hidePageScrollbars: true,
                    // Stops any touches on the container from scrolling the page:
                    disableScroll: true,
                    // Carousel mode (shortcut for carousel specific options):
                    carousel: true,
                    // Allow continuous navigation, moving from last to first
                    // and from first to last slide:
                    continuous: false,
                    // Remove elements outside of the preload range from the DOM:
                    unloadElements: true,
                    // Start with the automatic slideshow:
                    startSlideshow: false,
                    // Delay in milliseconds between slides for the automatic slideshow:
                    slideshowInterval: 3000,
                    // The starting index as integer.
                    // Can also be an object of the given list,
                    // or an equal object with the same url property:
                    index: 0,
                    // The number of elements to load around the current index:
                    preloadRange: 2,
                    // The transition speed between slide changes in milliseconds:
                    transitionSpeed: 400,
                    //Hide controls when the slideshow is playing
                    hideControlsOnSlideshow: true,
                    //Request fullscreen on slide show
                    toggleFullscreenOnSlideShow: true,
                    // The transition speed for automatic slide changes, set to an integer
                    // greater 0 to override the default transition speed:
                    slideshowTransitionSpeed: undefined,
                    // The tag name, Id, element or querySelector of the indicator container:
                    indicatorContainer: 'ol',
                    // The class for the active indicator:
                    activeIndicatorClass: 'active',
                    // The list object property (or data attribute) with the thumbnail URL,
                    // used as alternative to a thumbnail child element:
                    thumbnailProperty: 'thumbnail',
                    // Defines if the gallery indicators should display a thumbnail:
                    thumbnailIndicators: true,
                    //thumbnail with image tag
                    thumbnailWithImgTag: true,
                    // Callback function executed when the Gallery is initialized.
                    // Is called with the gallery instance as "this" object:
                    onopen: this.expose_onopen,
                    // Callback function executed when the Gallery has been initialized
                    // and the initialization transition has been completed.
                    // Is called with the gallery instance as "this" object:
                    onopened: this.expose_onopened,
                    // Callback function executed on slide change.
                    // Is called with the gallery instance as "this" object and the
                    // current index and slide as arguments:
                    onslide: this.expose_onslide,
                    // Callback function executed after the slide change transition.
                    // Is called with the gallery instance as "this" object and the
                    // current index and slide as arguments:
                    onslideend: this.expose_onslideend,
                    //// Callback function executed on slide content load.
                    // Is called with the gallery instance as "this" object and the
                    // slide index and slide element as arguments:
                    onslidecomplete: this.expose_onslidecomplete,
                    //// Callback function executed when the Gallery is about to be closed.
                    // Is called with the gallery instance as "this" object:
                    onclose: this.expose_onclose,
                    // Callback function executed when the Gallery has been closed
                    // and the closing transition has been completed.
                    // Is called with the gallery instance as "this" object:
                    onclosed: this.expose_onclosed
                };
            },
            enumerable: false,
            configurable: true
        });
        class_1.prototype._galleryTemplate = function () {
            return lit_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                <div id=\"blueimp-gallery\" class=\"blueimp-gallery\">\n                    <div class=\"slides\"></div>\n                    <h3 class=\"title\"></h3>\n                    <a class=\"prev\">\u2039</a>\n                    <a class=\"next\">\u203A</a>\n                    <a title=\"", "\" class=\"close\"></a>\n                    <a title=\"", "\" class=\"play-pause\"></a>\n                    <a title=\"", "\" class=\"fullscreen\"></a>\n                    <a title=\"", "\" class=\"download\" @click=", "></a>\n                    <ol class=\"indicator\"></ol>\n                </div>\n\t\t\t"], ["\n                <div id=\"blueimp-gallery\" class=\"blueimp-gallery\">\n                    <div class=\"slides\"></div>\n                    <h3 class=\"title\"></h3>\n                    <a class=\"prev\">\u2039</a>\n                    <a class=\"next\">\u203A</a>\n                    <a title=\"", "\" class=\"close\"></a>\n                    <a title=\"", "\" class=\"play-pause\"></a>\n                    <a title=\"", "\" class=\"fullscreen\"></a>\n                    <a title=\"", "\" class=\"download\" @click=", "></a>\n                    <ol class=\"indicator\"></ol>\n                </div>\n\t\t\t"])), egw_global_1.egw().lang('Close'), egw_global_1.egw().lang('Play/Pause'), egw_global_1.egw().lang('Fullscreen'), egw_global_1.egw().lang('Save'), this.handleDownload);
        };
        /**
         * See if the current widget is in a nextmatch, as this allows us to display
         * thumbnails underneath
         *
         * @param {et2_IExposable} widget
         * @returns {et2_nextmatch | null}
         */
        class_1.prototype.find_nextmatch = function (widget) {
            var current = widget;
            var nextmatch = null;
            while (nextmatch == null && current) {
                current = current.getParent();
                if (current && typeof current != 'undefined' && current.instanceOf(et2_extension_nextmatch_1.et2_nextmatch)) {
                    nextmatch = current;
                }
            }
            // No nextmatch, or nextmatch not quite ready
            // At the moment only filemanger nm would work
            // as gallery, thus we disable other nestmatches
            // to build up gallery but filemanager
            if (nextmatch == null || nextmatch.controller == null || !nextmatch.dom_id.match(/filemanager/, 'ig')) {
                return null;
            }
            return nextmatch;
        };
        ;
        class_1.prototype._init_blueimp_gallery = function (event, _value) {
            var _this = this;
            // Image list
            var mediaContent = [];
            // We'll customise default options
            var options = this.expose_options;
            var nm = this.find_nextmatch(this);
            if (typeof this.__mediaContentFunction == "function") {
                this.__mediaContentFunction(this);
            }
            else if (nm && !this._is_target_indepth(nm, event.target)) {
                // Get the row that was clicked, find its index in the list
                var current_entry = nm.controller.getRowByNode(event.target);
                // But before it goes, we'll pull everything we can
                this.read_from_nextmatch(nm, mediaContent);
                // find current_entry in array and set it's array-index
                for (var i = 0; i < mediaContent.length; i++) {
                    if ('filemanager::' + mediaContent[i].path == current_entry.uid) {
                        options.index = i;
                        break;
                    }
                }
                // This will trigger nm to refresh and get just the ones we can handle
                // but it might take a while, so do it later - make sure our current
                // one is loaded first.
                window.setTimeout(function () {
                    nm.applyFilters({ col_filter: { mime: '/' + exports.MIME_REGEX.source + '/' } });
                }, 1);
            }
            else {
                // Try for all exposable of the same type in the parent widget
                try {
                    var others = (this.getParent().closest("[exposable]") || this.getParent().getDOMNode()).querySelectorAll(this.localName);
                    //might be in elements shadow root e.g. Links in LinksTab of edit windows
                    if (!others || others.length === 0) {
                        others = this.getParent().getDOMNode().shadowRoot.querySelectorAll(this.localName);
                    }
                    others.forEach(function (exposable, index) {
                        if (exposable === _this) {
                            options.index = mediaContent.length;
                        }
                        if (exposable.isExposable()) {
                            mediaContent.push.apply(mediaContent, exposable.getMedia(Object.assign({}, IMAGE_DEFAULT, exposable.exposeValue)));
                        }
                    });
                    if (!others || others.length == 0) {
                        mediaContent = this.getMedia(_value);
                    }
                }
                catch (e) {
                    // Well, that didn't work.  Just the one then.
                    // @ts-ignore
                    mediaContent = this.getMedia(_value);
                }
                // Do not show thumbnail indicator on single expose view
                options.thumbnailIndicators = (mediaContent.length > 1);
                if (!options.thumbnailIndicators) {
                    options.indicatorContainer = 'nope';
                }
            }
            // @ts-ignore
            this._gallery = new blueimp.Gallery(mediaContent, options);
            // @ts-ignore
            document.body.querySelector("#blueimp-gallery").gallery = this._gallery;
        };
        /**
         * Read images out of the data for the nextmatch
         *
         * @param {et2_nextmatch} nm
         * @param {Object[]} images
         * @param {number} start_at
         * @returns {undefined}
         */
        class_1.prototype.read_from_nextmatch = function (nm, images, start_at) {
            var _a;
            if (!start_at) {
                start_at = 0;
            }
            var image_index = start_at;
            var stop = Math.max.apply(null, Object.keys(nm.controller._indexMap));
            for (var i = start_at; i <= stop; i++) {
                if (!nm.controller._indexMap[i] || !nm.controller._indexMap[i].uid) {
                    // Returning instead of using IMAGE_DEFAULT means we stop as
                    // soon as a hole is found, instead of getting everything that is
                    // available.  The gallery can't fill in the holes.
                    images[image_index++] = IMAGE_DEFAULT;
                    continue;
                }
                var uid = nm.controller._indexMap[i].uid;
                if (!uid) {
                    continue;
                }
                var data = egw_global_1.egw.dataGetUIDdata(uid);
                if (typeof ((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.mime) === "string" && exports.MIME_REGEX.test(data.data.mime)) {
                    var media = this.getMedia(data.data);
                    images[image_index++] = Object.assign({}, data.data, media[0]);
                }
            }
        };
        /**
         * Set a particular index/image in the gallery instead of just appending
         * it to the end
         *
         * @param {integer} index
         * @param {Object} image
         * @returns {undefined}
         */
        class_1.prototype.set_slide = function (index, image) {
            var active = (index == this._gallery.index);
            // Pad with blanks until length is right
            while (index > this._gallery.getNumber()) {
                this._gallery.add([Object.assign({}, IMAGE_DEFAULT)]);
            }
            // Don't bother with adding a default, we just did that
            if (image.loading) {
                //Add load class if it's really a slide with error
                if (this._gallery.slidesContainer.find('[data-index="' + index + '"]').hasClass(this._gallery.options.slideErrorClass)) {
                    this._gallery.slides[index].classList.add(this._gallery.options.slideLoadingClass);
                    this._gallery.slides[index].classList.remove(this._gallery.options.slideErrorClass);
                }
                return;
            }
            // Remove the loading class if the slide is loaded
            else if (this._gallery.slides[index]) {
                this._gallery.slides[index].classList.remove(this._gallery.options.slideLoadingClass);
            }
            // Just use add to let gallery create everything it needs
            var new_index = this._gallery.num;
            this._gallery.add([image]);
            // Move it to where we want it.
            // Gallery uses arrays and indexes and has several internal variables
            // that need to be updated.
            //
            // list
            this._gallery.list[index] = this._gallery.list[new_index];
            this._gallery.list.splice(new_index, 1);
            // indicators & slides
            var dom_nodes = ['indicators', 'slides'];
            for (var i in dom_nodes) {
                var var_name = dom_nodes[i];
                // Remove old one from DOM
                this._gallery[var_name][index].remove();
                // Move new one into it's place in gallery
                this._gallery[var_name][index] = this._gallery[var_name][new_index];
                // Move into place in DOM
                var node = this._gallery[var_name][index];
                node.setAttribute('data-index', index);
                if (this._gallery.slides[(index + 1)]) {
                    this._gallery.slidesContainer[0].insertBefore(this._gallery.slides[(index + 1)], undefined);
                }
                if (active) {
                    node.classList.add(this._gallery.options.activeIndicatorClass);
                }
                this._gallery[var_name].splice(new_index, 1);
            }
            if (active) {
                this._gallery.setActiveIndicator(this._gallery.indicators[index]);
            }
            // positions
            this._gallery.positions[index] = active ? 0 : (index > this._gallery.index ? this._gallery.slideWidth : -this._gallery.slideWidth);
            this._gallery.positions.splice(new_index, 1);
            // elements - removing will allow to re-do the slide
            if (this._gallery.elements[index]) {
                delete this._gallery.elements[index];
                this._gallery.loadElement(index);
            }
            // Remove the one we just added
            this._gallery.num -= 1;
        };
        ;
        /**
         * audio player expose
         * @param _value
         * @private
         */
        class_1.prototype._audio_player = function (_value) {
            var button = [
                {
                    "button_id": 1,
                    "label": egw_global_1.egw.lang ? egw_global_1.egw.lang("close") : "close",
                    id: '1',
                    image: 'cancel',
                    default: true
                }
            ];
            var mediaContent = this.getMedia(_value)[0];
            var dialog = new Et2Dialog_1.Et2Dialog();
            dialog.transformAttributes({
                callback: function (_btn, value) {
                    if (_btn == Et2Dialog_1.Et2Dialog.OK_BUTTON) {
                    }
                },
                beforeClose: function () {
                },
                title: mediaContent.title,
                buttons: button,
                minWidth: 350,
                minHeight: 200,
                isModal: false,
                position: "right bottom,right-50 bottom-10",
                value: {
                    content: {
                        src: mediaContent.download_href || mediaContent.href
                    }
                },
                resizable: false,
                template: egw_global_1.egw.webserverUrl + '/api/templates/default/audio_player.xet',
                dialogClass: "audio_player"
            });
            // @ts-ignore
            document.body.appendChild(dialog);
        };
        /**
         * Check if clicked target from nm is in depth
         *
         *  @param nm nextmatch widget
         *  @param target selected target dom node
         *
         *  @return {boolean} returns false if target is not in depth otherwise True
         */
        class_1.prototype._is_target_indepth = function (nm, target) {
            var res = false;
            if (nm) {
                if (!target) {
                    // @ts-ignore
                    var target_1 = this.getDOMNode();
                }
                var entry = nm.controller.getRowByNode(target);
                if (entry && entry.controller.getDepth() > 0) {
                    res = true;
                }
            }
            return res;
        };
        class_1.prototype.expose_onclick = function (event) {
            // Do not trigger expose view if one of the operator keys are held
            if (event.altKey || event.ctrlKey || event.shiftKey || event.metaKey) {
                return;
            }
            event.stopImmediatePropagation();
            if (this.exposeValue.mime.match(exports.MIME_REGEX) && !this.exposeValue.mime.match(MIME_AUDIO_REGEX)) {
                this._init_blueimp_gallery(event, this.exposeValue);
                return false;
            }
            else if (this.exposeValue.mime.match(MIME_AUDIO_REGEX)) {
                this._audio_player(this.exposeValue);
                return false;
            }
            return true;
        };
        class_1.prototype.expose_onopen = function () { };
        class_1.prototype.expose_onopened = function () {
            var _this = this;
            // Check to see if we're in a nextmatch, do magic
            var nm = this.find_nextmatch(this);
            var self = this;
            if (nm) {
                // Add scrolling to the indicator list
                var total_count = nm.controller._grid.getTotalCount();
                if (total_count >= this._gallery.num) {
                    var $indicator_1 = this._gallery.container.find('.indicator');
                    $indicator_1
                        .addClass('paginating');
                    /*
                        .swipe(function(event, direction, distance)
                        {
                            // @ts-ignore
                            if(direction == jQuery.fn.swipe.directions.LEFT)
                            {
                                distance *= -1;
                            }
                            // @ts-ignore
                            else if(direction == jQuery.fn.swipe.directions.RIGHT)
                            {
                                // OK.
                            }
                            else
                            {
                                return;
                            }
                            jQuery(this).css('left', Math.min(0, parseInt(jQuery(this).css('left')) - (distance * 30)) + 'px');
                        });

                     */
                    // Store the handler for removal later
                    this._wheelHandler = function (event) {
                        // Convert delta as it was in original code
                        var _delta = event.deltaY / 120;
                        var delta = _delta;
                        var g_width = parseInt(getComputedStyle(_this._gallery.container[0]).width);
                        var width = parseInt(getComputedStyle(_this._gallery.indicatorContainer[0]).width);
                        var left = parseInt(getComputedStyle(_this._gallery.indicatorContainer[0]).left);
                        if (delta > 0 && left > g_width / 2) {
                            return;
                        }
                        // Reload next pictures into the gallery by scrolling on thumbnails
                        if (delta < 0 && width + left < g_width) {
                            var nextIndex = _this._gallery.indicatorContainer.find('[title="loading"]')[0];
                            if (nextIndex) {
                                self.expose_onslideend(_this._gallery, nextIndex.dataset.index - 1);
                            }
                            return;
                        }
                        // Move it about 5 indicators
                        var i_width = parseInt(getComputedStyle(_this._gallery.activeIndicator[0]).width);
                        jQuery($indicator_1[0]).css('left', (left - (-delta * i_width * 5)) + 'px');
                        event.preventDefault();
                    };
                    // Native addEventListener for 'wheel'
                    $indicator_1[0].addEventListener('wheel', this._wheelHandler);
                }
            }
        };
        class_1.prototype.expose_onslide = function (index, slide) {
            //todo
            //if (typeof this._super == 'undefined') return;
            // First let parent try
            var nm = this.find_nextmatch(this);
            if (nm) {
                // See if we need to move the indicator
                var indicator = this._gallery.container.find('.indicator');
                var current = jQuery('.active', indicator).position();
                if (current) {
                    var width = parseInt(window.getComputedStyle(this._gallery.container[0]).width);
                    //	indicator.animate({left: (width / 2) - current.left}, 10);
                }
            }
        };
        class_1.prototype.expose_onslideend = function (index, slide) {
            // Check to see if we're in a nextmatch, do magic
            var nm = this.find_nextmatch(this);
            if (nm && !nm.update_in_progress) {
                // Check to see if we're near the end, or maybe some pagination
                // would be good.
                var total_count = nm.controller._grid.getTotalCount();
                // Already at the end, don't bother
                if (index == total_count - 1 || index == 0) {
                    return;
                }
                // Try to determine direction from state of next & previous slides
                var direction = 1;
                for (var i in this._gallery.elements) {
                    // Loading or error
                    if (this._gallery.elements[i] == 1 || this._gallery.elements[i] == 3 || this._gallery.list[i].loading) {
                        direction = i >= index ? 1 : -1;
                        break;
                    }
                }
                if (!this._gallery.list[index + direction] || this._gallery.list[index + direction].loading ||
                    total_count > this._gallery.getNumber() && index + et2_dataview_controller_1.ET2_DATAVIEW_STEPSIZE > this._gallery.getNumber()) {
                    // This will get the next batch of rows
                    var start = Math.max(0, direction > 0 ? index : index - et2_dataview_controller_1.ET2_DATAVIEW_STEPSIZE);
                    var end = Math.min(total_count - 1, start + et2_dataview_controller_1.ET2_DATAVIEW_STEPSIZE);
                    nm.controller._gridCallback(start, end);
                    var images = [];
                    this.read_from_nextmatch(nm, images, start);
                    // Gallery always adds to the end, causing problems with pagination
                    for (var i in images) {
                        this.set_slide(parseInt(i), images[i]);
                    }
                }
            }
        };
        class_1.prototype.expose_onslidecomplete = function () {
            var _this = this;
            var indicators = this._gallery.container.find('ol.indicator')[0].querySelectorAll('li');
            indicators.forEach(function (indicator) {
                if (indicator.style.backgroundImage && indicator.style.backgroundImage !== 'none') {
                    var img = indicator.ownerDocument.createElement('img');
                    img.src = indicator.style.backgroundImage.replace(_this.URL_REGEXP, '$1');
                    indicator.appendChild(img);
                    indicator.style.backgroundImage = 'none';
                }
            });
        };
        class_1.prototype.expose_onclose = function () {
            // Check to see if we're in a nextmatch, remove magic
            var nm = this.find_nextmatch(this);
            // Unregister the wheel handler to prevent leaks
            var $indicator = this._gallery.container.find('.indicator');
            if (this._wheelHandler) {
                $indicator[0].removeEventListener('wheel', this._wheelHandler);
                this._wheelHandler = null;
            }
            // redefine essential removeClass method in case the active element has no longer contains it.
            if (!this._gallery.activeIndicator.removeClass) {
                this._gallery.activeIndicator.removeClass = blueimp.helper.prototype.removeClass;
            }
            if (nm && !this._is_target_indepth(nm)) {
                // Remove scrolling from thumbnails
                $indicator
                    .removeClass('paginating')
                    .off('swipe');
                // Remove applied mime filter
                nm.applyFilters({ col_filter: { mime: '' } });
            }
        };
        class_1.prototype.expose_onclosed = function () { };
        class_1.prototype.handleDownload = function (e) {
            var _a, _b, _c;
            var gallery = document.body.querySelector("#blueimp-gallery").gallery;
            var index = gallery.getIndex();
            var data = (_a = gallery.list[index]) !== null && _a !== void 0 ? _a : {};
            this.getInstanceManager().download((_c = (_b = data.download_href) !== null && _b !== void 0 ? _b : data.download_url) !== null && _c !== void 0 ? _c : data.href);
        };
        return class_1;
    }(superclass));
}
exports.ExposeMixin = ExposeMixin;
var templateObject_1, templateObject_2;
