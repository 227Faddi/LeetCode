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

    // receive a binary search tree and and int k
    // return kth smallest value from the tree (index 1)
    // check for an empty node, return null
    // iterate through all the nodes and add them into an array
    // sort the array
    // return the kth number using indices

    dfs(root, arr){
        if(!root) return
        this.dfs(root.left, arr)
        arr.push(root.val)
        this.dfs(root.right, arr)
    }

    kthSmallest(root, k) {
        let stack = []
        let curr = root

        while(stack.length > 0 || curr){
            while(curr){
                stack.push(curr)
                curr = curr.left
            }
            curr = stack.pop()
            k--
            if(k === 0) return curr.val
            curr = curr.right
        }
    }
}
