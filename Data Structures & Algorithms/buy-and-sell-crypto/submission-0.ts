class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let i = 0, j = 1

        let max = 0
        while (j < prices.length && i < j){
            const profit = prices[j] - prices[i]
            if (profit < 0){
                i++
                j = i + 1
            } else {
                max = Math.max(max, profit)
                j++
            }
        }

        return max
    }
}
