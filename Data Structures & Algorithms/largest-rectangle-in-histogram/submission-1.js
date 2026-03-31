class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0;
    let stack = []; // Storing indices, exactly like Car Fleet
    
    // The Bulldozer Trick: Force the stack to completely flush at the very end
    heights.push(0);

    for (let i = 0; i < heights.length; i++) {
        
        // If the current bar is SHORTER than the top of the stack, we hit a wall.
        // Time to pop and calculate.
        while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
            
            let poppedIndex = stack.pop();
            let currentHeight = heights[poppedIndex];
            
            let currentWidth;
            if (stack.length === 0) {
                // No left wall. Stretches all the way to index 0.
                currentWidth = i; 
            } else {
                // Trapped between the current index (right wall) and the new top (left wall)
                currentWidth = i - stack[stack.length - 1] - 1;
            }
            
            // Calculate area and check if it's our new personal best
            maxArea = Math.max(maxArea, currentHeight * currentWidth);
        }
        
        // The current bar is taller or equal, push its index to wait.
        stack.push(i);
    }

    return maxArea;
    }
}
