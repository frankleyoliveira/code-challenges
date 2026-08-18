// 271. Encode and Decode Strings
// https://leetcode.com/problems/encode-and-decode-strings/ (premium)
// https://neetcode.io/problems/string-encode-and-decode/question

class Solution {
  encode(strs: string[]): string {
    let encoded = ''

    for (const str of strs) {
      encoded += str.length + '#' + str
    }

    return encoded
  }

  decode(str: string): string[] {
    const decoded: string[] = []
    let i = 0

    while (i < str.length) {
      let len = ''

      while (str[i] !== '#') {
        len += str[i]
        i++
      }

      i++
      decoded.push(str.slice(i, i + +len))

      i += +len
    }

    return decoded
  }
}

const s = new Solution()
console.log(s.encode(['abc', 'abcd'])) // 3#abc4#abcd
console.log(s.decode('3#abc4#abcd')) // ['abc', 'abcd']

export { }
