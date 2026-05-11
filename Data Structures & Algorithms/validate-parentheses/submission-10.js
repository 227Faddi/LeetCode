class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    // "[]"
    // "[{()}]"
    // []

    // "[{(})]"

    isValid(s) {
        let stack = []
        let valid = {
            "}" : "{",
            "]" : "[",
            ")" : "("
        }

        for(let char of s){
            if(valid[char]){
                if(stack[stack.length - 1] === valid[char]){
                  stack.pop()  
                } else{
                    return false
                }
            } else {
                stack.push(char)
            }
        }

        return stack.length === 0
    }
}
