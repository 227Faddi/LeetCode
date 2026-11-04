class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let res = ""

        for(const d of digits){
            res += d
        }

        return `${Number(res) + 1}`.split("")
    }
}
