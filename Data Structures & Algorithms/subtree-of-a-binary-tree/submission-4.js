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

    // receive 2 binary trees
    // to return the a boolean indiating whether the first tree
    // as the second tree as a subroot

    // for each node on the first tree, check if it's equal to the subroot
    // do it resursively with dfs, so just check if the node structure is equal to the subroot

    isSubtree(root, subRoot) {
        if(!subRoot) return true
        if(!root) return false

        if(this.isEqual(root, subRoot)) return true

        let leftSide = this.isSubtree(root.left, subRoot)
        let rightSide = this.isSubtree(root.right, subRoot)

        return leftSide || rightSide

    }

    isEqual(r, s){
        if(!r && !s) return true

        if(!r || !s) return false

        if(r.val === s.val){
            let left = this.isEqual(r.left, s.left)
            let right = this.isEqual(r.right, s.right)

            return left && right
        }

        return false
    }
}
