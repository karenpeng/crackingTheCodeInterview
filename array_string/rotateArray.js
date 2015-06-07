/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  var n = nums.length
  k %= n
  //console.log('k ' + k)
  reverse(nums, 0, n - k - 1)
  //console.log('? ' + nums)
  reverse(nums, n - k, n - 1)
  //console.log('? ' + nums)
  reverse(nums, 0, n - 1)
  //console.log('? ' + nums)
  console.log('result ' + nums)
}

// function reverse(arr, begin, end, log){
//   for(var i = begin; i < (begin + end)/2; i++){
//     var temp = arr[i]
//     arr[i] = arr[end - i]
//     arr[end - i] = temp
//   }
//   //console.log('reverse ' + begin + ' ' + end + ' ' + arr)
// }
function reverse(arr, begin, end){
  while(begin < end){
    var temp = arr[begin]
    arr[begin] = arr[end]
    arr[end] = temp
    begin ++
    end --
  }
}

rotate([1,2,3], 1)

rotate([1], 1)

rotate([1,2,3], 0)

rotate([1,2], 1)

rotate([2,3], 2)

