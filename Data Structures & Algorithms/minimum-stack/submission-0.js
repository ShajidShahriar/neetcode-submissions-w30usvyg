class MinStack {
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.stack.length === 0){
            this.stack.push({value: val , min: val})
        }
        else{
            let previousMin = this.stack[this.stack.length - 1].min
            this.stack.push({
                value: val,
                min: Math.min(val,previousMin)
            })
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1].value

    }

    /**
     * @return {number}
     */
    getMin() {
                return this.stack[this.stack.length - 1].min

    }
}
