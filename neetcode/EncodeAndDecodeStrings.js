class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""

        for(const str of strs){
            result += `${str.length}#${str}`
        }

        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = []
        let curr = 0

        while(curr < str.length){
            let start = curr
            // "5#Hello5#World"
            while(str[curr] !== "#"){
                curr++
            }

            const encodedLength = Number(str.slice(start, curr))
            curr++

            result.push(str.slice(curr, curr + encodedLength))

            curr += encodedLength
        }

        return result
    }
}
