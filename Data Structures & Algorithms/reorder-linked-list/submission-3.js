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

    // receive the head of a linked list
    // return the head of the list with the list re ordered
    // the order should place one element from the front and one from the end
    // alrenatively until we reach the end

    // [2,4,6,8,10]
    // [2,10,4,8,6]

    // cut the list in the middle
    // and put 2 pointers, one on the beginning one on the end
    // reverse the second list
    // merge both lists

    reorderList(head) {
        let fast = head
        let slow = head

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }

        let prev = null 
        let curr = slow.next
        slow.next = null

        while(curr){
            let tmp = curr.next
            curr.next = prev
            prev = curr
            curr = tmp
        }

        let list1 = head 
        let list2 = prev
        let dummy = new ListNode()
        let node = dummy

        while(list1 && list2){
            node.next = list1
            node = node.next
            list1 = list1.next

            node.next = list2
            node = node.next
            list2 = list2.next
        }

        node.next = list1
        return dummy.next
    }
}
