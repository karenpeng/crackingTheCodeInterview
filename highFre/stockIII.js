/**
 * @param {number[]} prices
 * @return {number}
 */

//omg this is DP!!
var maxProfit = function(prices) {
    if(prices.length <= 1) return 0

    var left = []
    var right = []
    
    left[0] = 0
    min = prices[0]
    
    for(var i = 1; i < prices.length; i++){
        min = Math.min(min, prices[i])
        left[i] = Math.max(left[i-1], prices[i] - min)
    }
    
    right[prices.length -1] = 0
    var max = prices[prices.length-1]
    
    for(i = prices.length-2; i>= 0; i--){
        max = Math.max(max, prices[i])
        right[i] = Math.max(right[i+1], max - prices[i])
    }

    var profit = 0
    for(i = 0; i < prices.length; i++){
        profit = Math.max(profit, left[i] + right[i])
    }

    return profit
};