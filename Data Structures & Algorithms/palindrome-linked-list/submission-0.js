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
        let res = []
        let curr = head

        while(curr){
            console.log(curr.val)
            res.push(curr.val)
            curr = curr.next
        }

        let reverse = [...res].reverse()

        for(let i = 0; i < res.length; i++){
            if(res[i] !== reverse[i]) return false
        }

        return true
    }
}
