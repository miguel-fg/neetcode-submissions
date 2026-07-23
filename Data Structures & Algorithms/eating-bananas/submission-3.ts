class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let low = 0, high = 0

        piles.forEach((p) => {
            low = Math.min(low, p)
            high = Math.max(high, p)
        })

        let minTime = low
        
        while (low <= high) {
            let k = low + Math.floor((high - low) / 2)

            let hoursUsed = 0

            piles.forEach((p) => {
                hoursUsed += Math.ceil(p / k)
            })

            if (hoursUsed <= h) {
               minTime = k 
               high = k - 1
            } else {
                low = k + 1
            }
        }

        return minTime
    }
}
