class MedianFinder {
    constructor() {
        this.arr = []
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.arr.push(num)
    }

    /**
     * @return {number}
     */
    findMedian() {
        this.arr.sort((a, b) => a - b)
        
        if(this.arr.length % 2 === 0){
            const i = this.arr[Math.floor(this.arr.length / 2)]
            const x = this.arr[Math.floor(this.arr.length / 2) - 1]

            return (i + x) / 2
        } else {
            return this.arr[Math.floor(this.arr.length / 2)]
        }
    }
}
