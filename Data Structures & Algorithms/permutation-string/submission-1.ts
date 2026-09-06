class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false
        const s1Map = new Map<string, number>()
        const s2Map = new Map<string, number>()

        for (const c of s1) {
            s1Map.set(c, (s1Map.get(c) || 0) + 1)
        }

        let i = 0, j = 0
        while (j < s2.length){
            const char = s2.charAt(j)

            if (!s1Map.has(char)){
                i = j + 1
                j = i
                s2Map.clear()
                continue
            }

            if ((s2Map.get(char) || 0) < s1Map.get(char)) {
                s2Map.set(char, (s2Map.get(char) || 0) + 1)

                if (j - i + 1 === s1.length) return true

                j++
            } else {
                const charI = s2.charAt(i)
                s2Map.set(charI, s2Map.get(charI) - 1)
                i++
            }
        }

        return false
    }
}
