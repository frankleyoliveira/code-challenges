// 405. Convert a Number to Hexadecimal
// https://leetcode.com/problems/convert-a-number-to-hexadecimal/description

function toHex(num: number): string {
  const digits = '0123456789abcdef';
  let result = '';
  let n = num;

  do {
    const nibble = n & 15;
    result = digits[nibble] + result;
    n = n >>> 4;
  } while (n > 0);

  return result;
}

console.log(toHex(26)) // 1a
console.log(toHex(0)) // 0
console.log(toHex(-1)) // ffffffff

export { }
