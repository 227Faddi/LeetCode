class Solution {
    /**
     * @param {string[]} names
     * @param {number[]} heights
     * @return {string[]}
     */

    // receive 2 arrays, one with strings, one with nums
    // return a sorted array of names, where the sorting is made in base of the heights of the second array

    sortPeople(names, heights) {
        let map = new Map()
        let res = []

        for(let i = 0; i < names.length; i++){
            map.set(heights[i], names[i])
        }

        heights.sort((a,b) => b - a)

        for(let i = 0; i < heights.length; i++){
            res.push(map.get(heights[i]))
        }

        return res
    }
}
