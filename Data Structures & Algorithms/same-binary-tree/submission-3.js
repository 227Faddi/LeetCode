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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */

    isSameTree(p, q) {
        if(!p && !q) return true

        if(!p || !q) return false

        if(p.val === q.val){
            let leftSame = this.isSameTree(p.left, q.left)
            let rightSame = this.isSameTree(p.right, q.right)

            return leftSame && rightSame
        }

        return false
    }
}
