class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    // an array of int nums
    // int num 

    // return a new array contian

    // Input: nums = [1,2,2,3,3,3], k = 2
    // Output: [2,3]

    // creating a storage 
    // where i can store the count of each value
    // loop into the arry and store the counts of the unique values

    // order the storage from the most used to the least

    // return only the k values from that orderd list

    topKFrequent(nums, k) {
        const counts = new Map()

        for(let i = 0; i < nums.length; i++){
            const current = nums[i]

            if(counts.has(current)){
                counts.set(current, counts.get(current) + 1)
            } else{
                counts.set(current, 1)
            }

        }

        const sortedMap = [...counts.entries()].sort((a, b) => b[1] - a[1])
        const sortedList = sortedMap.map(item => item[0])

        return sortedList.slice(0, k)
    }
}
