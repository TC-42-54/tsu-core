export const toBoolean = (value: unknown) => {
  return value === 'true' || value === true || value === 1 || value === '1';
};