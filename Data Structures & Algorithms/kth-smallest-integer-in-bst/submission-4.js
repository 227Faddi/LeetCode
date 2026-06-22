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
     * @param {number} k
     * @return {number}
     */

    // receive a bst root with an int
    // return the kth smallest node

    // create an array
    // traverse the tree
    // insert each node in order
    // return the kth element 

    dfs(node, arr){
        if(!node) return null

        this.dfs(node.left, arr)
        arr.push(node.val)
        this.dfs(node.right, arr)
    }

    kthSmallest(root, k) {
        let result = []
        this.dfs(root, result)

        return result[k - 1]
    }
}
