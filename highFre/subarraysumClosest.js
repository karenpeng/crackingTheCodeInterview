function subarraySumClosest(nums){
  if(nums.length === 0 || nums === null) return []

  var haha = []

  var sum = 0

  for(var i = 0; i < nums.length; i++){
    sum += nums[i];
    haha.push({sum: sum, index: i})
  }

  haha.sort(function(a, b){
    return a.sum - b.sum
  })

  //console.log(haha)

  var gap = Infinity
  var tem = []
  var result = []

  console.log(haha)

  haha.reduce(function(a, b){
    if( Math.abs(a.sum - b.sum) < gap){
      result = []
      gap =  Math.abs(a.sum - b.sum)
      tem = [Math.min(a.index, b.index)+1, Math.max(a.index, b.index)]
      result.push(tem)
    }
    return b
  })
  //下面的是等价上面的
  // for(var i = 0; i< haha.length-1; i++){
    
  //   if(gap > Math.abs(haha[i].sum - haha[i+1].sum)){
      
  //     result = []
  //     gap = Math.abs(haha[i].sum - haha[i+1].sum)
  //     tem = [Math.min(haha[i].index, haha[i+1].index) + 1, Math.max(haha[i].index, haha[i+1].index)]
  //     result.push(tem)
  //     console.log(result)
  //   }
  // }

  //result.push(tem)
  console.log(result)
  return result

}

subarraySumClosest( [-3, 1, 1, -3, 5])