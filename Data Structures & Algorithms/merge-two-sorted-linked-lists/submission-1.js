/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// receive 2 sorted linked lists
// return a new list formed by both lists and keep it sorted
// Input: list1 = [1,2,4,5,10], list2 = [1,3]
// Output: [1,1,2,3,4,5,10]

// create 2 pointer, one for each list
// check each value and put the smallest in the new list
// once one of the 2 pointes goes out of bound
// exit the loop 
// add the rest of the list that remains

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        //Input: list1 = [1,2,4], 
        //       list2 = [1,3,5]
        //Output: [1,1,2,3,4,5]
        let res = new ListNode()
        let tail = res

        while(list1 && list2){
            if(list1.val < list2.val){
                tail.next = list1
                list1 = list1.next
            } else{
                tail.next = list2
                list2 = list2.next
            }

            tail = tail.next
        }

        if(list1){
            tail.next = list1
        }

        if(list2){
            tail.next = list2
        }

        return res.next
    }
}
