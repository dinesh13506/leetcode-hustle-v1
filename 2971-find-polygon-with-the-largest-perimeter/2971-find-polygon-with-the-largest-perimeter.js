var largestPerimeter = function(nums) {
    nums.sort((a, b) => a - b);
    let sum = 0;
    let ans = -1;
    if(nums.length < 3) return ans;
    for (let num of nums) {
        if (num < sum) {
            ans = num + sum;
        }
        sum += num;
    }
    return ans;
};