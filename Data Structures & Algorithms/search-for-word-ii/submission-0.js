class TreeNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TreeNode();
    }

    addWord(word) {
        let curr = this.root;
        for (const c of word) {
            if (!curr.children[c]) {
                curr.children[c] = new TreeNode();
            }
            curr = curr.children[c];
        }
        curr.isEnd = true;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        let trie = new Trie();
        for (const w of words) {
            trie.addWord(w);
        }

        const ROWS = board.length;
        const COLS = board[0].length;
        const res = new Set();
        const visit = new Set();

        function dfs(r, c, node, word) {
            if (
                r < 0 || c < 0 || r === ROWS || c === COLS ||
                visit.has(`${r},${c}`) || !(board[r][c] in node.children)
            ) {
                return;
            }

            visit.add(`${r},${c}`);
            node = node.children[board[r][c]];
            word += board[r][c];

            if (node.isEnd) {
                res.add(word);
            }

            dfs(r + 1, c, node, word);
            dfs(r - 1, c, node, word);
            dfs(r, c + 1, node, word);
            dfs(r, c - 1, node, word);

            visit.delete(`${r},${c}`);
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                dfs(r, c, trie.root, "");
            }
        }

        return [...res];
    }
}