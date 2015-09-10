/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if(nums.length === 0) return 0
  if(nums.length === 1) return 1
  nums = mergeSort(0, nums.length-1, nums)
  var count1 = 1
  var count2 = 1
  var max = 1
  console.log(nums)
  for(var i = 0; i < nums.length-1; i++){
      if(nums[i+1] === nums[i] + 1) {
          count1 ++
          max = Math.max(max, count1)
          count2 = 1
      }else if(nums[i+1] === nums[i] - 1){
          count2++
          console.log(count2)
          max = Math.max(max, count2)
          count1 = 1
      }
      else {
        count1 = 1
        count2 = 1
      }
  }
  console.log(max)
  return max
};

function mergeSort(start, end, array){
    if(start === end) return [array[start]]
    
    var mid = Math.floor((start + end) / 2)
    
    var l = mergeSort(start, mid, array)
    var r = mergeSort(mid+1, end, array)
    
    return merge(l, r)
}

function merge(arr1, arr2){
    var arr = []
    var i = 0
    var j = 0
    while(i<arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            arr.push(arr1[i])
            i++
        }else{
            arr.push(arr2[j])
            j++
        }
    }
    while(i<arr1.length ){
         arr.push(arr1[i])
         i++
    }
    
    while(j<arr2.length){
        arr.push(arr2[j])
        j++
    }
    return arr
}

longestConsecutive([1, 2, 0, 1])