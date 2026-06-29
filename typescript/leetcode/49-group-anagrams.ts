// 49. Group Anagrams
// https://leetcode.com/problems/group-anagrams/description/

function groupAnagrams(strs: string[]): string[][] {
  const groups = new Map<string, string[]>()

  for (let i = 0; i < strs.length; i++) {
    const sorted = strs[i].split('').sort().join('')

    if (groups.has(sorted)) {
      groups.get(sorted)!.push(strs[i])
    } else {
      groups.set(sorted, [strs[i]])
    }
  }

  return [...groups.values()]
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])) // [["bat"],["nat","tan"],["ate","eat","tea"]]

export { }
