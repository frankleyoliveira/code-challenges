// 492. Construct the Rectangle
// https://leetcode.com/problems/construct-the-rectangle/description

function constructRectangle(area: number): number[] {
  let w = Math.floor(Math.sqrt(area))

  while (w > 0) {
    if (area % w === 0) {
      return [area / w, w]
    }
    w--
  }

  return [1, 1]
}

console.log(constructRectangle(4)) // [2, 2]
console.log(constructRectangle(37)) // [37, 1]
console.log(constructRectangle(122122)) // [427, 286]

export { }
