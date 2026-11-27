class ListNode {
    constructor(key = -1, val = -1, next = null, prev = null){
        this.key = key
        this.val = val
        this.next = next
        this.prev = prev
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.cache = new Map()
        this.head = new ListNode()
        this.tail = new ListNode()

        this.head.next = this.tail
        this.tail.prev = this.head
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.cache.has(key)) return -1
        const node = this.cache.get(key)

        node.prev.next = node.next
        node.next.prev = node.prev
        
        this.insertHead(node)

        return node.val
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)){
            const node = this.cache.get(key)
            node.val = value
            node.prev.next = node.next
            node.next.prev = node.prev
            this.insertHead(node)
            return
        }

        const node = new ListNode(key, value)
        this.insertHead(node)
        this.cache.set(key, node)

        if(this.cache.size > this.capacity){
            this.removeTail()
        }
    }

    insertHead(node){
        if(node === this.head.next) return
        let tmp = this.head.next
        this.head.next = node
        node.next = tmp
        tmp.prev = node
        node.prev = this.head
    }

    removeTail(){
        let tmp = this.tail.prev
        this.tail.prev = this.tail.prev.prev
        tmp.prev.next = this.tail
        this.cache.delete(tmp.key)
        tmp.prev = null
        tmp.next = null
    }
}
