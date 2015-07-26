function main(nums){
  var list = []
  var result = []
  var begin = 0
  nums.sort(function(a, b){
    return a - b
  })
  helper(nums, list, result, begin)
  return result
}

function helper(nums, list, result, begin){
  result.push(deepCopy(list))
  for(var i = begin; i < nums.length; i++){
    list.push(nums[i])
    begin++
    helper(nums, list, result, begin)
    list.pop()
  }
}

function deepCopy(list){
    var arr = []
    list.forEach(function(e){
        arr.push(e)
    })
    return arr
}

console.log(main([1,2,3]))