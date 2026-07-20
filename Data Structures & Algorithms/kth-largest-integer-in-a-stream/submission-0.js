class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.arr = nums
        this.largest = k
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.arr.push(val)
        this.arr = this.arr.sort((a,b) => a - b)

        return this.arr[this.arr.length - this.largest]
    }
}
