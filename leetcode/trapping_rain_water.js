/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  
  var leftMax = []
  leftMax[0] = 0
  for(var i = 0; i < height.length; i++){
      leftMax[i+1] = Math.max(leftMax[i], height[i]) 
  }
  console.log(leftMax)
  
  var rightMax = []
  rightMax[height.length - 1] = 0
  for(var i = height.length - 1; i >= 0; i--){
      rightMax[i-1] = Math.max(rightMax[i], height[i]) 
  }

  console.log(rightMax)
  var area = 0;
  for(var i = 1; i < height.length-1; i++){
      if(leftMax[i] > height[i] && rightMax[i] > height[i]){
        console.log(i)
        area += Math.min(leftMax[i], rightMax[i]) - height[i] 
      }
  }
  return area
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))