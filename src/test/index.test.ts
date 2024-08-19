import { describe, expect, it } from "vitest";
import {
  isObject,
  assertObject,
  isEmptyObject,
  assertNonEmptyObject,
} from "..";
import { AssertionError } from "assert";

describe("isObject", () => {
  it("Should return true if the parameter is an object", () => {
    expect(isObject({ test: "test" })).toStrictEqual(true);
    expect(isObject({})).toStrictEqual(true);
    expect(isObject([])).toStrictEqual(true);
    expect(isObject("test non object parameter")).toStrictEqual(false);
  });
});

describe("isEmptyObject", () => {
  it("Should return true if the parameter is an object", () => {
    expect(isEmptyObject({ test: "test" })).toStrictEqual(false);
    expect(isEmptyObject({})).toStrictEqual(true);
  });
});

describe("assertObject", () => {
  it("Should not throw an error if the parameter is an object", () => {
    expect(() =>
      assertObject({}, "Test Empty Assert Object", null as unknown as string),
    ).not.toThrow();

    expect(() =>
      assertObject(
        { test: "test" },
        "Test Assert Object",
        null as unknown as string,
      ),
    ).not.toThrow();
    expect(() =>
      assertObject("", "Test Assert Object", null as unknown as string),
    ).toThrow(AssertionError);
  });
});

describe("assertNonEmptyObject", () => {
  it("Should not throw an error if the parameter is a non empty object", () => {
    expect(() =>
      assertNonEmptyObject(
        {},
        "Test Assert Non Empty Object",
        null as unknown as string,
      ),
    ).toThrow(AssertionError);

    expect(() =>
      assertNonEmptyObject(
        { test: "test" },
        "Test Assert Non Empty Object",
        null as unknown as string,
      ),
    ).not.toThrow();
  });
});
