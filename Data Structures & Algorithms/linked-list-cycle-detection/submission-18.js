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

    // receive a linked list, which is a ds that is formed by nodes
    // where each node points to the next one
    // return true or false, if the list has a cycle
    // that means that the last nodes points to another node
    // so no node points to null
    
    hasCycle(head) {
        if(!head) return false

        let slow = head
        let fast = head.next

        while(fast && fast.next){
            if(slow === fast){
                return true
            }

            slow = slow.next
            fast = fast.next.next
        }

        return false
    }
}
