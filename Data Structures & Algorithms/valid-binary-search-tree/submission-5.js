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

    // receive the root of a binary tree
    // return a boolean indicating whether is a valid binary search tree or not
    // create an helper function to use dfs recursively

    // if the root is null, if yes return true
    // make sure that the left child is less than the current and its parent
    // same for the right side but it should be greater
    // store min values and max value

    // node < right < ++
    // -- < left < node

    isValid(root, min, max){
        if(!root) return true

        if(!(root.val > min && root.val < max)){
            return false
        }

        let leftSide = this.isValid(root.left, min, root.val)
        let rightSide = this.isValid(root.right, root.val, max)

        return leftSide && rightSide
    }
    

    isValidBST(root) {
        return this.isValid(root, -1001, 1001)
    }
}
