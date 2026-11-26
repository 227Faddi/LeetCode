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

    // use bfs
    // at each level we store all nodes into a an array
    // then push it to the res

    levelOrder(root) {
        if(!root) return []

        let q = new Queue()
        let res = []
        q.enqueue(root)

        while(!q.isEmpty()){
            const size = q.size()
            let level = []

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
