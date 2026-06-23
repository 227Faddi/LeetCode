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
     * @return {number[]}
     */

    dfs(node, arr){
        if(!node) return null

        arr.push(node.val)
        this.dfs(node.left, arr)
        this.dfs(node.right, arr)
    }

    preorderTraversal(root) {
        let result = []
        this.dfs(root, result)
        return result
    }
}
