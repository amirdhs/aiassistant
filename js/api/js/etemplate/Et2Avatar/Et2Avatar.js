"use strict";
/**
 * EGroupware eTemplate2 - Avatar widget
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
 * @link https://www.egroupware.org
 * @author Hadi Nategh
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Et2Avatar = void 0;
var lit_1 = require("lit");
var property_js_1 = require("lit/decorators/property.js");
var shoelace_1 = require("@shoelace-style/shoelace");
var egw_global_1 = require("../../jsapi/egw_global");
var shoelace_2 = require("../Styles/shoelace");
var Et2Dialog_1 = require("../Et2Dialog/Et2Dialog");
require("../../../../vendor/bower-asset/cropper/dist/cropper.min.js");
var cropperStyles_1 = require("./cropperStyles");
var Et2Widget_1 = require("../Et2Widget/Et2Widget");
var CachedQueueMixin_1 = require("../Et2Widget/CachedQueueMixin");
/**
 * Avatars are used to represent a person or profile.
 *
 * @slot icon The default icon to use when no image or initials are provided.
 *
 * @event sl-error	The image could not be loaded. This may because of an invalid URL, a temporary network condition, or some unknown cause.
 *
 * @csspart base	The component’s base wrapper.
 * @csspart icon	The container that wraps the avatar’s icon.
 * @csspart initials	The container that wraps the avatar’s initials.
 * @csspart image	The avatar image. Only shown when the image attribute is set, or when contactId has an associated avatar image
 */
