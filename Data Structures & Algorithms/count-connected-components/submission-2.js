class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let adjacencyL = new Map()
        let visited = new Set()
        let count = 0

        for(let i = 0; i < n; i++){
            adjacencyL.set(i, [])
        }

        for(let i = 0; i < edges.length; i++){
            adjacencyL.get(edges[i][0]).push(edges[i][1])
            adjacencyL.get(edges[i][1]).push(edges[i][0])
        }

        function dfs(node){
            if(visited.has(node)) return node

            visited.add(node)
            for(const n of adjacencyL.get(node)){
                dfs(n)
            }
        }

        for(let i = 0; i < n; i++){
            if(!visited.has(i)){
                dfs(i)
                count++
            }
        }

        return count
    }
}
