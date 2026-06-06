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
    // return a boolean indicating
    // if the root as a subtree that is equal to subRoot
    isEqual(tree1, tree2){
        if(!tree1 && !tree2) return true

        if(tree1 && tree2 && tree1.val === tree2.val){
            let rightEqual = this.isEqual(tree1.right, tree2.right)
            let leftEqual = this.isEqual(tree1.left, tree2.left)

            return rightEqual && leftEqual
        }

        return false
    }

    isSubtree(root, subRoot) {
        if(!subRoot) return true
        if(!root) return false

        let equal = this.isEqual(root, subRoot)
        if(equal){
            return true
        }

        let rightSub = this.isSubtree(root.right, subRoot)
        let leftSub = this.isSubtree(root.left, subRoot)

        return rightSub || leftSub
    }
}
