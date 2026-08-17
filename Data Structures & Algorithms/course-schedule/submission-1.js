class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const map = new Map()
        const visited = new Set()

        for(let i = 0; i < numCourses; i++){
            map.set(i, [])
        }

        for(let i = 0; i < prerequisites.length; i++){
            if(map.has(prerequisites[i][0])){
                map.get(prerequisites[i][0]).push(prerequisites[i][1])
            }
        }

        function dfs(course){
            if(visited.has(course)) return false
            if(map.get(course).length === 0) return true

            visited.add(course)
            console.log(map.get(course))
            for(const p of map.get(course)){
                if(!dfs(p)) return false
            }
            visited.delete(course)
            map.set(course, [])

            return true
        }

        for(let i = 0; i < numCourses; i++){
            if(!dfs(i)) return false
        }

        return true
    }
}
