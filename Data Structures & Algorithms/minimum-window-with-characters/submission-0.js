class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */

    // receive 2 strings
    // return the smallest substring with chars from t
    // not in the same order

    // looping through the s string with 2 pointers to create a window
    // increase both pointers until l hit one of the value of t

    // s = "OUZODYXAZV" 
    // t = "XYZ"

    // use a set to know if the string is valid
    // save all valide string and only update if the length is smaller than the cirrent one

    minWindow(s, t) {
        if (t === "") return "";

        let countT = new Map();
        let window = new Map();

        for (const c of t) {
            countT.set(c, (countT.get(c) || 0) + 1);
        }

        let have = 0;
        let need = countT.size;

        let res = [];
        let resLen = Infinity;
        let l = 0;
        let r = 0;

        while (r < s.length) {
            let c = s[r];        
            window.set(c, (window.get(c) || 0) + 1);

            if (countT.has(c) && window.get(c) === countT.get(c)) {
                have += 1;
            }

            while (have === need) {
                if (r - l + 1 < resLen) {
                    res = [l, r];
                    resLen = (r - l + 1);
                }

                window.set(s[l], window.get(s[l]) - 1);
                if (countT.has(s[l]) && window.get(s[l]) < countT.get(s[l])) {
                    have -= 1;
                }
                l++;
            }
            r++;
        }

        return resLen === Infinity ? "" : s.slice(res[0], res[1] + 1);
    }
}
