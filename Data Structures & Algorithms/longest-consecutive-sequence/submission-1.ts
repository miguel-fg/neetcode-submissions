class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set(nums)
        let max = 0

        for(const num of nums) {
            let seq = 1
            if (!set.has(num - 1)){
                let curr = num
                while (set.has(curr + 1)){
                    curr++
                    seq++
                }
            }
            max = Math.max(max, seq)
        }

        return max
    }

    // (2, 20, 4, 10, 3, 4, 5)
    // Seq: 
}
