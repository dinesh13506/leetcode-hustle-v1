/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function(jobDifficulty, d) {
    
    let n = jobDifficulty.length
    //given condition is that user has to do atleast one job per day
    //if days are more and jobs are less then it is not possible
    if(n < d) {
        return -1
    }
    let hardestJobRemaining = new Array(n)
    let max = -Infinity
    for(let i = n - 1; i >=0 ; i--) {
        max = Math.max(jobDifficulty[i],max)
        hardestJobRemaining[i] = max
    }
    //console.log(hardestJobRemaining)
    let memo = new Array(n)
    for(let i = 0; i < n; i++) {
        let temp = new Array(d + 1) // d >=1
        temp.fill(-1)
        memo[i] = temp
    }
    //console.log(memo)
    
    let dp = function(i,day) {
        if(d === day) {
            return hardestJobRemaining[i]
        }
        if(memo[i][day] === -1) {
            let best = Infinity
            let hardest = 0
            for(let j = i; j < (n - d + day); j++) {
                hardest = Math.max(hardest,jobDifficulty[j])
                best = Math.min(hardest + dp(j + 1,day + 1 ),best)
            }
            memo[i][day] = best
            
        }
        return memo[i][day]
    }
    return dp(0,1)
};