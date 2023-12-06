/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    
    let money = new Array(7);
    money.fill(0);
    let i = 0;
    let sum = 0;
    while(i < n) {
        for(let j = 0; j < 7; j++) {
            if(j == 0) {
               money[j] = money[j] + 1;
            } else {
                money[j] = money[j-1] + 1;
            }
            sum += money[j];
            i++;
            if(i >= n) {
                break;
            }
        }
    }
    return sum;
    
};