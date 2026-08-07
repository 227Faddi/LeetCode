class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        const arr = s.trim().split(" ")
        return arr[arr.length - 1].length
    }
}
