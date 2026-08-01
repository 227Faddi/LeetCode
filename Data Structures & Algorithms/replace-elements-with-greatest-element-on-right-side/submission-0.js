class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        for(let i = 0; i < arr.length ; i++){
            if(i === arr.length - 1){
                arr[i] = -1
            } else {
                    let max = Math.max(...arr.slice(i + 1, arr.length))
                    arr[i] = max
            }
        }

        return arr
    }
}
