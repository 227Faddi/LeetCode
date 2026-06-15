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
     * @return {ListNode}
     */

    // reveive the head of a linked list
    // return the head of the linked list reversed

    // [0,1,2,3]


    reverseList(head) {
        let curr = head 
        let prev = null

        while(curr){
            let tmp = curr.next
            curr.next = prev

            prev = curr
            curr = tmp
        }

        return prev
    }
}
