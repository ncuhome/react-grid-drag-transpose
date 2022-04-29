export function swap<T>(array: Array<T>, a: number, b: number) {
  const nis = array.slice();
  [nis[a], nis[b]] = [nis[b], nis[a]]
  return nis
}