var Et2Avatar = /** @class */ (function (_super) {
    __extends(Et2Avatar, _super);
    function Et2Avatar() {
        var _this = _super.call(this) || this;
        /**
         * The label of the image
         * Actually not used as label, but we put it as title
         */
        _this.label = "";
        /**
         * The shape of the avatar
         * circle | square | rounded
         */
        _this.shape = "rounded";
        /**
         * Make avatar widget editable to be able to crop profile picture or upload a new photo
         */
        _this.editable = false;
        _this.image = "";
        _this.crop = false;
        _this.image = _this.image || _this.getAttribute("src");
        return _this;
    }
    Object.defineProperty(Et2Avatar, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [
                shoelace_2.default,
                cropperStyles_1.cropperStyles,
                lit_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t:host::part(edit) {\n\t\t\t\t\tvisibility: hidden;\n\t\t\t\t\tborder-radius: 50%;\n\t\t\t\t\tmargin: -4px;\n\t\t\t\t\tz-index: 1;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t:host(:hover)::part(edit) {\n\t\t\t\t\tvisibility: visible;\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\t:host::part(edit) {\n\t\t\t\t\tvisibility: hidden;\n\t\t\t\t\tborder-radius: 50%;\n\t\t\t\t\tmargin: -4px;\n\t\t\t\t\tz-index: 1;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t:host(:hover)::part(edit) {\n\t\t\t\t\tvisibility: visible;\n\t\t\t\t}\n\t\t\t"])))
            ]);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Handle changes that have to happen based on changes to properties
     *
     */
    Et2Avatar.prototype.updated = function (changedProperties) {
        _super.prototype.updated.call(this, changedProperties);
        if (changedProperties.has("crop")) {
            if (this.crop && !this.readonly && this._imageNode) {
                jQuery(this._imageNode).cropper({ aspectRatio: 1 / 1, autoCropArea: 1 });
            }
        }
        if (changedProperties.has("size")) {
            if (this.size && this.size.match(/\d/)) {
                this.style.setProperty('--size', this.size);
            }
            else {
                this.style.removeProperty("--size");
            }
        }
    };
    Et2Avatar.prototype.firstUpdated = function () {
        var self = this;
        if (this.contactId && this.editable) {
            egw_global_1.egw(window).json('addressbook.addressbook_ui.ajax_noPhotoExists', [this.contactId], function (noPhotoExists) {
                if (noPhotoExists)
                    self.image = "";
                self._buildEditableLayer(noPhotoExists);
            }).sendRequest(true);
        }
    };
    Object.defineProperty(Et2Avatar.prototype, "contactId", {
        get: function () {
            return this._contactId;
        },
        /**
         * Function to set contactId
         * contactId could be in one of these formats:
         *		'number', will be considered as contact_id
         *		'contact:number', similar to above
         *		'account:number', will be considered as account id
         *		'email:<email>', will be considered as email address
         * @example: contactId = "account:4"
         *
         * @param {string} _contactId contact id could be as above-mentioned formats
         */
        set: function (_contactId) {
            var _this = this;
            var oldContactId = this._contactId;
            this._contactId = _contactId;
            if (!_contactId || this.image) {
                this.requestUpdate("contactId", oldContactId);
                return;
            }
            var params = { no_gen: true };
            var id = 'contact_id';
            var parsedId = "";
            if (!_contactId) {
                parsedId = null;
            }
            else if (_contactId.substr(0, 8) === 'account:') {
                id = 'account';
                parsedId = _contactId.substr(8);
            }
            else if (_contactId.substr(0, 6) === 'email:') {
                id = 'email';
                var matches = Et2Avatar.RFC822EMAIL.exec(_contactId);
                parsedId = matches ? matches[1] : _contactId.substr(6);
            }
            else {
                id = 'contact_id';
                parsedId = _contactId.replace('contact:', '');
            }
            if (_contactId) {
                if (!parsedId) {
                    this.image = null;
                }
                // if our image (incl. cache-buster) already includes the correct id, use that one
                else if (!this.image || !this.image.match("(&|\\?)" + id + "=" + encodeURIComponent(parsedId) + "(&|$)")) {
                    /**
                     * To reduce the number of server requests that result in 404 because there is no avatar,
                     * we cacheQueue the request and only set actual image if server reports there is an avatar image.
                     */
                    this.cachedQueue([id + ":" + parsedId]).then(function (hasImage) {
                        if (!hasImage) {
                            _this.image = null;
                            return;
                        }
                        params[id] = parsedId;
                        _this.image = _this.egw().link('/api/avatar.php', params);
                    });
                }
                this.requestUpdate("contactId");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Avatar.prototype, "value", {
        set: function (_value) {
            this.contactId = _value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Avatar.prototype, "src", {
        /**
         * set the image source
         * @deprecated please use image instead
         * @param _value
         */
        set: function (_value) {
            this.image = _value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Avatar.prototype, "_baseNode", {
        get: function () {
            return this.shadowRoot.querySelector("[part='base']");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Et2Avatar.prototype, "_imageNode", {
        get: function () {
            return this.shadowRoot.querySelector("[part='image']");
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Build Editable Mask Layer (EML) in order to show edit/delete actions
     * on top of profile picture.
     * @param {boolean} _noDelete disable delete button in initialization
     */
    Et2Avatar.prototype._buildEditableLayer = function (_noDelete) {
        var self = this;
        this._editBtn = document.createElement('et2-button-icon');
        this._editBtn.setAttribute('image', 'pencil');
        this._editBtn.setAttribute('part', 'edit');
        this._editBtn.noSubmit = true;
        this._delBtn = document.createElement('et2-button-icon');
        this._delBtn.setAttribute('image', 'delete');
        this._delBtn.setAttribute('part', 'edit');
        this._delBtn.noSubmit = true;
        this._baseNode.append(this._editBtn);
        this._baseNode.append(this._delBtn);
        // disable the delete button if no delete is set
        this._delBtn.disabled = _noDelete;
        // bind click handler to edit button
        this._editBtn.addEventListener('click', this.editButtonClickHandler.bind(this));
        // bind click handler to del button
        this._delBtn.addEventListener('click', this.delButtonClickHandler.bind(this));
    };
    /**
     * click handler to handle click on edit button
     */
    Et2Avatar.prototype.editButtonClickHandler = function () {
        var buttons = [
            { "button_id": 1, label: this.egw().lang('save'), id: 'save', image: 'check', "default": true },
            { "button_id": 0, label: this.egw().lang('cancel'), id: 'cancel', image: 'cancelled' }
        ];
        var value = {
            contactId: this.contactId,
            src: this.image
        };
        this._editDialog(egw_global_1.egw.lang('Edit avatar'), value, buttons, null);
    };
    /**
     * Build edit dialog
     * @param _title
     * @param _value
     * @param _buttons
     * @param _egw_or_appname
     */
    Et2Avatar.prototype._editDialog = function (_title, _value, _buttons, _egw_or_appname) {
        var _this = this;
        var dialog = new Et2Dialog_1.Et2Dialog(this.egw());
        dialog.transformAttributes({
            callback: this.__editDialogCallback.bind(this),
            title: _title || egw_global_1.egw.lang('Input required'),
            buttons: _buttons || Et2Dialog_1.Et2Dialog.BUTTONS_OK_CANCEL,
            value: {
                etemplate_exec_id: this.getInstanceManager().etemplate_exec_id,
                content: _value
            },
            width: "90%",
            height: "450",
            resizable: false,
            position: "top+10",
            template: egw_global_1.egw.webserverUrl + '/api/templates/default/avatar_edit.xet'
        });
        document.body.appendChild(dialog);
        dialog.updateComplete.then(function () {
            dialog.querySelector("#_buttons").addEventListener("click", _this._handleRotate);
        });
        return dialog;
    };
    /**
     * Edit dialog callback function
     * @param _buttons
     * @param _value
     */
    Et2Avatar.prototype.__editDialogCallback = function (_buttons, _value) {
        var widget = document.getElementById('_cropper_image');
        switch (_buttons) {
            case 0:
                return true;
            case 1:
                var canvas = jQuery(widget._imageNode).cropper('getCroppedCanvas');
                this.image = canvas.toDataURL("image/jpeg", 1.0);
                this.requestUpdate('image');
                this.egw().json('addressbook.addressbook_ui.ajax_update_photo', [this.getInstanceManager().etemplate_exec_id, this.image], this.__editAjaxUpdatePhotoCallback.bind(this)).sendRequest();
                break;
            default:
                return false;
        }
    };
    Et2Avatar.prototype._handleRotate = function (event) {
        var widget = document.getElementById('_cropper_image');
        switch (event.target.id) {
            case 'rotate_reset':
                jQuery(widget._imageNode).cropper('reset');
                return false;
            case 'rotate_l':
                jQuery(widget._imageNode).cropper('rotate', -90);
                return false;
            case 'rotate_r':
                jQuery(widget._imageNode).cropper('rotate', 90);
                return false;
        }
    };
    /**
     * Edit ajax update photo response callback
     * @param response
     */
    Et2Avatar.prototype.__editAjaxUpdatePhotoCallback = function (response) {
        if (response) {
            this._delBtn.style.visibility = 'visible';
        }
    };
    /**
     * click handler to handel click on delete button
     */
    Et2Avatar.prototype.delButtonClickHandler = function () {
        //build delete dialog
        Et2Dialog_1.Et2Dialog.show_dialog(this._delBtnDialogCallback.bind(this), egw_global_1.egw.lang('Delete this photo?'), egw_global_1.egw.lang('Delete'), null, Et2Dialog_1.Et2Dialog.BUTTONS_YES_NO);
    };
    /**
     * del dialog callback function
     * @param _btn
     */
    Et2Avatar.prototype._delBtnDialogCallback = function (_btn) {
        if (_btn == Et2Dialog_1.Et2Dialog.YES_BUTTON) {
            this.egw().json('addressbook.addressbook_ui.ajax_update_photo', [this.getInstanceManager().etemplate_exec_id, null], this.__delAjaxUpdatePhotoCallback.bind(this)).sendRequest();
        }
    };
    /**
     * Del ajax update photo response callback
     * @param response
     */
    Et2Avatar.prototype.__delAjaxUpdatePhotoCallback = function (response) {
        if (response) {
            this.image = '';
            this._delBtn.style.visibility = 'none';
            egw_global_1.egw.refresh('Avatar Deleted.', egw_global_1.egw.app_name());
        }
    };
    /**
     * Function runs after upload in avatar dialog is finished and it tries to
     * update image and cropper container.
     * @param {type} e
     */
    Et2Avatar.uploadAvatar_onFinish = function (e) {
        var file = e.detail.file;
        var reader = new FileReader();
        var fileWidget = e.target;
        fileWidget.loading = true;
        reader.onload = function (e) {
            var widget = document.getElementById('_cropper_image');
            widget.image = e.target.result;
            widget.requestUpdate("image");
            // Wait for everything to complete
            widget.getUpdateComplete().then(function () {
                jQuery(widget._imageNode).cropper('replace', e.target.result);
                fileWidget.loading = false;
                fileWidget.requestUpdate("loading", true);
            });
            fileWidget.value = {};
        };
        reader.readAsDataURL(file);
    };
    /**
     *
     */
    Et2Avatar.prototype.getDetachedAttributes = function (_attrs) {
        _attrs.push("contactId", "label", "href", "image", "statustext");
    };
    Et2Avatar.prototype.getDetachedNodes = function () {
        return [this];
    };
    Et2Avatar.prototype.setDetachedAttributes = function (_nodes, _values) {
        for (var attr in _values) {
            this[attr] = _values[attr];
        }
    };
    // Cached Queue Mixin
    Et2Avatar.searchUrl = "EGroupware\\Api\\Etemplate\\Widget\\Avatar::ajax_image_check";
    Et2Avatar.RFC822EMAIL = /<([^<>]+)>$/;
    __decorate([
        property_js_1.property()
    ], Et2Avatar.prototype, "label", void 0);
    __decorate([
        property_js_1.property({ type: String, reflect: true })
    ], Et2Avatar.prototype, "shape", void 0);
    __decorate([
        property_js_1.property({ type: Boolean })
    ], Et2Avatar.prototype, "editable", void 0);
    __decorate([
        property_js_1.property({ type: String, reflect: true })
    ], Et2Avatar.prototype, "image", void 0);
    __decorate([
        property_js_1.property({ type: Boolean })
    ], Et2Avatar.prototype, "crop", void 0);
    __decorate([
        property_js_1.property()
    ], Et2Avatar.prototype, "size", void 0);
    __decorate([
        property_js_1.property({ type: String, noAccessor: true })
    ], Et2Avatar.prototype, "contactId", null);
    return Et2Avatar;
}(CachedQueueMixin_1.CachedQueueMixin(Et2Widget_1.Et2Widget(shoelace_1.SlAvatar))));
exports.Et2Avatar = Et2Avatar;
customElements.define("et2-avatar", Et2Avatar);
// make et2_avatar publicly available as we need to call it from templates
{
    window['et2_avatar'] = Et2Avatar;
    window['Et2Avatar'] = Et2Avatar;
}
var templateObject_1;
