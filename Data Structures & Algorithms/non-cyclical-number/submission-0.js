class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        if(n === 1) return true

        let set = new Set()

        function sumSquare(n){
            if(n === 1) return true

            let sum = 0
            for(const num of `${n}`){
                sum += Math.pow(Number(num), 2)
            }

            if(set.has(sum)) return false
            console.log(sum)
            set.add(sum)
            return sumSquare(sum)
        }

        return sumSquare(n)
    }
}
