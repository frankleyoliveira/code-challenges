// 208. Implement Trie (Prefix Tree)
// https://leetcode.com/problems/implement-trie-prefix-tree/description/ink

class TrieNode {
  children: Record<string, TrieNode>;
  endOfWord: boolean;

  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  private root = new TrieNode()

  insert(word: string): void {
    let cur = this.root

    for (const char of word) {
      if (!cur.children[char]) {
        cur.children[char] = new TrieNode()
      }
      cur = cur.children[char]
    }

    cur.endOfWord = true
  }

  search(word: string): boolean {
    let cur = this.root

    for (const char of word) {
      if (!cur.children[char]) {
        return false
      }
      cur = cur.children[char]
    }

    return cur.endOfWord
  }

  startsWith(prefix: string): boolean {
    let cur = this.root

    for (const char of prefix) {
      if (!cur.children[char]) {
        return false
      }
      cur = cur.children[char]
    }

    return true
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
