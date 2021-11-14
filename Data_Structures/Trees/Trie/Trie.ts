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

  // Checks to see if the trie is empty
  isEmpty(): boolean {
    const keys = Object.keys(this.root.children);
    return keys.length ? true : false;
  }

  // insert a word into the trie
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

  // Checks to see if a word is in the trie
  contains(word: string) {
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

  // checks if the given prefix exists
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

  // returns all words with the given prefix
  findAll(prefix: string) {
    let current = this.root;
    let prefixList = [];

    for (let i = 0; i < prefix.length; i++) {
      const letter = prefix[i];
      if (!current.children[letter]) {
        return prefixList;
      }
      current = current.children[letter];
    }

    function collectLetters(word, letter, node) {
      if (letter) {
        word += letter;
        node = node.children[letter];
      }

      if (node.endOfWord) {
        prefixList.push(word);
      }

      if (!node) return;

      const keys = Object.keys(node.children);

      for (let i = 0; i < keys.length; i++) {
        const newLetter = keys[i];
        collectLetters(word, newLetter, node);
      }
    }

    collectLetters(prefix, "", current);
    return prefixList;
  }

  // delete a word from the trie
  delete(word: string): boolean {
    let current = this.root;
    let deleteFromPointer = this.root;
    let deleteFromLetter = "";
    let hasChild;

    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      hasChild = !!current.children[letter].children.length;

      // If element doesn't exist, word doesn't exists, return null
      if (!current.children[letter]) {
        return false;
      }

      // If we hit end of a trie EoW but a child still exists
      if (current.endOfWord && hasChild) {
        deleteFromPointer = current;
        deleteFromLetter = letter;
      }

      current = current.children[letter];
    }

    current.endOfWord = false;

    if (!hasChild) {
      delete deleteFromPointer[deleteFromLetter];
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

// console.log("ISEMPTY: ", trie.isEmpty());

trie.insert("apple");
trie.insert("alabama");
trie.insert("app");
trie.insert("catacomb");
trie.insert("california");

// console.log("ISEMPTY: ", trie.isEmpty());

// console.log(trie.contains("apple"));
// console.log(trie.contains("alabama"));
// console.log(trie.contains("app"));
// console.log(trie.contains("appp"));
// console.log(trie.contains("banana"));

// console.log(trie.startsWith("app"));

// trie.print();

console.log(trie.findAll("app"));
console.log(trie.findAll("ca"));
console.log(trie.findAll("cat"));
console.log(trie.findAll("cx"));

console.log(trie.delete("app"));
trie.print();
