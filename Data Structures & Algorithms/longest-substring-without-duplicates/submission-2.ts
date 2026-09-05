class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let i = 0, j = 0
        const set: Set<string> = new Set()
        let maxWindow = 0

        while (j < s.length) {
            if (set.has(s.charAt(j))){
                set.delete(s.charAt(i))
                i++
            } else {
                set.add(s.charAt(j))
                j++
                maxWindow = Math.max(maxWindow, j - i)
            }
        }

        return maxWindow
    }
}
