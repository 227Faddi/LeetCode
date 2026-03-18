class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // receive an array of int
    // return a new array where each value is the product of
    // all the values expect for the value at that index
    //Input: nums = [1,2,4,6]
    //Output: [48,24,12,8]

    // looping into the array, and multuply all values
    // expect the current index that i'm checking
    // push the product into an array

    productExceptSelf(nums) {
        let result = []

        //Input: nums = [1,2,4,6]
        for(let i = 0; i < nums.length; i++){
            let product = 1

            for(let j = 0; j < nums.length; j++){
                if(j !== i){
                    product = product * nums[j]
                }
            }

            result.push(product)
        }

        return result
    }
}
