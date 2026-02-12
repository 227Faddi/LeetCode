class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */

  // receive a string with brackets
  // check and valid the string to make sure each braket is closed
  // return boolean indicating the validation
  // ()
  // [(]
  // [(])

  // create an hashmap with the parentesis
  // create an empty array (stack)
  // check each char of the string and if it's an opening add it to the stack
  // if it's a closing bracket find the last input in the stack
  // if the input in the stack is the opening then remove it
  // at the end check if the array is empty
  // if it's empty it means that the they match so return true, else false

  isValid(s) {
    const stack = [];
    const hashMap = { ")": "(", "]": "[", "}": "{" };

    for (let i = 0; i < s.length; i++) {
      const curr = s[i];
      const last = stack[stack.length - 1];
      const match = hashMap[curr];

      if (match) {
        if (stack.length > 0 && last === match) {
          stack.pop();
        } else {
          return false;
        }
      } else {
        stack.push(curr);
      }
    }

    return stack.length === 0;
  }
}
