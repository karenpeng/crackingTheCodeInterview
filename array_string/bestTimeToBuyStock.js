/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var min = Infinity
    var diff = 0
    var max = 0
    for(var i = 0; i < prices.length; i++){
        if(prices[i] < min) min = prices[i]
        diff = prices[i] - min
        if(diff>max) max = diff
    }
    return max
};