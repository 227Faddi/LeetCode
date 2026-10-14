/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    isPalindrome(head) {
        let res = ""
        let curr = head

        while(curr){
            res += curr.val
            curr = curr.next
        }

        return res === res.split("").reverse().join("")
    }
}
