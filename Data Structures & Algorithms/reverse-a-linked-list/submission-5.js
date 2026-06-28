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

    // receive the head of a linked list
    // return the head of the linked list reversed

    //Input: head = [0,1,2,3]
    // Output: [3,2,1,0]

    // [null <- 0 <- 1 <- 2 <- 3]
    // use 2 pointers to go through the list
    // and change each node next pointer to the prev pointer

    reverseList(head) {
        let curr = head
        let prev = null

        while(curr){
            let tmp = curr.next

            curr.next = prev
            prev = curr
            curr = tmp
        }

        return prev
    }
}
