/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, children = []) {
 *         this.val = val;
 *         this.children = children;
 *     }
 * }
 */
class Solution {
    /**
     * @param {Node|null} root
     * @return {number[]}
     */
    dfs(node, arr){
        if(!node) return null

        for(const children of node.children){
            this.dfs(children, arr)
            arr.push(children.val)
        }
    }

    postorder(root) {
        let result = []
        if(!root) return result
        this.dfs(root, result)
        result.push(root.val)
        return result
    }
}
