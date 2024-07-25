export function insertElement(
  str: string,
  values: { [key: string]: any },
): any[] {
  const keys = Object.keys(values);
  const vals = Object.values(values);
  return str.split(/({\w+})/).map((part) => {
    if (keys.includes(part.replace(/{|}/g, ""))) {
      return vals[keys.indexOf(part.replace(/{|}/g, ""))];
    }
    return part;
  });
}
