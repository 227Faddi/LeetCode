class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
const adjacencyL = {};

        for (const word of words) {
            for (const char of word) {
                adjacencyL[char] = new Set();
            }
        }

        for (let i = 0; i < words.length - 1; i++) {
            const w1 = words[i];
            const w2 = words[i + 1];
            const minL = Math.min(w1.length, w2.length);

            if (w1.length > w2.length && w1.slice(0, minL) === w2.slice(0, minL)) {
                return '';
            }

            for (let j = 0; j < minL; j++) {
                if (w1[j] !== w2[j]) {
                    adjacencyL[w1[j]].add(w2[j]);
                    break;
                }
            }
        }

        const visited = {};
        const res = [];

        function dfs(char) {
            if (char in visited) return visited[char];
            visited[char] = true;

            for (const neighChar of adjacencyL[char]) {
                if (dfs(neighChar)) return true;
            }

            visited[char] = false;
            res.push(char);
            return false;
        }

        for (const char in adjacencyL) {
            if (dfs(char)) return '';
        }

        res.reverse();
        return res.join('');
    }
}
