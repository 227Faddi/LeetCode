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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */

    // receive an array with k lists
    // return a single ordered linked list, from all the others
    // Input: lists = [[1,2,4],[1,3,5],[3,6]]
    // Output: [1,1,2,3,3,4,5,6]

    // bruteforce: check all the values in all the lists and add them into an array
    // sort the array, and use the values to create a new linked list to return

    // optimal: merge 2 lists at the time, until all the lists are merged in 1
    // so while the list array is > 1, loop through it and merge couples of linked list
    // after update the lists array to be equal to the merged linked lists
    // do it until the list has one element, that will be a linked list with all the values ordered

    // create an helper function to merge sort lists
    // check if the list is not empty

    mergeKLists(lists) {
        if(!lists || lists.length === 0) return null

        while(lists.length > 1){
            let merged = []
            for(let i = 0; i < lists.length; i += 2){
                let l1 = lists[i]
                let l2 = lists[i + 1]

                merged.push(this.mergeLists(l1, l2))
            }
            lists = merged
        }

        return lists[0]
    }

    mergeLists(l1, l2){
        let dummy = new ListNode()
        let tail = dummy

        while(l1 && l2){
            if(l1.val < l2.val){
                tail.next = l1
                l1 = l1.next
            } else {
                tail.next = l2
                l2 = l2.next
            }

            tail = tail.next
        }

        tail.next = l1 ? l1 : l2
        return dummy.next        
    }
}
