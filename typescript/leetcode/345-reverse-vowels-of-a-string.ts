// 345. Reverse Vowels of a String
// https://leetcode.com/problems/reverse-vowels-of-a-string/description

function reverseVowels(s: string): string {
  // const vIdx: number[] = []
  // const result = s.split('')

  // for (let i = 0; i < result.length; i++) {
  //   if (/[aeiou]/i.test(result[i])) {
  //     vIdx.push(i)
  //   }
  // }

  // let l = 0
  // let r = vIdx.length - 1
  // while (l < r) {
  //   [result[vIdx[l]], result[vIdx[r]]] = [result[vIdx[r]], result[vIdx[l]]]
  //   l++
  //   r--
  // }

  // return result.join('')

  // version 2
  const vowels: string[] = []
  const vowelsIdx: number[] = []
  const result: string[] = []

  for (let i = 0; i < s.length; i++) {
    if (/[aeiou]/i.test(s[i])) {
      vowels.push(s[i])
      vowelsIdx.push(i)
    }
    result.push(s[i])
  }

  for (let i = 0; i < vowelsIdx.length; i++) {
    result[vowelsIdx[i]] = vowels.pop()!
  }

  return result.join('')
}

console.log(reverseVowels('IceCreAm')) // AceCreIm
console.log(reverseVowels('leetcode')) // leotcede

export { }
