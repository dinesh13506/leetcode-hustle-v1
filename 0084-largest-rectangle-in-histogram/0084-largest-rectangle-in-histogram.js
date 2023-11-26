/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const stack = [];
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
      const height = heights[stack.pop()];
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    const height = heights[stack.pop()];
    const width = stack.length === 0 ? heights.length : heights.length - stack[stack.length - 1] - 1;
    maxArea = Math.max(maxArea, height * width);
  }

  return maxArea;
};