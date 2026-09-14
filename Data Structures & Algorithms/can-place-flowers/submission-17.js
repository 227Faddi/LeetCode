class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */

    canPlaceFlowers(flowerbed, n) {
        if(n === 0) return true

        for(let i = 0; i < flowerbed.length; i++){
            let prev = i === 0 ? 0 : flowerbed[i - 1]
            let curr = flowerbed[i]
            let next = i === flowerbed.length - 1 ? 0 : flowerbed[i + 1]

            if(curr === 0 && prev === 0 && next === 0){
                flowerbed[i] = 1
                n -= 1
                if(n === 0){
                    return true
                }
            }
        }

        return false
    }
}
