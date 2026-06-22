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

    kthSmallest(root, k) {
        let curr = root
        let stack = []

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
