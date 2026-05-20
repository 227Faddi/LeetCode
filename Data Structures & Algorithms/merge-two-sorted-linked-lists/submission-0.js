/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// receive 2 linked list sorted
// merge them and return a sorted linked list
// with all the values from the previous lists
// Input: list1 = [1,2], list2 = [1,3,5]
// Output: [1,1,2,3]

// create 2 pointers for each list
// go through each node of the 2 list
// and compare then
// add the smallest value first to a new linked list
// then add the list2 value
// do this only until the smaller list

// if one of the list still contains values, 
// then add those values

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */

    mergeTwoLists(list1, list2) {
        let result = new ListNode()
        let tail = result

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
        } else if(list2){
            tail.next = list2
        }

        return result.next
    }
}
