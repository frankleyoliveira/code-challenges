// 49. Group Anagrams
// https://leetcode.com/problems/group-anagrams/description/

function groupAnagrams(strs: string[]): string[][] {
  const result: string[][] = []
  const groupsMap = new Map<string, number>()

  for (let i = 0; i < strs.length; i++) {
    const sorted = strs[i].split('').sort().join('')
    const idx = groupsMap.get(sorted)
    if (idx !== undefined) {
      result[idx].push(strs[i])
    } else {
      groupsMap.set(sorted, result.length)
      result.push([strs[i]])
    }
  }

  return result
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])) // [["bat"],["nat","tan"],["ate","eat","tea"]]

export { }
