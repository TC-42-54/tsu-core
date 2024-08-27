import { isArray } from '@tsupp/array';
import { isNumber } from '@tsupp/number';
import { isEmptyObject, isObject, isPromise } from '@tsupp/object';
import { isString } from '@tsupp/string';
import assert, { AssertionError } from 'assert';

export const isFunction = (variable: unknown): boolean =>
  typeof variable === 'function';

export const isEmpty = (variable: unknown) => {
  if (
    variable === null ||
    variable === undefined ||
    (typeof variable === 'number' && isNaN(variable))
  ) {
    return true;
  } else if (isArray(variable) || isString(variable)) {
    return !variable?.length;
  } else if (isPromise(variable)) {
    return false;
  } else if (isObject(variable)) {
    return (
      isEmptyObject(variable) ||
      !Object.keys(variable).some((key) => !isEmpty(variable[key]))
    );
  } else if (isNumber(variable) || isFunction(variable)) {
    return false;
  }
};

export const assertNonEmptyVariable = (
  variable: unknown,
  functionName: string,
  message: string,
) =>
  assert.equal(
    !isEmpty(variable),
    true,
    new AssertionError({
      message: `ERROR - [${functionName}] - ${message}`,
      actual: variable,
    }),
  );

export const assertFunction = (
  variable: unknown,
  functionName: string,
  message: string,
) =>
  assert.equal(
    isFunction(variable),
    true,
    new AssertionError({
      message: `ERROR - [${functionName}] - ${message}`,
      actual: isFunction(variable),
      expected: true,
    }),
  );