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
        const maxPq = new MaxPriorityQueue();

        for (const stone of stones) {
            maxPq.enqueue(stone);
        }

        // get the biggest 2 and pop

        while(maxPq.size() > 1){
            const num1 = maxPq.dequeue()
            const num2 = maxPq.dequeue()

            const diff = num1 - num2
            
            if(diff){
                maxPq.enqueue(diff)
            }
        }

        return maxPq.front() || 0
    }
}
