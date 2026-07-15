/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Codec {
    // receive a binary tree
    // return a string when serializing and a tree from the string when deserializing





    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    dfs(node, res){
        if(!node) {
            res.push("null")
            return 
        }
        
        res.push(node.val)
        this.dfs(node.left, res)
        this.dfs(node.right, res)
    }

    serialize(root) {
        let res = []

        this.dfs(root, res)
        return res.join(',')
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const list = data.split(',')
        let i = 0

        function dfs2() {
            let val = list[i];
            i++;

            if (val === "null" || val === undefined) {
                return null;
            }

            let node = new TreeNode(Number(val));
            node.left = dfs2();
            node.right = dfs2();
            return node;
        };

        return dfs2();
    }
}
