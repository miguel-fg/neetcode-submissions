class MinStack {
    items: number[]
    minStack: number[]

    constructor() {
        this.items = []
        this.minStack = [Infinity]
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.items.push(val)
        this.minStack.push(
            Math.min(val, this.minStack[this.minStack.length - 1])
        )
    }

    /**
     * @return {void}
     */
    pop(): void {
        if (this.items.length){
            this.items.pop()
            this.minStack.pop()
        }
        
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.items[this.items.length - 1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length - 1]
    }
}
