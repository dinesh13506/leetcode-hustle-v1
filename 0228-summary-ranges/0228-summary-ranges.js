/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    
    let ans = [];
    let start;
    let end;
    for(let num of nums) {
        if(start == undefined && end == undefined) {
           start = num;
           end = num;
        } else {
            if(end + 1 == num) {
                end = num;
            } else {
                if(start == end) {
                    ans.push(`${start}`);
                } else {
                    ans.push(`${start}->${end}`);
                }
                start = num;
                end = num;
            }
        }
    }
    if(start != undefined && end != undefined) {
        if(start == end) {
            ans.push(`${start}`);
        } else {
            ans.push(`${start}->${end}`);
        } 
    }
    
    return ans;
    
};