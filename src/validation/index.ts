import assert, { AssertionError } from "assert";

export const isObject = (obj: unknown) =>
  obj !== null && typeof obj === "object";

export const isPromise = (obj: unknown) =>
  isObject(obj) && typeof (obj as Promise<unknown>)?.then === "function";

export const isEmptyObject = (obj: unknown) =>
  isObject(obj) && !Object.keys(obj).length;
export const assertObject = (
  obj: unknown,
  functionName: string,
  message: string,
) =>
  assert.equal(
    isObject(obj),
    true,
    new AssertionError({
      message: `ERROR - [${functionName}] - ${message}`,
      actual: obj,
    }),
  );

export const assertNonEmptyObject = (
  obj: unknown,
  functionName: string,
  message: string,
) =>
  assert.equal(
    !isEmptyObject(obj),
    true,
    new AssertionError({
      message: `ERROR - [${functionName}] - ${message}`,
      actual: obj,
    }),
  );
