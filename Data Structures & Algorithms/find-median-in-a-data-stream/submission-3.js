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
        this.arr.sort((a,b) => a - b)
        let l = this.arr.length
        let m = this.arr[l / 2]
        let n = this.arr[l / 2 - 1]

        
        if(l % 2 === 0){
            return (m + n) / 2
        } else {
            return this.arr[Math.floor(l / 2)]
        }
    }
}
