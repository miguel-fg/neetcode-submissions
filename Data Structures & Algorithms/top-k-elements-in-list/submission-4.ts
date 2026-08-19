class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const count: Map<number, number> = new Map()

        for(const num of nums){
            count.set(num, (count.get(num) || 0) + 1)
        }

        nums.sort((a, b) => count.get(b)! - count.get(a)!)
        const set: Set<number> = new Set()
        let i = 0

        while (set.size !== k){
            set.add(nums[i])
            i++
        }

        return Array.from(set)
    }
}
