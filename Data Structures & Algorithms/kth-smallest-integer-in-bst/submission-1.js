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

    addNums(root, nums){
        if(!root) return
        nums.push(root.val)
        this.addNums(root.left)
        this.addNums(root.right)
    }

    kthSmallest(root, k) {
        let nums = []

        let q = new Queue()
        q.push(root)

        while(!q.isEmpty()){
            let curr = q.pop()
            console.log(curr.val)
            nums.push(curr.val)

            if(curr.left){
                q.push(curr.left)
            }
            if(curr.right){
                q.push(curr.right)
            }
        }
        
        let sorted = nums.sort((a, b) => a - b)

        return sorted[k - 1]
    }
}
