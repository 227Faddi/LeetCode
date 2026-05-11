class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */

    // receive a list of string, representing operations
    // return the total score after all operations
    // Input: ops = ["1","2","+","C","5","D"]
    // Output: 18
    // [1,2,5,10] = 18
    // create a res, that will keep track of the max score
    // create a stack where to store all results of operations
    // calculate and add the different operations by looping through the array
    // update the max res
    // return the res

    calPoints(operations) {
        let res = 0
        let stack = []

        for(let i = 0; i < operations.length; i++){
            const curr = operations[i]

            switch(curr){
                case "C":
                    const removed = stack.pop();    
                    res -= removed
                    break
                case "D":
                    const double = stack[stack.length - 1] * 2;
                    stack.push(double);
                    res += double;
                break;
                case "+":
                    res += stack[stack.length - 2] + stack[stack.length - 1]
                    stack.push(stack[stack.length - 2] + stack[stack.length - 1])
                    break
                default:
                    stack.push(Number(curr))
                    res += Number(curr)
            }

        }

        return res
    }
}
