class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        let visited = new Set()
        let adjacencyL = new Map()

        for(let i = 0; i < n; i++){
            adjacencyL.set(i, [])
        }

        for(let i = 0; i < edges.length; i++){
            adjacencyL.get(edges[i][0]).push(edges[i][1])
                        adjacencyL.get(edges[i][1]).push(edges[i][0])
        }


        function dfs(node, parent){
            if(visited.has(node)) return false
            visited.add(node)
            for(const n of adjacencyL.get(node)){
                if(n !== parent){
                    if(!dfs(n, node)) return false
                }
            }

            return true
        }
        
        return dfs(0, -1) && visited.size === n
    }
}
