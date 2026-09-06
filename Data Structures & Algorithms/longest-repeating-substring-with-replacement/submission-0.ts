class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const count = new Map<string, number>()
        let window = 0

        let i = 0, j = 0

        while (j < s.length){
            count.set(s.charAt(j), (count.get(s.charAt(j)) || 0) + 1)
 
            if ((j - i + 1) - Math.max(...count.values()) > k) {
               count.set(s.charAt(i), count.get(s.charAt(i)) - 1) 
               i++
            }

            window = Math.max(window, j - i + 1)
            j++
        }

        return window
    }
}
