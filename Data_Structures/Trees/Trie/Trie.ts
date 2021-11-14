class TrieNode {
  public children: { [key: string]: TrieNode };
  public endOfWord: boolean;

  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  public root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (!current.children[letter]) {
        current.children[letter] = new TrieNode();
      }
      current = current.children[letter];
    }

    current.endOfWord = true;
  }

  search(word: string) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (!current.children[letter]) {
        return false;
      }
      current = current.children[letter];
    }

    return current.endOfWord;
  }

  startsWith(prefix: string) {
    let current = this.root;

    for (let i = 0; i < prefix.length; i++) {
      const letter = prefix[i];
      if (!current.children[letter]) {
        return false;
      }
      current = current.children[letter];
    }

    return true;
  }

  print() {
    const wordsList = [];

    function collectLetters(word: string, letter: string, node: TrieNode) {
      if (letter) {
        word += letter;
        node = node.children[letter];
      }

      if (node.endOfWord) {
        wordsList.push(word);
      }

      const keys = Object.keys(node.children);
      if (!keys.length) return;

      for (let i = 0; i < keys.length; i++) {
        const letter = keys[i];
        collectLetters(word, letter, node);
      }
    }

    collectLetters("", "", this.root);
    console.log(wordsList);
  }
}

//longest prefix matching
//delete

const trie = new Trie();

trie.insert("apple");
trie.insert("alabama");
trie.insert("app");
trie.insert("catacomb");
trie.insert("california");

console.log(trie.search("apple"));
console.log(trie.search("alabama"));
console.log(trie.search("app"));
console.log(trie.search("appp"));
console.log(trie.search("banana"));

console.log(trie.startsWith("app"));

trie.print();
