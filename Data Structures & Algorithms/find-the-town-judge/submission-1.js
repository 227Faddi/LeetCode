class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        let incoming = new Map()
        let outgoing = new Map()

        for(let i = 1; i <= n; i++){
            incoming.set(i, 0)
            outgoing.set(i, 0)
        }

        for(const [one, two] of trust){
            outgoing.set(one, outgoing.get(one) + 1);
            incoming.set(two, incoming.get(two) + 1);
        }

        for(let i = 1; i <= n; i++){
            if(outgoing.get(i) === 0 && incoming.get(i) === (n - 1)){
                return i
            }
        }

        return -1
    }
}
