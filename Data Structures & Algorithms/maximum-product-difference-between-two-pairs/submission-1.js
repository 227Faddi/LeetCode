class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProductDifference(nums) {
        function sort(arr){
            if(arr.length < 2) return arr
            const pivot = arr[Math.floor(arr.length / 2)]

            let less = []
            let more = []

            for(let i = 0; i < arr.length; i++){
                if(i === Math.floor(arr.length / 2)) continue

                if(arr[i] <= pivot){
                    less.push(arr[i])
                } else{
                    more.push(arr[i])
                }
            }

            return [...sort(less), pivot, ...sort(more)]
        }   

        const sortedNums = sort(nums)

        return (sortedNums[sortedNums.length - 1] * sortedNums[sortedNums.length - 2]) - (sortedNums[0] * sortedNums[1])
    }
}
