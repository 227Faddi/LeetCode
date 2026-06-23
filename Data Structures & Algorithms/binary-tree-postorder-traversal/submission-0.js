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

        this.dfs(node.left, arr)
        this.dfs(node.right, arr)
        arr.push(node.val)
    }

    postorderTraversal(root) {
        let result = []
        this.dfs(root, result)
        return result
    }
}
