class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = {
            ")": "(",
            "]": "[",
            "}": "{"
        }

        let stack = []

        for(let i = 0; i < s.length; i++){
            let c = s[i]

            if(map[c]){
                if(stack && stack[stack.length - 1] === map[c]){
                    stack.pop()
                } else {
                    return false
                }
            } else {
                stack.push(c)
            }
        }

        return stack.length === 0
    }
}
