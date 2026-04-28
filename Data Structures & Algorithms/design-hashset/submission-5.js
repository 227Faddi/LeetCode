class MyHashSet {
    constructor() {
        this.keyRange = 997
        this.buckets = []

        for(let i = 0; i < this.keyRange; i++){
            this.buckets[i] = new Bucket()
        }
    }

    hash(key){
        return key % this.keyRange
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        let index = this.hash(key)
        this.buckets[index].insert(key)
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let index = this.hash(key)
        this.buckets[index].remove(key)
    }
    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        let index = this.hash(key)
        return this.buckets[index].exists(key)
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

class Node {
    constructor(val, next = null){
        this.val = val
        this.next = next
    }
}

class Bucket {
    constructor(){
        this.head = new Node(-1)
    }

    exists(key){
        let curr = this.head

        while(curr){
            if(curr.val === key){
                return true
            }
            curr = curr.next
        }

        return false
    }

    insert(key){
        if(!this.exists(key)){
            const newNode = new Node(key, this.head.next)
            this.head.next = newNode
        }
    }

    remove(key){
        let prev = this.head
        let curr = this.head.next

        while(curr){
            if(curr.val === key){
                prev.next = curr.next
                return null
            }

            prev = curr
            curr = curr.next
        }
    }
}
