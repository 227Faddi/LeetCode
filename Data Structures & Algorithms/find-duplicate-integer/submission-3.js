class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = 0
        let fast = 0

        while(true){
            slow = nums[slow]
            fast = nums[nums[fast]]
            if(slow === fast) break
        } 

        let slow1 = 0
        while(true){
            slow = nums[slow]
            slow1 = nums[slow1]
            if(slow === slow1) return slow
        } 
    }
}
