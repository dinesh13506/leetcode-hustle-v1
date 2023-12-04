/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function(purchaseAmount) {
    let init = 100;
    if(purchaseAmount % 10 == 0) {
        return init - purchaseAmount;
    }
    
    let getFirstDigit = (num) => {
        let ans = num+"";
        if(ans.length == 1) {
            return 0;
        }
        return parseInt(ans.charAt(0));
    }
    
    let first = getFirstDigit(purchaseAmount);
    let ans = Infinity;
    let amt = 0;
    //console.log(first)
    let near = (first)*10;
    ans = Math.min(Math.abs(near - purchaseAmount), ans);
    if(Math.abs((first+1) * 10 - purchaseAmount) <= ans) {
        ans = Math.min(Math.abs((first+1) * 10 - purchaseAmount), ans);
        near = Math.max((first + 1) * 10, near)
    }
    
    return init - near;
    
};