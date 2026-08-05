// 39. Combination Sum
// https://leetcode.com/problems/combination-sum/description/

function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = []

  const dfs = (i: number, cur: number[], total: number) => {
    if (total === target) {
      result.push([...cur])
      return
    }

    if (i >= candidates.length || total > target) {
      return
    }

    cur.push(candidates[i])
    dfs(i, cur, total + candidates[i])

    cur.pop()
    dfs(i + 1, cur, total)
  }

  dfs(0, [], 0)
  return result
}

console.log(combinationSum([2, 3, 6, 7], 7)) // [[2,2,3],[7]]
console.log(combinationSum([2, 3, 5], 8)) // [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([2], 1)) // []

export { }
