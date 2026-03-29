class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        for (let i = 0; i < tokens.length ; i++ ){
            let token = tokens[i]
            if(token === '+'|| token === '-' || token === '*' || token === '/'){
                let b = stack.pop()
                let a = stack.pop()

                if(token === '+') stack.push(a + b)
                else if(token === '-') stack.push(a - b)
                else if(token === '*') stack.push(a * b)
                else if(token === '/') stack.push(Math.trunc(a / b))

            }
            else{
                stack.push(Number(token))
            }
        }
        return stack[0]

    }
}
