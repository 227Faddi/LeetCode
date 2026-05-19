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

    // head = [3,0,1,2]
    // [3,2,1,0] 

    // [0 1, 2, 3]

    reverseList(head) {
        let prev = null
        let curr = head

        while(curr !== null){
            let nextNode = curr.next

            curr.next = prev

            prev = curr
            curr = nextNode
        }

        return prev
    }
}
