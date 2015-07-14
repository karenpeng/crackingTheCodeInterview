/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    quickSort(0, nums.length-1, nums)
    return nums[nums.length - k]
};

function quickSort(start, end, nums){
    if(start === end) return
    if(start > end) return
    var pivot = start
    var i = start + 1 
    var j = start + 1
    for(; j <= end; j++){
        if(nums[j] < nums[pivot]){
            swap(i, j, nums)
            i++
        }
    }
    swap(start, i - 1, nums)
    
    quickSort(start, i - 1, nums)
    quickSort(i, end, nums)
}

function swap(a, b, arr){
    var tem = arr[a]
    arr[a] = arr[b]
    arr[b] = tem
}