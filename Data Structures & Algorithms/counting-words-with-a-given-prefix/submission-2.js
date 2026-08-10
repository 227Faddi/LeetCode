class PrefixNode {
    constructor() {
        this.children = new Map();
        this.count = 0;
    }
}

class PrefixTree {
    constructor() {
        this.root = new PrefixNode();
    }

    add(w, length) {
        let cur = this.root;
        for (let i = 0; i < length; i++) {
            if (!cur.children.has(w[i])) {
                cur.children.set(w[i], new PrefixNode());
            }
            cur = cur.children.get(w[i]);
            cur.count++;
        }
    }

    count(pref) {
        let cur = this.root;
        for (let c of pref) {
            if (!cur.children.has(c)) {
                return 0;
            }
            cur = cur.children.get(c);
        }
        return cur.count;
    }
}

class Solution {
    /**
     * @param {string[]} words
     * @param {string} pref
     * @return {number}
     */
    prefixCount(words, pref) {
        let prefix_tree = new PrefixTree();
        for (let w of words) {
            if (w.length >= pref.length) {
                prefix_tree.add(w, pref.length);
            }
        }
        return prefix_tree.count(pref);
    }
}