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
    levelOrder(root) {
        if(!root) return []

        let res = []
        let q = new Queue()
        q.enqueue(root)

        while(!q.isEmpty()){
            let level = []
            const size = q.size()

            for(let i = 0; i < size; i++){
                const node = q.dequeue()
                level.push(node.val)

                if(node.left){
                    q.enqueue(node.left)
                }

                if(node.right){
                    q.enqueue(node.right)
                }
            }

            res.push(level)
        }

        return res
    }
}
