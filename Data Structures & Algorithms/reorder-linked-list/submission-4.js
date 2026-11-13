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
    reorderList(head) {
        let slow = head
        let fast = head

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }

        let prev = null
        let curr = slow

        while(curr){
            const tmp = curr.next
            curr.next = prev
            prev = curr
            curr = tmp
        }

        let left = head
        let right = prev

        while(right.next){
            let tmp1 = left.next
            let tmp2 = right.next

            left.next = right
            right.next = tmp1

            left = tmp1
            right = tmp2
        }

        return left
    }
}
