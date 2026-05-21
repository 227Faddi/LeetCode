/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// receive the head of a linked list
class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let set = new Set()
        let curr = head


        while(curr){
            if(set.has(curr.next)){
                return true
            } else {
                set.add(curr.next)
            }

            curr = curr.next
        }

        return false
    }
}
