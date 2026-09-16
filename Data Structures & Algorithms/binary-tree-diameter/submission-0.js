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

    // receive the root of a binary
    // find the diameter aka the length of the longest path
    // use dfs to go through the tree as deep as possible
    // then for each node we visit, increment a counter
    // once we hit the leaf base case reset the counter 
    // and set the res to the max seen

    diameterOfBinaryTree(root) {
        let res = 0

        function dfs(node){
            if(!node) return 0

            let left = dfs(node.left)
            let right = dfs(node.right)

            res = Math.max(res, left + right)

            return 1 + Math.max(left, right)
        }

        dfs(root)
        return res
    }
}
