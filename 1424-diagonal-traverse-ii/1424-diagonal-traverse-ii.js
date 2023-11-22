/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    
    let rows = nums.length, cols = nums[0].length;
    for(let row of nums) {
        cols = Math.max(row.length, cols);
    }
    let r = 0;
    let ans = [];
    while(r < rows) {
        let p1 = r;
        let p2 = 0;
        while(p1 >= 0 && p2 < cols) {
            if(nums[p1][p2]) ans.push(nums[p1][p2]);
            p1--;
            p2++;
        }
        r++;
    }
    let c = 1;
    while(c < cols) {
        let p1 = rows - 1;
        let p2 = c;
        while(p1 >= 0 && p2 < cols) {
            if(nums[p1][p2]) ans.push(nums[p1][p2]);
            p1--;
            p2++;
        }
        c++;
    }
    return ans;
    
};