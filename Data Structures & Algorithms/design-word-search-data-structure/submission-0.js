class TrieNode {
    constructor() {
        this.children = {}
        this.isWordEnd = false
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root
        for(const c of word){
            if(!curr.children[c]){
                curr.children[c] = new TrieNode()
            }
            curr = curr.children[c]
        }
        curr.isWordEnd = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {

        function dfs(j, root){
            let curr = root

            for(let i = j; i < word.length; i++){
                let c = word[i]

                if(c == "."){
for (const child of Object.values(curr.children)) {
                        if (dfs(i + 1, child)) return true
                    }
                    return false
                } else {
                    if(!curr.children[c]){
                        return false
                    }
                    curr = curr.children[c]
                }
                
            }

            return curr.isWordEnd
        }

        return dfs(0, this.root)
    }
}

// add new words
// be able to search words
// if the char is a . it counts for any letter
// return true or false
// 