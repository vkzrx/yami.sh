export function getCommonPrefix(a: string, b: string): string {
  let result = "";
  const length = Math.min(a.length, b.length);
  for (let i = 0; i < length; i++) {
    if (a[i] !== b[i]) {
      break;
    }
    result += a[i];
  }
  return result;
}
