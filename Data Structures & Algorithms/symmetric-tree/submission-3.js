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
    isSymmetric(root) {
        if(!root) return true

        let q = new Queue()
        q.enqueue(root.left)
        q.enqueue(root.right)

        while(!q.isEmpty()){
            const size = q.size()

            for(let i = 0; i < size; i++){
                const left = q.dequeue()
                const right = q.dequeue()

                if(!left && !right) continue
                if(!left || !right) return false

                if(left.val === right.val){
                    q.enqueue(left.left)
                    q.enqueue(right.right)
                    q.enqueue(left.right)
                    q.enqueue(right.left)
                } else {
                    return false
                }
            }   
        }

        return true
    }
}
