// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */

    // receive a linked list with 2 values
    // random can be null or a random node
    // return the deep copy of the list
    // the copy shouln't point to the original list

    // create a dummy node for the head of the copy
    // iterate through the list until we reach the end
    // while iterating copy each node and the next reference in the copy
    // iterate again to assign the random value

    copyRandomList(head) {
        const dummy = new Node()
        let currCopy = dummy
        let curr = head
        let map = new Map()

        while(curr){
            currCopy.next = new Node(curr.val, null, null)
            map.set(curr, currCopy.next)
            curr = curr.next
            currCopy = currCopy.next
        }

        let node = head
        let nodeCopy = dummy.next

        while(node){
            nodeCopy.random = map.get(node.random)
            node = node.next
            nodeCopy = nodeCopy.next
        }

        return dummy.next
    }
}
