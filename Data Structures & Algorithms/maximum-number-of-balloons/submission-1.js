class Solution {
    /**
     * @param {string} text
     * @return {number}
     */

    // receive a string
    // return a number representing
    // how many times we can create the word ballon
    // using each char one time only
    // store all the chaer of ballon in an hashmap


    maxNumberOfBalloons(text) {
        let target = new Map([
            ["b", 0],
            ["a", 0],
            ["l", 0],
            ["o", 0],
            ["n", 0],
        ])

        for(let i = 0; i < text.length; i++){
            if(target.has(text[i])){
                target.set(text[i], target.get(text[i]) + 1)
            }
        }

        target.set('l', Math.floor(target.get('l') / 2));
        target.set('o', Math.floor(target.get('o') / 2));
        return Math.min(...target.values())
    }
}
