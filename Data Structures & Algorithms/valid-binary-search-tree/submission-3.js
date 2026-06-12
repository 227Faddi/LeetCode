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
     * @return {boolean}
     */

    // receive a root a binary tree
    // return a boolean indicating whether the binary tree
    // can do this recursively
    // check if a node is not null
    // check if the children on the left is < root
    // check if the children on the right is > root

    // if any of these is false return false

    // call recurvely the valid function on both the right and left side
    // check if both sides are valid
    // return true if valid
    isValid(node, left, right){
        if(!node) return true

        if(!(left < node.val && node.val < right)){
            return false
        }

        let leftSide = this.isValid(node.left, left, node.val) 
        let rightSide = this.isValid(node.right, node.val, right)

        return leftSide && rightSide
    }

    isValidBST(root) {
        return this.isValid(root, -1001, 1001)
    }
}
