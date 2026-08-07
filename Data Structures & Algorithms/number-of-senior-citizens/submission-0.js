class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let count = 0
        for(const pass of details){
            console.log(pass[11] + pass[12])
            if(Number(pass[11] + pass[12]) > 60){
                count++
            }
        }

        return count
    }
}
