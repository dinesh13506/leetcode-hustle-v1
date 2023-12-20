/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    
    prices.sort((a,b) => {
        return a - b;
    });
    let sum = prices[0] + prices[1];
    if(sum > money) return money;
    else return money - sum;
};