class Solution {
    pacificAtlantic(heights) {
        const ROWS = heights.length;
        const COLS = heights[0].length;
        let pacific = new Set();
        let atlantic = new Set();

        function dfs(r, c, visit, prevHeight) {
            if (
                r < 0 || c < 0 || r === ROWS || c === COLS ||
                visit.has(`${r},${c}`) ||
                heights[r][c] < prevHeight
            ) {
                return;
            }

            visit.add(`${r},${c}`);

            dfs(r + 1, c, visit, heights[r][c]);
            dfs(r - 1, c, visit, heights[r][c]);
            dfs(r, c + 1, visit, heights[r][c]);
            dfs(r, c - 1, visit, heights[r][c]);
        }

        for (let c = 0; c < COLS; c++) {
            dfs(0, c, pacific, heights[0][c]);
            dfs(ROWS - 1, c, atlantic, heights[ROWS - 1][c]);
        }

        for (let r = 0; r < ROWS; r++) {
            dfs(r, 0, pacific, heights[r][0]);
            dfs(r, COLS - 1, atlantic, heights[r][COLS - 1]);
        }

        let res = [];
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (pacific.has(`${r},${c}`) && atlantic.has(`${r},${c}`)) {
                    res.push([r, c]);
                }
            }
        }

        return res;
    }
}