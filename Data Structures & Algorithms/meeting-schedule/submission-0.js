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
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        // receive an array of intervals
        // where we get the first num as the start and the second as the end
        // return a boolean indicating
        // whether there is a conflict in the intervals

        // sort the intervals
        // traverse all the intervals
        // and compare couples and see if they conflict
        // if we went all the way with no conflicts return true

        intervals.sort((a, b) => a.start - b.start)

        for(let i = 0; i < intervals.length - 1; i++){
            if(intervals[i + 1].start < intervals[i].end){
                return false
            }
        }

        return true
    }
}
