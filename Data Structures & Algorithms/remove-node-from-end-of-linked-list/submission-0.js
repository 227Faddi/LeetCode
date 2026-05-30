/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// receive the head of a linked list and an int
// [1 => 2 => 3 => 4]
// remove the nth element from the end
// and then return the list withtout it
// 2
// [1 => 2 => 3 => 4]
// [1 => 2 => 4]

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(null, head)
        let left = dummy
        let right = head

        // null [1 => 2 => 3 => 4]
        // null => 5

        while(n > 0 && right){
            right = right.next
            n--
        }

        while(right){
            left = left.next
            right = right.next
        }

        if(left.next){

        }

        left.next = left.next.next
        return dummy.next
    }
}
