class ListNode {
    constructor(key = -1, val = -1, next = null, prev = null) {
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
        this.detach(node)
        this.insert(node)
        return node.val
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)){
            let node = this.cache.get(key)
            node.val = value
            this.detach(node)
            this.insert(node)
            return
        }

        const node = new ListNode(key, value)
        this.cache.set(key, node)
        this.insert(node)

        if(this.cache.size > this.capacity){
            this.removeTail()
        }
    }

    detach(node){
        node.prev.next = node.next
        node.next.prev = node.prev
    }

    insert(node){
        if(this.head.next === node) return

        let tmp = this.head.next
        this.head.next = node
        node.prev = this.head
        node.next = tmp
        tmp.prev = node
    }

    removeTail(){
        let tmp = this.tail.prev
        this.tail.prev = tmp.prev
        tmp.prev.next = this.tail
        this.cache.delete(tmp.key)
    }
}
