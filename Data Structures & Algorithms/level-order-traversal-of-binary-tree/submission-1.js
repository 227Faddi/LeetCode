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
    // return an array with subarray where each one contains all the 
    // nodes values at a certain level

    // check for empty arrays
    // bfs 
    // create a queue where we store the nodes to check
    // pop them and add their childrens when done


    levelOrder(root) {
        let result = []
        if(!root) return result

        let q = new Queue()
        q.push(root)

        while(!q.isEmpty()){
            let level = []
            let size = q.size()

            for(let i = 0; i < size; i++){
                let node = q.pop()

                if(node.left){
                    q.push(node.left)
                }
                if(node.right){
                    q.push(node.right)
                }

                level.push(node.val)
            }

            result.push(level)
        }

        return result
    }
}
