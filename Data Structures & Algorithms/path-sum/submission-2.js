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
     * @param {number} targetSum
     * @return {boolean}
     */

    // receive the root of a tree
    // receive a target num
    // return true if we find a path that sum up to the target
    // only path root to leaf, 
    // use dfs to check each path and sum up all the nodes
    // recursively, and only we reach the leaf node we can 
    // return true if the sum is equal to target
    // if we don't any valid path, return false

    hasPathSum(root, targetSum) {
        if(!root) return false

        function dfs(node, sum){
            if(!node) return false

            sum += node.val
            console.log("value",sum)
            console.log(node.val)
            if(!node.left && !node.right){
                return sum === targetSum
            } 

            const left = dfs(node.left, sum)
            const right = dfs(node.right, sum)

            return left || right
        }

        
        return dfs(root, 0)
    }
}
