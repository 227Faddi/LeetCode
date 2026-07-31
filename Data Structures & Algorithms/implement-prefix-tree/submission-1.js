class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.root
        for(const c of word){
            if(!node.children[c]){
                node.children[c] = new TrieNode()
            }
            node = node.children[c]
        }
        node.isEndOfWord = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this.root
        for(const c of word){
            if(!node.children[c]){
                return false
            }
            node = node.children[c]
        }
        
        return node.isEndOfWord
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this.root
        for(const c of prefix){
            if(!node.children[c]){
                return false
            }
            node = node.children[c]
        }
        return true
    }
}
