class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        const setA = new Set(nums1);
        const setB = new Set(nums2);
        return [...setA.intersection(setB)]
    }
}
