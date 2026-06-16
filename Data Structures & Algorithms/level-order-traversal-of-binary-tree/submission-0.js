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
     * @return {number[][]}
     */

    // receive the root of a binary tree
    // return an array formed by subarrays from nodes from each level
    // check if the root is empty
    // create a res array
    // use breath first search to check each level
    // at each level i'll just push the nodes into the array
    // return the array

    levelOrder(root) {
        let res = []
        if(!root) return res

        const q = new Queue()
        q.push(root)

        while(!q.isEmpty()){
            let level = []

            for(let i = q.size(); i > 0; i--){
                let node = q.pop()
                if(node){
                    level.push(node.val)
                    q.push(node.left)
                    q.push(node.right)
                }
            }

            if(level.length > 0){
                res.push(level)
            }
        }

        return res
    }
}