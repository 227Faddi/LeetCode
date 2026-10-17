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
     * @param {TreeNode} root1
     * @param {TreeNode} root2
     * @return {boolean}
     */
    leafSimilar(root1, root2) {
        let leafs1 = []
        let leafs2 = []

        function dfs(node, leafs){
            if(!node) return null

            if(!node.left && !node.right){
                leafs.push(node.val)
                return
            }

            dfs(node.left, leafs)
            dfs(node.right, leafs)
        }

        dfs(root1, leafs1)
        dfs(root2, leafs2)

        return leafs1.join("") === leafs2.join("")
    }
}
