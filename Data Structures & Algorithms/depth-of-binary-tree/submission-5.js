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
    maxDepth(root) {
        let res = 0
        if(!root) return res
        
        let q = new Queue()
        q.enqueue(root)

        while(!q.isEmpty()){
            const size = q.size();

            for(let i = 0; i < size; i++){
                const node = q.dequeue()
                
                if(node.left){
                    q.enqueue(node.left)
                }

                if(node.right){
                    q.enqueue(node.right)
                }

            }

            res++

        }

        return res
    }
}
