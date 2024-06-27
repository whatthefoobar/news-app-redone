export function stringToNumber(str: string | undefined) {
  if (str !== undefined) {
    let num = Number(str);
    if (!isNaN(num)) {
      return num;
    }
  }
}
