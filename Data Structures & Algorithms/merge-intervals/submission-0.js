class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a,b) => a[0] - b[0])
        let res = [intervals[0]]

        for(let i = 1; i < intervals.length; i++){
            let curr = intervals[i]
            let last = res[res.length -1]

            if(curr[0] <= last[1]){
                res[res.length -1] = [Math.min(curr[0], last[0]), Math.max(curr[1], last[1])]
            } else {
                res.push(curr)
            }
        }

        console.log(intervals)

        return res 
    }
}
