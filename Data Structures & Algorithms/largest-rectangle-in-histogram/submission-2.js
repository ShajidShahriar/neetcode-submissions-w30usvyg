class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0;
    let stack = []; 
    
    
    heights.push(0);

    for (let i = 0; i < heights.length; i++) {
        
        while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
            
            let poppedIndex = stack.pop();
            let currentHeight = heights[poppedIndex];
            
            let currentWidth;
            if (stack.length === 0) {
                currentWidth = i; 
            } else {
                currentWidth = i - stack[stack.length - 1] - 1;
            }
            
            maxArea = Math.max(maxArea, currentHeight * currentWidth);
        }
        
        stack.push(i);
    }

    return maxArea;
    }
}
