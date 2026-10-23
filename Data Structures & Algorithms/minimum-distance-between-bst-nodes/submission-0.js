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

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    minDiffInBST(root) {
        let nodes = []

        function dfs(node){
            if(!node) return

            dfs(node.left)
            nodes.push(node.val)
            dfs(node.right)
        }

        dfs(root)
        let min = nodes[nodes.length - 1]

        for(let i = 0; i < nodes.length - 1; i++){
            min = Math.min(min, nodes[i + 1] - nodes[i])
        }

        return min
    }
}
