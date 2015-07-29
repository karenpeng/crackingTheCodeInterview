//http://www.lintcode.com/en/problem/subarray-sum/

//Given an integer array, find a subarray where the sum of numbers is zero.
//Your code should return the index of the first number and the index of the last number.

function subarraySum(nums){
  var hash = {}
  var result = []

  var sum = 0

  //这里好巧妙啊好巧妙啊好巧妙啊好巧妙啊！！！！！！！
  //前-1个元素和是0
  hash[0] = -1

  for(var i = 0; i < nums.length; i++){
    sum += nums[i]
    console.log(hash, sum, i)
    if(hash.hasOwnProperty(sum)){
      //从hash[sum]到i， sum竟然相等
      //证明hash[sum]+1 到 i 这段什么都没加进来， 其实就是0
      result.push(hash[sum]+1, i)
      return result
    }
    hash[sum] = i
  }

}

console.log(subarraySum([-3, 1, 2, -3, 4]))
console.log(subarraySum([1, -1]))