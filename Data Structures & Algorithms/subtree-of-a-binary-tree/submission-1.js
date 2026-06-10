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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    //helper function to check if the roots are equal
    // use dfs to check each node and see if it's equal to the subroot
    // do this recoursively

    isEqual(r, s){
        if(!r && !s) return true

        if(!r || !s) return false

        if(r.val === s.val){
            const leftEqual = this.isEqual(r.left, s.left)
            const rightEqual = this.isEqual(r.right, s.right)

            return leftEqual && rightEqual
        }

        return false
    }

    isSubtree(root, subRoot) {
        if(!subRoot) return true
        if(!root) return false

        if(this.isEqual(root, subRoot)){
            return true
        }

        const left = this.isSubtree(root.left, subRoot)
        const right = this.isSubtree(root.right, subRoot)

        return left || right
    }
}
