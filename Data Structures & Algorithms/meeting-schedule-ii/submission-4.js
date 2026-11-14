/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        let starts = intervals.map((i) => i.start).sort((a, b) => a - b)
        let ends = intervals.map((i) => i.end).sort((a, b) => a - b)
        let count = 0
        let res = 0

        let l = 0
        let r = 0

        while(l < intervals.length && r < intervals.length){
            if(starts[l] < ends[r]){
                count++
                l++
            } else {
                count--
                r++
            }

            res = Math.max(res, count)
        }

        return res
    }
}
