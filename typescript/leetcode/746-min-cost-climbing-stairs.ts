// 746. Min Cost Climbing Stairs
// https://leetcode.com/problems/min-cost-climbing-stairs/description/

function minCostClimbingStairs(cost: number[]): number {
  let prev2 = 0 // dp[i - 2]
  let prev1 = 0 // dp[i - 1]

  for (let i = 2; i <= cost.length; i++) {
    const cur = Math.min(
      prev2 + cost[i - 2],
      prev1 + cost[i - 1]
    )
    prev2 = prev1
    prev1 = cur
  }

  return prev1
}

console.log(minCostClimbingStairs([10, 15, 20])) // 15
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])) // 6
console.log(minCostClimbingStairs([1, 0, 0, 2])) // 0

export { }
