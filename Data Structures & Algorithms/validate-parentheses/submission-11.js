class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const right = new Map([
            ["}", "{"],
            [")", "("],
            ["]", "["]
        ]);

        for(let i = 0; i < s.length; i++){
            if(right.has(s[i])){
                if(right.get(s[i]) === stack[stack.length - 1]){
                    stack.pop()
                } else {
                    return false
                }
            } else {
                stack.push(s[i])
            }

        }

        return stack.length === 0
    }
}
