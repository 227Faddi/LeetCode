class ListNode {
    constructor(key, val){
        this.key = key
        this.val = val
        this.prev = null
        this.next = null
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity
        this.cache = new Map()

        this.head = new ListNode(0, 0)
        this.tail = new ListNode(0, 0)
        this.head.next = this.tail
        this.tail.prev = this.head
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {    
        const node = this.cache.get(key)
        if(node){
            this.remove(node)
            this.insert(node)
            return node.val
        } else{
            return -1  
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)){
            this.remove(this.cache.get(key))
            this.cache.delete(key)
        }

        const newNode = new ListNode(key, value)
        this.cache.set(key, newNode)
        this.insert(newNode)

        if(this.cache.size > this.cap){
            const lru = this.head.next
            this.remove(lru)
            this.cache.delete(lru.key)
        }
    }

    remove(node){
        node.prev.next = node.next
        node.next.prev = node.prev
    }

    insert(node){
        const prev = this.tail.prev;
        prev.next = node;
        node.prev = prev;
        node.next = this.tail;
        this.tail.prev = node;
    }
}
