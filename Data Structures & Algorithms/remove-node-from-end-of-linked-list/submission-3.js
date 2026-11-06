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
     * @param {number} n
     * @return {ListNode}
     */

    // receive a linked list
    // return the head of the list after removing
    // the nth node from the end
    // Input: head = [1,2,3,4], n = 2
    // 1 => 2 => 3 => 4 => NULL
    // 5 => NULL

    // Output: [1,2,4]

    removeNthFromEnd(head, n) {
        const dummy = new ListNode()
        dummy.next = head
        let prev = dummy
        let curr = head

        for(let i = 0; i < n; i++){
            curr = curr.next
        }

        while(curr){
            prev = prev.next
            curr = curr.next
        }   

        prev.next = prev.next.next

        return dummy.next
    }
}
