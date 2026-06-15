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

    isValid(root, left, right){
        if(!root) return true

        if(!(root.val > left && root.val < right)){
            return false
        }

        let leftSide = this.isValid(root.left, left, root.val)
        let rightSide = this.isValid(root.right, root.val, right)

        return leftSide && rightSide
    }

    isValidBST(root) {
        return this.isValid(root, -Infinity, Infinity)
    }
}
