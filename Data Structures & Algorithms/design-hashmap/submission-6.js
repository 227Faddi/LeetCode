class ListNode {
    constructor(key = -1, value = -1, next = null) {
        this.key = key
        this.value = value
        this.next = next
    }
}

class MyHashMap {

    hash(key){
        return key % this.map.length
    }

    constructor() {
        this.map = []

        for(let i = 0; i < 1000; i++){
            this.map[i] = new ListNode()
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let curr = this.map[this.hash(key)]

        while(curr.next){
            if(curr.next.key === key){
                curr.next.value = value
                return
            }
            curr = curr.next
        }

        curr.next = new ListNode(key, value)
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let curr = this.map[this.hash(key)].next

        while(curr){
            if(curr.key === key){
                return curr.value
            }
            curr = curr.next
        }

        return -1
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let curr = this.map[this.hash(key)]

        while(curr && curr.next){
            if(curr.next.key === key){
                curr.next = curr.next.next
                return 
            }
            curr = curr.next
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
