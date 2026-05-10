class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    // a string containing parentheses
    // return a boolean in
    // Input: s = "([{}])"
    // Output: true

    // Input: s = "[(])"
    // Output: false

    isValid(s) {
        const stack = []
        const closing = {
            ")" : "(",
            "]" : "[",
            "}" : "{",
        }

        for(let i = 0; i < s.length; i++){
            const char = s[i]
            if(closing[char]){
                if(stack.length > 0 && stack[stack.length  - 1] === closing[char]){
                    stack.pop()
                } else {
                    return false
                }
            } else{
                stack.push(char)
            }
        }

        return stack.length === 0
    }
}
