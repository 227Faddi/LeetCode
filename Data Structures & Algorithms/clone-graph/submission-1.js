/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */

    // receive undirected graph
    // create a clone of it and return it
    // creating an hashmap

    // use dfs
    // check recurvesly each node
    // check if it is in the hasmap, return it
    // add it into the map
    // check all of it's neighbors
    // recurvisle call the dfs for each neighbour 
    // 

    cloneGraph(node) {
        if(!node) return null

        let map = new Map()

        function dfs(node){
            if(map.has(node)){
                return map.get(node)
            }

            let newNode = new Node(node.val)
            map.set(node, newNode)

            for(const n of node.neighbors){
                newNode.neighbors.push(dfs(n))
            }

            return newNode
        }

        return dfs(node)
    }
}
