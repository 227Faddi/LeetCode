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

    // receive a binary tree
    // return an array with its inorder traversal
    // dfs recursevly to push each element inorder into an array result

    dfs(root, arr){
        if(!root) return null

        this.dfs(root.left, arr)
        arr.push(root.val)
        this.dfs(root.right, arr)
        
        return arr
    }

    inorderTraversal(root) {
        let result = []
        this.dfs(root, result)
        return result
    }
}
