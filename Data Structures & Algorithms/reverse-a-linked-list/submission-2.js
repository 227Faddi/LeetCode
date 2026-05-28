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

    // receive a linked list
    // return the linked list reversed

    // Input: head = [0,1,2,3]
    // Output: [3,2,1,0]

    // 0 => 1 => 2 => 3 => null
    // null <= 0 <= 1 <= 2 <= 3

    // 1 represent the previuos value
    // 2 pointer represent the curr

    reverseList(head) {
        let curr = head
        let prev = null

        while(curr){
            let temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }

        return prev
    }
}
