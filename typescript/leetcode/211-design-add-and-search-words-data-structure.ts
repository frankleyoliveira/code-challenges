// 211. Design Add and Search Words Data Structure
// https://leetcode.com/problems/design-add-and-search-words-data-structure/description/

class TrieNode {
  children: Record<string, TrieNode>
  endOfWord: boolean

  constructor() {
    this.children = {}
    this.endOfWord = false
  }
}

class WordDictionary {
  private root = new TrieNode()

  addWord(word: string): void {
    let cur = this.root
    for (let i = 0; i < word.length; i++) {
      const c = word[i]
      if (!cur.children[c]) {
        cur.children[c] = new TrieNode()
      }
      cur = cur.children[c]
    }
    cur.endOfWord = true
  }

  search(word: string): boolean {
    const dfs = (j: number, root: TrieNode) => {
      let cur = root
      for (let i = j; i < word.length; i++) {
        const c = word[i]
        if (c === '.') {
          for (const child of Object.values(cur.children)) {
            if (dfs(i + 1, child)) {
              return true
            }
          }
          return false
        }

        if (!cur.children[c]) {
          return false
        }

        cur = cur.children[c]
      }

      return cur.endOfWord
    }

    return dfs(0, this.root)
  }
}

const wordDictionary = new WordDictionary();
wordDictionary.addWord("bad")
wordDictionary.addWord("dad")
wordDictionary.addWord("mad")
console.log(wordDictionary.search("pad")) // false
console.log(wordDictionary.search("bad")) // true
console.log(wordDictionary.search(".ad")) // true
console.log(wordDictionary.search("b..")) // true

export { }
