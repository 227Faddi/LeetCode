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
        this.curr = this.map[this.hash(key)]

        while(this.curr.next){
            if(this.curr.next.key === key){
                this.curr.next.value = value
                return
            }
            this.curr = this.curr.next
        }

        this.curr.next = new ListNode(key, value)
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        this.curr = this.map[this.hash(key)].next

        while(this.curr){
            if(this.curr.key === key){
                return this.curr.value
            }
            this.curr = this.curr.next
        }

        return -1
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.curr = this.map[this.hash(key)]

        while(this.curr && this.curr.next){
            if(this.curr.next.key === key){
                this.curr.next = this.curr.next.next
                return 
            }
            this.curr = this.curr.next
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
