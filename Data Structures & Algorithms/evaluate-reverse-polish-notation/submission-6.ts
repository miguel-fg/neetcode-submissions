class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const ops: Set<string> = new Set(["+", "-", "*", "/"]) 
        const nums: number[] = [] // [22]

        for(const t of tokens){
            if (ops.has(t)){
                const n2 = nums.pop()
                const n1 = nums.pop()
                const res = this.eval(n1, n2, t)
                //console.log(`Evaluated: ${n1} ${t} ${n2} = ${res}`)
                nums.push(res)
            } else {
                nums.push(parseInt(t))
            }
        }

        return nums.pop()
    }

    eval(n1: number, n2: number, t: string): number {
        switch(t){
            case "+":
                return n1 + n2
            case "-":
                return n1 - n2
            case "*":
                return n1 * n2
            default:
                return Math.trunc(n1 / n2)
        }
    }
}
