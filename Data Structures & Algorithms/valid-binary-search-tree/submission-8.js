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
    // return a boolean indication whether it's a valid binary search tree
    // to be valid all the elements on the left should be smaller than its parent
    // and the right ones should be always bigger, for each node

    // keep in mind that i should keep track of the range where each side is allowed to be
    // example min and max values

    // use dfs to check all the nodes recursively 
    // while keeping a range to know where each node value should be
    // example if we go left then all the nodes should be smaller than a max value
    // if we go right all the nodes should be bigger than a min value
    // do this until we reach all nodes
    // if all nodes on right and left are valid then return true

    validTree(node, min, max){
        if(!node) return true

        if(node.val > min && node.val < max){
            const left = this.validTree(node.left, min, node.val)
            const right = this.validTree(node.right, node.val, max)

            return left && right
        } 

        return false
    }

    isValidBST(root) {
        return this.validTree(root, -Infinity, Infinity)
    }
}
