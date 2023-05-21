const ManhattanDis = (p1, p2) => Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);

const shortestBridge = (g) => {
    let [area1, area2] = getAllAreasCoordinates(g), res = Number.MAX_SAFE_INTEGER;
    for (const p1 of area1) {
        for (const p2 of area2) {
            res = Math.min(res, ManhattanDis(p1, p2) - 1);
        }
    }
    return res;
};

const dx = [1, -1, 0, 0], dy = [0, 0, 1, -1];
const getAllAreasCoordinates = (g) => { 
    const allow = 1, forbid = 0, floodFillMakeConnected = 'x';
    let n = g.length, m = g[0].length, res = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (g[i][j] == allow) {
                let q = [[i, j]], area = [];
                while (q.length) {
                    let [x, y] = q.shift();
                    for (let k = 0; k < 4; k++) {
                        let nx = x + dx[k], ny = y + dy[k];
                        if (nx < 0 || nx >= n || ny < 0 || ny >= m || g[nx][ny] == forbid || g[nx][ny] == floodFillMakeConnected) continue;
                        g[nx][ny] = floodFillMakeConnected;
                        area.push([nx, ny])
                        q.push([nx, ny]);
                    }
                }
                if (area.length == 0) area.push([i, j]); // difference
                res.push(area);
            }
        }
    }
    return res;
};