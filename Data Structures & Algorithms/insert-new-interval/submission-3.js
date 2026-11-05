class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        // if the first interval start is bigger then the end of the new int
        // place the new interval at the beginneg

        // loop through all intervals
        // create result array
        // check if the new interval should be placed
        // at the beginning or end of the result
        // it's overllapping? yes then merge set the newInterval to be the merged
        // add to the res the curr interval
        let res = []

        for(let i = 0; i < intervals.length; i++){
            if(newInterval[1] < intervals[i][0]){
                res.push(newInterval)
                return [...res, ...intervals.slice(i)]
            } else if(newInterval[0] <= intervals[i][1]){
                newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])]
            } else{
                res.push(intervals[i])
            }
        }

        res.push(newInterval)
        return res
    }
}
