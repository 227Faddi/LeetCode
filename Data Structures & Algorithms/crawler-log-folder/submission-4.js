class Solution {
    /**
     * @param {string[]} logs
     * @return {number}
     */

    // receive an array of logs strings
    // return the number that represent the operations needed to go back to main
    // ../
    // ./
    // */
    // create a stack where we store the path reached
    // everytime we do "*/" add the path into the stack
    // everytime i do "../" remove the path from the stack
    // interate through the logs
    // at the end just return the length of the stack
    
    minOperations(logs) {
        let num = 0
        for(const log of logs){
            if(log === "../"){
                if(num !== 0){
                    num--
                }
            } else if(log !== "./"){
                num++
            }
        }

        return num
    }
}
