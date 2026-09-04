class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        if (s.length < 2) return true

        let i = 0, j = s.length - 1

        while (i <= j) { 
            while (!this.isAlphaNum(s.charAt(i)) && i < j) i++
            while (!this.isAlphaNum(s.charAt(j)) && j > i) j--
            
            if (s.charAt(i).toLowerCase() !== s.charAt(j).toLowerCase()) return false

            i++
            j--
        }

        return true
    }

    isAlphaNum(c: string): boolean {
        const code = c.charCodeAt(0)
        return (code >= "a".charCodeAt(0) && code <= "z".charCodeAt(0)) ||
            (code >= "A".charCodeAt(0) && code <= "Z".charCodeAt(0)) ||
            (code >= "0".charCodeAt(0) && code <= "9".charCodeAt(0))
    }
}
