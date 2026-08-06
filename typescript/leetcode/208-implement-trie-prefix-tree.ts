// 208. Implement Trie (Prefix Tree)
// https://leetcode.com/problems/implement-trie-prefix-tree/description/ink

class Trie {
  private words: string[] = []

  insert(word: string): void {
    this.words.push(word)
  }

  search(word: string): boolean {
    return this.words.includes(word)
  }

  startsWith(prefix: string): boolean {
    return this.words.some(word => word.startsWith(prefix))
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

export { }
