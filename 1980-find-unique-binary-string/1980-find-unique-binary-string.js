/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let n = nums.length;
    let set = new Set();
    for(let num of nums) {
        set.add(num);
    }
    
    let find = (str, len) => {
        if(len > n) return false;
        
        if(len == n) {
            if(set.has(str) == false) {
                return str;
            }
            return
        }
        
        //take 0
        let ans1 = find(str + '0', len+1);
        if(ans1) {
            return ans1
        }
        //take 1
        let ans2 = find(str + '1', len+1);
        if(ans2) {
            return ans2;
        }
    }
    
    return find('',0);
};