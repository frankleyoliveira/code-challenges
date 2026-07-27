// 875. Koko Eating Bananas
// https://leetcode.com/problems/koko-eating-bananas/description/

function minEatingSpeed(piles: number[], h: number): number {
  let l = 1
  let r = Math.max(...piles)
  let k = 0

  while (l <= r) {
    const mid = Math.floor((l + r) / 2)

    let time = 0
    for (let i = 0; i < piles.length; i++) {
      time += Math.ceil(piles[i] / mid)
    }

    if (time > h) {
      l = mid + 1
    } else {
      r = mid - 1
      k = mid
    }
  }

  return k
}

console.log(minEatingSpeed([3, 6, 7, 11], 8)) // 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)) // 30
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)) // 23

export { }
