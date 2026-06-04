// 434. Number of Segments in a String
// https://leetcode.com/problems/number-of-segments-in-a-string/description

function countSegments(s: string): number {
  // let count = 0
  // const segments = s.trim().split(' ')
  // for (let i = 0; i < segments.length; i++) {
  //   if (segments[i].trim()) {
  //     count++
  //   }
  // }
  // return count

  // Solution using regex
  return s.match(/\S+/g)?.length ?? 0
  // \S = any non-whitespace character
  // + = one or more
  // /\S+/g finds all contiguous runs of non-whitespace characters
  // match() returns an array of matches or null
}

console.log(countSegments('Hello, my name is John')) // 5
console.log(countSegments('Hello')) // 1

export { }
