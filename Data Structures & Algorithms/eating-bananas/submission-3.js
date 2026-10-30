class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 0
        let maxPile = Math.max(...piles);
        let r = maxPile
        let res = maxPile

        while(l <= r){
            let k = Math.floor((l + r) / 2)
            let hours = 0

            for(const p of piles){
                hours += Math.ceil(p / k);
            }

            if (hours <= h) {
                res = Math.min(res, k)
                r = k - 1
            } else {
                l = k + 1
            }
        }

        return res;
    }
}
