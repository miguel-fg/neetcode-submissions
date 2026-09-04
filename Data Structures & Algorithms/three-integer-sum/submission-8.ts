class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const output: [number, number, number][] = []
        nums.sort((a, b) => a - b)

        let i = 0
        while (i < nums.length - 2){
            let j = i + 1, k = nums.length - 1

            while (j < k){
                const sum = nums[i] + nums[j] + nums[k]
                
                if (sum === 0) {
                    output.push([nums[i], nums[j], nums[k]])

                    while (j < k && nums[j] === nums[j + 1]) j++
                    while (k > j && nums[k] === nums[k - 1]) k--

                    j++
                    k--
                } 
                else if (sum > 0){
                    k--
                } else {
                    j++
                } 
            }

            while(i < nums.length - 2 && nums[i] === nums[i + 1]) i++
            i++
        }

        return output
    }
}
