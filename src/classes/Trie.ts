class TrieNode {
    public children: { [key: string]: TrieNode } = {};
    public isEndOfWord = false;
  }
  
  export class Trie {
    private root: TrieNode = new TrieNode();
  
    insert(word: string): void {
      let node = this.root;
      for (let char of word) {
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.isEndOfWord = true;
    }
  
    search(word: string): boolean {
      let node = this.root;
      for (let char of word) {
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return node.isEndOfWord;
    }
  }
  