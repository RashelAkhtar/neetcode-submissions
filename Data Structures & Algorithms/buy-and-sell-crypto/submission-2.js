class Solution {
    maxProfit(prices) {
        let maxProfit = 0;
        let minPrice = prices[0];

        for (let i=0; i<prices.length; i++) {
           if (minPrice > prices[i]) minPrice = prices[i];
           let profit = prices[i] - minPrice;
           if (profit > maxProfit) maxProfit = profit;
        }

        return maxProfit;
    }
}
