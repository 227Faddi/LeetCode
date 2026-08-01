class TreeNode{
    constructor() {
        this.children = {}
        this.isEnd = false
    }
}

class WordDictionary {
    constructor() {
        this.root = new TreeNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root

        for(const c of word){
            if(!curr.children[c]){
                curr.children[c] = new TreeNode()
            }
            curr = curr.children[c]
        }

        curr.isEnd = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        function dfs(i, node){
            if(i === word.length){
                return node.isEnd
            }

            if(word[i] === "."){
                for(const child of Object.values(node.children)){
                    if(dfs(i + 1, child)) return true
                }
                return false
            } else {
                if(node.children[word[i]]){
                    return dfs(i + 1, node.children[word[i]])
                }

                return false
            }

        }

        return dfs(0, this.root)
    }
}
