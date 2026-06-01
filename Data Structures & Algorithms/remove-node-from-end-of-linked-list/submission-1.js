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

    // receive the head of a linked list with an int num
    // return the list node without the nth element starting from the end
    // Input: head = [1,2,3,4], n = 2
    // Output: [1,2,4]
    // Input: head = [5], n = 1
    // Output: []
    // [1,2,3,4]
    // [dummy => 1 => 2 => 4]
    // 2 pointers
    // 

    removeNthFromEnd(head, n) {
        let dummy = new ListNode(null, head)
        let left = dummy
        let right = head

        while(n > 0 && right){
            right = right.next
            n--
        }

        while(right){
            left = left.next
            right = right.next
        }

        left.next = left.next.next

        return dummy.next
    }
}
