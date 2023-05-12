/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    
    const n = questions.length;
    let memo = new Array(n);
    memo.fill(null);
    let dp = (i) => {
        if(i >= n) return 0;
        if(memo[i] != null) return memo[i];
        //take
        let ans1 = questions[i][0] + dp(i + questions[i][1] + 1);
        //not take
        let ans2 = 0 + dp(i + 1);
        memo[i] =  Math.max(ans1, ans2);
        return memo[i];
    }
    
    return dp(0);
};