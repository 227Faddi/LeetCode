class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let res = [];
        let i = 0;

        while (i < intervals.length) {
            const interval = intervals[i];
            
            if (newInterval[1] < interval[0]) {
                res.push(newInterval);
                return [...res, ...intervals.slice(i)];
            } else if (newInterval[0] > interval[1]) {
                res.push(interval);
            } else {
                newInterval = [
                    Math.min(newInterval[0], interval[0]), 
                    Math.max(newInterval[1], interval[1])
                ];
            }
            i++;
        }

        res.push(newInterval);
        return res;
    }
}