class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        if(nums.length < 2) return nums

        const pivot = nums[Math.floor(nums.length / 2)] 
        const smaller = []
        const bigger = []

        for(let i = 0; i < nums.length; i++){
            if(i === Math.floor(nums.length / 2)) continue

            if(nums[i] <= pivot){
                smaller.push(nums[i])
            } else {
                bigger.push(nums[i])
            }
        }

        return [...this.sortArray(smaller), pivot, ...this.sortArray(bigger)]
    }
}
