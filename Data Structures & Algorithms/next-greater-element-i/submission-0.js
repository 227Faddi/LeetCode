class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        let l = 0
        let res = []

        while(l < nums1.length){
            const num = nums1[l]
            let max = -1
            let i = nums2.indexOf(num)

            while(i < nums2.length){
                console.log(num, nums2[i])
                if(num < nums2[i] && max === -1){
                    max = nums2[i]
                }
                i++
            }

            res.push(max)

            l++
        }

        return res
    }
}
