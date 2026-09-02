class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    heightChecker(heights) {
        const sorted = heights.toSorted((a, b) => a - b)
        let res = 0

        console.log(heights)
        console.log(sorted)


        for(let i = 0; i < heights.length; i++){
            console.log(sorted[i], heights[i])
            if(sorted[i] !== heights[i]){
                res++
            }
        }

        return res
    }
}
