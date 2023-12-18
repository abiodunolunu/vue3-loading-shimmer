export function hexToRgb(hexCode: string) {
  hexCode = hexCode.split("#")[1];

  if (hexCode.length === 3) {
    hexCode = hexCode
      .split("")
      .map((v) => `${v}${v}`)
      .join("");
  }

  const _r = hexCode.slice(0, 2);
  const _g = hexCode.slice(2, 4);
  const _b = hexCode.slice(4, 6);

  const r = parseInt(_r, 16);
  const g = parseInt(_g, 16);
  const b = parseInt(_b, 16);

  return `${r},${g},${b}`;
}
