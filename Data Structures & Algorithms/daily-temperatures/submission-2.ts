class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const output: number[] = Array(temperatures.length).fill(0)
        const stack: [number, number][] = [] // [temp, index]

        for(let i = 0; i < temperatures.length; i++){
            while (stack.length && temperatures[i] > stack[stack.length - 1][0]){
                const [_, idx] = stack.pop()
                output[idx] = i - idx
            }
            stack.push([temperatures[i], i])
        }

        return output
    }
}
