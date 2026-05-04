class MyHashMap {


    constructor() {
        this.obj = {}
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.obj[key] = value
    // try to get the key if present
    // update or create pair
    // {1: 1}
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.obj[key] !== undefined){
            return this.obj[key]
        } else {
            console.log()
            return -1
        }
        //obj.(key)
        // if is not there then return -1
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        delete this.obj[key]
        //obj.delete(key)
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
