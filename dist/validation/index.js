"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertFunction = exports.assertNonEmptyVariable = exports.isEmpty = exports.isFunction = void 0;
const tslib_1 = require("tslib");
const array_1 = require("@tsupp/array");
const number_1 = require("@tsupp/number");
const object_1 = require("@tsupp/object");
const string_1 = require("@tsupp/string");
const assert_1 = tslib_1.__importStar(require("assert"));
const isFunction = (variable) => typeof variable === 'function';
exports.isFunction = isFunction;
const isEmpty = (variable) => {
    if (variable === null ||
        variable === undefined ||
        (typeof variable === 'number' && isNaN(variable))) {
        return true;
    }
    else if ((0, array_1.isArray)(variable) || (0, string_1.isString)(variable)) {
        return !variable?.length;
    }
    else if ((0, object_1.isPromise)(variable)) {
        return false;
    }
    else if ((0, object_1.isObject)(variable)) {
        return ((0, object_1.isEmptyObject)(variable) ||
            !Object.keys(variable).some((key) => !(0, exports.isEmpty)(variable[key])));
    }
    else if ((0, number_1.isNumber)(variable) || (0, exports.isFunction)(variable)) {
        return false;
    }
};
exports.isEmpty = isEmpty;
const assertNonEmptyVariable = (variable, functionName, message) => assert_1.default.equal(!(0, exports.isEmpty)(variable), true, new assert_1.AssertionError({
    message: `ERROR - [${functionName}] - ${message}`,
    actual: variable,
}));
exports.assertNonEmptyVariable = assertNonEmptyVariable;
const assertFunction = (variable, functionName, message) => assert_1.default.equal((0, exports.isFunction)(variable), true, new assert_1.AssertionError({
    message: `ERROR - [${functionName}] - ${message}`,
    actual: (0, exports.isFunction)(variable),
    expected: true,
}));
exports.assertFunction = assertFunction;
//# sourceMappingURL=index.js.map