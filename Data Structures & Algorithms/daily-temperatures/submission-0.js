class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result  = new Array(temperatures.length).fill(0)
        let stack = []

        for (let i = 0; i < temperatures.length ; i++ ){
            let currentTemp = temperatures[i]

            while(stack.length > 0 && currentTemp > temperatures[stack[stack.length - 1]]){
                let poppedIndex = stack.pop()

                let daysWaited = i  - poppedIndex

                result[poppedIndex] = daysWaited 
            }
            stack.push(i)
        } 
        return result 
        
    }   
    
}
