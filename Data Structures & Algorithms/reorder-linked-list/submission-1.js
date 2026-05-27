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
     * @return {void}
     */

    // fast and slow pointers to find the middle
    // reverse second half
    // merge from both halfs

    reorderList(head) {
        let fast = head
        let slow = head

        while(fast.next && fast.next.next){
            fast = fast.next.next
            slow = slow.next
        }

        let second = slow.next
        slow.next = null
        let prev = null

        while(second){
            let temp = second.next
            second.next = prev
            prev = second
            second = temp
        }

        let first = head
        second = prev

        while(second){
            let tempFirst = first.next
            let tempSecond = second.next

            first.next = second
            second.next = tempFirst

            first = tempFirst
            second = tempSecond
        }
    }
}
