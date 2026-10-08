class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b)
        let res = []

        for(let i = 0; i < nums.length; i++){
            if(i > 0 && nums[i] === nums[i - 1]) continue

            let l = i + 1
            let r = nums.length - 1

            while(l < r){
                const tot = nums[i] + nums[l] + nums[r]

                if(tot > 0){
                    r--
                } else if(tot < 0){
                    l++
                } else {
                    res.push([nums[i], nums[l], nums[r]])
                    r--
                    l++
                    while(l < r && nums[l] === nums[l - 1]){
                        l++
                    }
                }
            }
        }

        return res
    }
}
