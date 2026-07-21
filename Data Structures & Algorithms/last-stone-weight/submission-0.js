class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */

    // receive an array of int
    // return an int, after comparing the biggest 2 int, until i only have 1 left
    // while the array lenght is bigger than 2
    // sort the array
    // take the biggest 2 nums
    // compare them
    // update the array with the right result
    // return the number left

    lastStoneWeight(stones) {
        
        while(stones.length > 1){
            stones = stones.sort((a, b) => a - b)

            const num1 = stones[stones.length - 1]
            const num2 = stones[stones.length - 2]

            stones.pop()
            stones.pop()

            if(num1 < num2){
                stones.push(num2 - num1)
            } else if (num2 < num1){
                stones.push(num1 - num2)
            }
        }

        return stones[0] || 0
    }
}
