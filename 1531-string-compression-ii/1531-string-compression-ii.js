var getLengthOfOptimalCompression = function (s, k) {
    var dp = Array.from({ length: s.length }, () =>
        new Uint8Array(k + 1).fill(101)
    );

    var dfs = (i, k) => {
        if (i + k >= s.length) return 0;
        if (k < 0) return 101;
        if (dp[i][k] !== 101) return dp[i][k];

        var res = dfs(i + 1, k - 1); // Skip this character
        var diff = 0, same = 0, length = 0;

        // For all continuous s[i] characters (can skip k characters)
        for (var j = i; j < s.length && k - diff >= 0; ++j) {
            if (s[i] === s[j]) {
                ++same;
                if (same <= 2 || same === 10 || same === 100) ++length;
            } else ++diff;
            res = Math.min(res, length + dfs(j + 1, k - diff));
        }

        return (dp[i][k] = res);
    };

    return dfs(0, k);
};