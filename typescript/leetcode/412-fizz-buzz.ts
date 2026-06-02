// 412. Fizz Buzz
// https://leetcode.com/problems/fizz-buzz/description

function fizzBuzz(n: number): string[] {
  const answer: string[] = []

  for (let i = 1; i <= n; i++) {
    let val = ''

    if (i % 3 === 0) {
      val += 'Fizz'
    }
    if (i % 5 === 0) {
      val += 'Buzz'
    } else if (!val) {
      val = i.toString()
    }

    answer.push(val)
  }

  return answer
}

console.log(fizzBuzz(3)) // ["1","2","Fizz"]
console.log(fizzBuzz(5)) // ["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(15)) // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

export { }
