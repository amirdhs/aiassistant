"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanSelectOptions = exports.find_select_options = void 0;
/**
 * Find the select options for a widget, out of the many places they could be.
 *
 * This will give valid, correct array of SelectOptions.  It will check:
 * - sel_options ArrayMgr, taking into account namespaces and checking the root
 * - content ArrayMgr, looking for "options-<id>"
 * - passed options, used by specific select types
 *
 * @param {Et2Widget} widget to check for.  Should be some sort of select widget.
 * @param {object} attr_options Select options in attributes array
 * @param {SelectOption[]} options Known options, passed in if you've already got some.  Cached type options, for example.
 * @return {SelectOption[]} Select options, or empty array
 */
function find_select_options(widget, attr_options, options) {
    if (options === void 0) { options = []; }
    var name_parts = widget.id.replace(/&#x5B;/g, '[').replace(/]|&#x5D;/g, '').split('[');
    var content_options = [];
    // Try to find the options inside the "sel-options"
    if (widget.getArrayMgr("sel_options")) {
        // Try first according to ID
        var options_1 = widget.getArrayMgr("sel_options").getEntry(widget.id);
        // ID can get set to an array with 0 => ' ' - not useful
        if (options_1 && (options_1.length == 1 && typeof options_1[0] == 'string' && options_1[0].trim() == '' ||
            // eg. autorepeated id "cat[3]" would pick array element 3 from cat
            typeof options_1.value != 'undefined' && typeof options_1.label != 'undefined' && widget.id.match(/\[\d+]$/))) {
            content_options = null;
        }
        else {
            content_options = options_1;
        }
        // We could wind up too far inside options if label,title are defined
        if (options_1 && !isNaN(name_parts[name_parts.length - 1]) && options_1.label && options_1.title) {
            name_parts.pop();
            content_options = widget.getArrayMgr("sel_options").getEntry(name_parts.join('['));
            delete content_options["$row"];
        }
        // Select options tend to be defined once, at the top level, so try that
        if (!content_options || content_options.length == 0) {
            content_options = widget.getArrayMgr("sel_options").getRoot().getEntry(name_parts[name_parts.length - 1]);
        }
        // Try in correct namespace (inside a grid or something)
        if (!content_options || content_options.length == 0) {
            content_options = widget.getArrayMgr("sel_options").getEntry(name_parts[name_parts.length - 1]);
        }
        // Try name like widget[$row]
        if (name_parts.length > 1 && (!content_options || content_options.length == 0)) {
            var pop_that = JSON.parse(JSON.stringify(name_parts));
            while (pop_that.length > 1 && (!content_options || content_options.length == 0)) {
                var last = pop_that.pop();
                content_options = widget.getArrayMgr('sel_options').getEntry(pop_that.join('['));
                // Double check, might have found a normal parent namespace ( eg subgrid in subgrid[selectbox] )
                // with an empty entry for the selectbox.  If there were valid options here,
                // we would have found them already, and keeping this would result in the ID as an option
                if (content_options && !Array.isArray(content_options) && typeof content_options[last] != 'undefined' && content_options[last]) {
                    content_options = content_options[last];
                }
                else if (content_options) {
                    // Check for real values
                    for (var key in content_options) {
                        if (!(isNaN(key) && typeof content_options[key] === 'string' ||
                            !isNaN(key) && typeof content_options[key] === 'object' && typeof content_options[key]['value'] !== 'undefined')) {
                            // Found a parent of some other namespace
                            content_options = undefined;
                            break;
                        }
                    }
                }
            }
        }
        // Maybe in a row, and options got stuck in ${row} instead of top level
        // not sure this code is still needed, as server-side no longer creates ${row} or {$row} for select-options
        var row_stuck = ['${row}', '{$row}'];
        for (var i = 0; i < row_stuck.length && (!content_options || content_options.length == 0); i++) {
            // perspectiveData.row in nm, data["${row}"] in an auto-repeat grid
            if (widget.getArrayMgr("sel_options").perspectiveData.row || widget.getArrayMgr("sel_options").data[row_stuck[i]]) {
                var row_id = widget.id.replace(/[0-9]+/, row_stuck[i]);
                content_options = widget.getArrayMgr("sel_options").getEntry(row_id);
                if (!content_options || content_options.length == 0) {
                    content_options = widget.getArrayMgr("sel_options").getEntry(row_stuck[i] + '[' + widget.id + ']');
                }
            }
        }
        if (attr_options && Object.keys(attr_options).length > 0 && content_options) {
            // Clean, merge and filter out duplicates
            content_options = __spreadArrays(new Map(__spreadArrays(cleanSelectOptions(options_1), cleanSelectOptions(content_options || [])).map(function (item) {
                return [item.value, item];
            })).values());
        }
        if (content_options) {
            content_options = cleanSelectOptions(content_options);
        }
    }
    // Check whether the options entry was found, if not read it from the
    // content array.
    if (content_options && content_options.length > 0 && widget.getArrayMgr('content') != null) {
        if (content_options) {
            attr_options = content_options;
        }
        var content_mgr = widget.getArrayMgr('content');
        if (content_mgr) {
            // If that didn't work, check according to ID
            if (!content_options) {
                content_options = content_mgr.getEntry("options-" + widget.id);
            }
            // Again, try last name part at top level
            if (!content_options) {
                content_options = content_mgr.getRoot().getEntry("options-" + name_parts[name_parts.length - 1]);
            }
        }
    }
    // Default to an empty object
    if (content_options == null) {
        content_options = [];
    }
    // Include passed options, preferring any content options
    if (options.length || Object.keys(options).length > 0) {
        content_options = cleanSelectOptions(content_options);
        for (var i in content_options) {
            var value = typeof content_options[i] == 'object' && typeof content_options[i].value !== 'undefined' ? content_options[i].value : i;
            var added = false;
            // Override any existing
            for (var j in options) {
                if ('' + options[j].value === '' + value) {
                    added = true;
                    options[j] = content_options[i];
                    break;
                }
            }
            if (!added) {
                var insert = typeof content_options[i] == "object" && content_options[i].value === value && content_options[i].label ?
                    content_options[i] :
                    {
                        value: value,
                        label: content_options[i]
                    };
                options.splice(parseInt(i), 0, insert);
            }
        }
        content_options = options;
    }
    // Clean up
    if (!Array.isArray(content_options) && typeof content_options === "object" && Object.values(content_options).length > 0) {
        var fixed_options = [];
        for (var key in content_options) {
            var option = { value: key, label: content_options[key] };
            // This could be an option group - not sure we have any
            if (typeof option.label !== "string" && option.label) {
                // @ts-ignore Yes, option.label.label is not supposed to exist but that's what we're checking
                if (typeof option.label.label !== "undefined") {
                    option = Object.assign(option, option.label);
                }
            }
            fixed_options.push(option);
        }
        content_options = fixed_options;
    }
    return content_options;
}
exports.find_select_options = find_select_options;
/**
 * Clean up things that might be select options and get them to what we need to make
 * them consistent for widget use.
 *
 * Options might be just a list of labels, or an object of value => label pairs, etc.
 *
 * @param {SelectOption[] | string[] | object} options
 */
function cleanSelectOptions(options) {
    var _a;
    var fixed_options = [];
    if (!Array.isArray(options)) {
        for (var key in options) {
            var option = options[key];
            if (typeof option === 'number') {
                option = "" + option;
            }
            if (typeof option === 'string') {
                option = { label: option };
            }
            else if (option === null) {
                option = { label: key + "" };
            }
            option.value = "" + ((_a = option.value) !== null && _a !== void 0 ? _a : key.trim()); // link_search prefixes keys with one space
            fixed_options.push(option);
        }
    }
    else {
        // make sure value is a string, and label not an object with sub-options
        options.forEach(function (option) {
            // old taglist used id, instead of value
            if (typeof option.value === 'undefined' && typeof option.id !== 'undefined') {
                option.value = option.id;
                delete option.id;
            }
            if (typeof option.value === 'number') {
                option.value = option.value.toString();
            }
            if (option.label && typeof option.label !== 'string') {
                fixed_options.push.apply(fixed_options, cleanSelectOptions(option.label));
            }
            else if (fixed_options.findIndex(function (o) { return o.value == option.value; }) == -1) {
                fixed_options.push(option);
            }
        });
    }
    return fixed_options;
}
exports.cleanSelectOptions = cleanSelectOptions;
