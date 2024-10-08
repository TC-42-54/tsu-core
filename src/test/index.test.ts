import { AssertionError } from 'assert';
import { describe, expect, it } from 'vitest';
import { assertFunction, assertNonEmptyVariable, isEmpty } from '..';

describe('isEmpty', () => {
  it('Should return true if the parameter is empty', () => {
    expect(isEmpty(undefined)).toStrictEqual(true);
    expect(isEmpty(null)).toStrictEqual(true);
    expect(isEmpty({})).toStrictEqual(true);
    expect(isEmpty([])).toStrictEqual(true);
    expect(isEmpty('test non object parameter')).toStrictEqual(false);
  });
});

describe('assertNonEmptyVariable', () => {
  it('Should not throw an error if the parameter is an object', () => {
    expect(() =>
      assertNonEmptyVariable(
        { test: 'test' },
        'Test Empty Variable',
        null as unknown as string,
      ),
    ).not.toThrow();

    expect(() =>
      assertNonEmptyVariable(
        '',
        'Test Non Empty Variable',
        null as unknown as string,
      ),
    ).toThrow(AssertionError);
  });
});

describe('assertFunction', () => {
  it('Should not throw an error if the parameter is a function', () => {
    expect(() =>
      assertFunction(() => 1, 'Test Function', null as unknown as string),
    ).not.toThrow();

    expect(() =>
      assertFunction('', 'Test Non Function', null as unknown as string),
    ).toThrow(AssertionError);
  });
});
