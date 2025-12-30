// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

function maxProfit(prices: number[]): number {
  let buy = prices[0]
  let profit = 0

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i]

    if (price < buy) {
      buy = price
    } else if (price - buy > profit) {
      profit = price - buy
    }
  }

  return profit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])) // 5

console.log(maxProfit([7, 6, 4, 3, 1])) // 0

export { }
