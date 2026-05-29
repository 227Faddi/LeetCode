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

    // receive a linked list
    // return the linked list re ordered
    // [0, 1, 2, 3, 4, 5, 6]
    // find the middle value
    // [0, 1, 2, 3] [6, 5, 4]   
    // [0, 6, 1, 5, 2, 4, 3]
    // Input: head = [2,4,6,8]
    // Output: [2,8,4,6]

    reorderList(head) {
        // find the middle and separed the list
        let fast = head.next 
        let slow = head

        while(fast && fast.next){
            fast = fast.next.next
            slow = slow.next
        }

        // reverse the second half of the list
        let second = slow.next
        slow.next = null
        let prev = null

        while(second){
            let tmp = second.next
            second.next = prev
            prev = second
            second = tmp
        }

        // merge first half and second in the right order
        let first = head
        second = prev

        // [0, 1, 2, 3] [6, 5, 4]   
        while(second){
            let tmp1 = first.next
            let tmp2 = second.next

            first.next = second
            second.next = tmp1

            first = tmp1
            second = tmp2
        }
    }
}
