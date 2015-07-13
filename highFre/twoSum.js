/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(arr, target){
    var result = []
    if(arr.length < 1 || arr === null) return result
    arr = mergeSort(arr, 0, )
    console.log(arr)
    var i = 0
    var j = arr.length-1
    while(i < j){
        if(arr[i]+arr[j] === target){
            result.push(i+1, j+1)
            return result
        }
        else if(arr[i]+arr[j] > target){
            j--
        }else{
            i ++
        }
    }
    return result
}

function mergeSort(arr, start, end){
    if(start === end) return [arr[start]]
    
    var mid = Math.floor((start + end)/2)
    
    var l = mergeSort(arr, start, mid)
    var r = mergeSort(arr, mid + 1, end)
    
    return merge(l, r)
}

function merge(arr1, arr2){
    var result = []
    var i = 0
    var j = 0
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++
        }else{
            result.push(arr2[j])
            j++
        }
    }
    while(i < arr1.length){
       result.push(arr1[i])
       i++ 
    }
    while(j < arr2.length){
       result.push(arr2[j])
       j++  
    }
    return result
}

twoSum([3,2,4], 6)