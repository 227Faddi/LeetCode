class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length === 0){
            return " "
        }

        return strs.join("é")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str === " "){
            return []
        }

        return str.split("é")
    }
}
