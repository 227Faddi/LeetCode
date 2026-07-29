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
     * @return {number}
     */

    // receive a binary tree
    // return the max depth of the tree as num
    // use bfs to check each node level by level
    // return the number of levels
    
    maxDepth(root) {
        let levels = 0
        if(!root) return levels

        //fifo
        let q = new Queue()
        q.enqueue(root)

        while(!q.isEmpty()){
            let size = q.size()
            
            for(let i = 0; i < size; i++){
                let node = q.dequeue()
                if(node.left){
                    q.enqueue(node.left)
                }

                if(node.right){
                    q.enqueue(node.right)
                }
            }
            
            levels++
        }

        return levels
    }
}
