class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 0) return 0;
        if (nums.length === 1) return nums[0];

        function dp(i, arr, cache) {
            if (i === 0) return arr[0];
            if (i === 1) return Math.max(arr[0], arr[1]);
            if (cache.has(i)) return cache.get(i);

            const best = Math.max(
                arr[i] + dp(i - 2, arr, cache),
                dp(i - 1, arr, cache)
            );
            cache.set(i, best);
            return best;
        }

        const skipFirst = nums.slice(1);
        const skipLast = nums.slice(0, -1);

        const robFromFirst = dp(skipFirst.length - 1, skipFirst, new Map());
        const robFromLast = dp(skipLast.length - 1, skipLast, new Map());

        return Math.max(robFromFirst, robFromLast);
    }
}