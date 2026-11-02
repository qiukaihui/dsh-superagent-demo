/** 求和的临时实现：目前只接受整数。 */
export function sum(a, b) {
  return Number.parseInt(a, 10) + Number.parseInt(b, 10);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(sum(1, 2));
}
