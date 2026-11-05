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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
       // receive 2 sorted linked list

       // create the new list to merge
       // create pointers for each list
       // loop until we are done with the shortest list
       // append all the remeaning nodes from the longer list
       // return the head of the merged list

       if(!list1 && !list2) return null

        let head = new ListNode()
        let curr = head
        let curr1 = list1
        let curr2 = list2

        while(curr1 && curr2){
            if(curr1.val <= curr2.val){
                console.log(curr1.val) 
                curr.next = curr1
                curr1 = curr1.next
            } else {
                console.log(curr2.val) 
                curr.next = curr2
                curr2 = curr2.next
            }

            curr = curr.next
       }


       if(curr1){
        curr.next = curr1
       }

        if(curr2){
        curr.next = curr2
       }

       return head.next
    }
}
