// Given an array arr and a chunk size size, return a chunked array.

// A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

// Please solve it without using lodash's _.chunk function.

 

// Example 1:

// Input: arr = [1,2,3,4,5], size = 1
// Output: [[1],[2],[3],[4],[5]]
// Explanation: The arr has been split into subarrays each with 1 element.

// Constraints:

// arr is a valid JSON array
// 2 <= JSON.stringify(arr).length <= 105
// 1 <= size <= arr.length + 1

// My solution

// Parameters
// an array of values and an integer number

// Return
// the arr but with subarrays that are going to have the same length of the second parameter if applicable

// Examples
// Input: arr = [1,2,3,4,5], size = 1
// Output: [[1],[2],[3],[4],[5]]
// Explanation: The arr has been split into subarrays each with 1 element.

// Pseudocode
// check for empty arr and if tru return empty array
// use slice from 0 to the size target
// and make an array from it
// continue till we finish our arr



var chunk = function(arr, size) {
    if(arr.length === 0) return [];
    let result = [];
    let start = 0

    while (start < arr.length) {
        result.push(arr.slice(start, start + size));
        start += size; 
    }
    return result;
};

console.log(chunk([1,2,3,4,5], 1)) // [[1],[2],[3],[4],[5]]
console.log(chunk([1,9,6,3,2], 3)) // [[1, 9, 6], [3, 2]]
console.log(chunk([8,5,3,2,6], 6)) // [[8,5,3,2,6]]

