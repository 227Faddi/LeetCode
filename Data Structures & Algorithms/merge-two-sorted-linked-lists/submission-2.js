/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// receive the head of 2 ordered linked lists
// return the head of a new ordered list formed by the merge of both
//Input: list1 = [1,2,4], 
    // list2 = [1,3,5]
// Output: [1,1,2,3,4,5]

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummy = new ListNode()
        let curr = dummy

        while(list1 && list2){
            if(list1.val < list2.val){
                curr.next = list1
                list1 = list1.next
            } else {
                curr.next = list2
                list2 = list2.next
            }

            curr = curr.next
        }

        if(list1){
            curr.next = list1
        }

        if(list2){
            curr.next = list2
        }

        return dummy.next
    }
}
