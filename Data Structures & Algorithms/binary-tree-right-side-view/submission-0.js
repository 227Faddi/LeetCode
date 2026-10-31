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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return []

        let q = new Queue()
        q.enqueue(root)
        let res = []

        while(!q.isEmpty()){
            const size = q.size()

            for(let i = 0; i < size; i++){
                const node = q.dequeue()
                if(i === size - 1){    
                    res.push(node.val)
                }

                if(node.left){
                    q.enqueue(node.left)
                }

                if(node.right){
                    q.enqueue(node.right)
                }
            }
        }

        return res
    }
}
