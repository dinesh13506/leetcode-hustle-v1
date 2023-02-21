/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    
    let bs = (start, end) => {
        if(start > end) {
            return null;
        }
        let mid = start + parseInt((end - start) / 2);
        //console.log(start, end, mid, nums[mid]);
        if(mid - 1 >= 0 && mid + 1 <= nums.length -1) {
            if(nums[mid] != nums[mid-1] && nums[mid] != nums[mid+1]) {
                //console.log("mid1 => ", mid)
                return nums[mid];
            }
            let ans1 = bs(start, mid - 1);
            let ans2 = bs(mid+1, end);
            //console.log(ans1, ans2)
            return ans1 ? ans1 : ans2;
        }
         return null;
        }
    
    if(nums.length == 1) {
        return nums[0];
    }
    else if(nums[0] != nums[1]) return nums[0];
    else if(nums[nums.length -1] != nums[nums.length-2]) return nums[nums.length -1];
    return bs(0, nums.length -1);
};