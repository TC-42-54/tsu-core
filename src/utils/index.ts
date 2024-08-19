export const parseJSON = (value: string, keyName?: string) => {
  try {
    return JSON.parse(value);
  } catch (e) {
    console.error(`JSON.parse failed ${!!keyName} : ${e.message}`);
  }

  return null;
};
export const stringifyJSON = (obj: Record<string, unknown>) => {
  try {
    return JSON.stringify(obj);
  } catch (e) {
    console.error(`JSON.stringify failed: ${e.message}`);
  }

  return null;
};

export function toQueryStringUrl(obj: unknown): string {
  const params = new URLSearchParams(obj as unknown as Record<string, string>);

  [...params.entries()].forEach(([key, value]) => {
    if (value === undefined || value === "undefined") {
      params.delete(key);
    }
  });

  return params.toString();
}
