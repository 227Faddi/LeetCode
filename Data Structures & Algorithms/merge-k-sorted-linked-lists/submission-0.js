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

    // receive a k number of linked list
    // we can receive empty lists
    // return a linked list ordered
    // after merging all the k lists we receive

    // Input: lists = [[1,2,4],[1,3,5],[3,6]]
    // [1,1,3]

    // Output: [1,1,2,3,3,4,5,6]


    // create a dummy data to start the new list
    // put all the values from the k lists in an array then sort the array
    // and put all the values in a new list 

    mergeKLists(lists) {
        let dummy = new ListNode()
        let tail = dummy
        let arr = []

        for(const head of lists){
            let curr = head
            while(curr){
                arr.push(curr.val)
                curr = curr.next
            }
        }

        arr = arr.sort((a,b) => a - b)
        for(const num of arr){
            tail.next = new ListNode(num, null)
            tail = tail.next
        }

        return dummy.next
    }
}
