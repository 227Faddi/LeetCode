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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode();
        let curr = dummy;
        let curr1 = l1;
        let curr2 = l2;
        let carry = 0;

        while (curr1 || curr2 || carry !== 0) {
            let v1 = curr1 ? curr1.val : 0;
            let v2 = curr2 ? curr2.val : 0;

            let total = v1 + v2 + carry;
            carry = Math.floor(total / 10);
            let val = total % 10;

            curr.next = new ListNode(val);
            curr = curr.next;

            if (curr1) curr1 = curr1.next;
            if (curr2) curr2 = curr2.next;
        }

        return dummy.next;
    }
}