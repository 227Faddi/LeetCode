class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */

    // receive an array of arrays with couples of num
    // calculate the couple closest to 0,0
    // return k couple closest to 0,0 in an array

    // bf
    // re order the array in base of distance
    // add k elements from the ordered array into a new one
    // return the new array create

    // optimal
    // create a minHeap and store couples in base of closest to the ones closest to 0,0
    // pop from the top k times and add into a new array
    // return the new array
    getDistance(arr) {
        return (arr[0] ** 2) + (arr[1] ** 2);
    }

    kClosest(points, k) {
        const minPq = new PriorityQueue(
            (a, b) => this.getDistance(a) - this.getDistance(b)
        );
        
        for (const point of points) {
            minPq.enqueue(point);
        }

        const res = [];

        for (let i = 0; i < k; i++) {
            res.push(minPq.dequeue());
        }

        return res;
    }
}
