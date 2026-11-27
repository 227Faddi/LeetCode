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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        if(left === right) return head

        let prev = null
        let curr = head
        let position = 1
        
        let leftNode = null
        let rightNodeNext = null
        let rightNode = null
        let detach = null

        while(curr){
            if(position === left){
                leftNode = curr
                detach = prev
            }

            if(position === right){
                rightNodeNext = curr.next
                rightNode = curr
            }

            if(left < position && position <= right){
                let tmp = curr.next
                curr.next = prev
                prev = curr
                curr = tmp
            } else {
                prev = curr
                curr = curr.next
            }

            position++
        }

        leftNode.next = rightNodeNext
        
        if(detach){
            detach.next = rightNode
        }

        return left === 1 ? rightNode : head
    }
}
