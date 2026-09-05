class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let max = Math.max(...piles)
        let k = max
        let l = 1, r = max

        while (l <= r){
            const mid = l + Math.floor((r - l) / 2)
            let hours = 0

            for (let i = 0; i < piles.length; i++){
                hours += Math.ceil(piles[i] / mid)
            }

            if (hours > h){
                l = mid + 1
            } else {
                k = mid
                r = mid - 1
            }
        }

        return k 
    }
}
