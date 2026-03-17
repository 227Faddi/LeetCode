class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    // receive an array of int
    // return an array of int, which each index will have the sum of the first array minus the value at that index
    // Input: nums = [1,2,4,6]
    // output: [48,24,12,8]

    // store the product product
    // loop into the array, and divide for the current index value
    // and push it into an array

    productExceptSelf(nums) {
        let result = []

        for(let i = 0; i < nums.length; i++){
            let product = 1

            for(let j = 0; j < nums.length; j++){
                const current = nums[j]

                if(j !== i){
                    product = product * current 
                }
            }

            result.push(product)
        }

        return result
    }
}
