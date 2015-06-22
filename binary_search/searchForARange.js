/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var searchRange = function(nums, target) {

//     var index = helper(nums, target);
//     if(index === -1){
//         return [-1, -1];
//     }
//     var i = index;
//     var j = index;
//     while(i > 0){
//         if(nums[i-1] === target ){
//             i--;
//         }else{
//             break;
//         }
//     }
//     while(j < nums.length - 1){
//         if(nums[j+1] === target){
//             j++;
//         }else{
//             break;
//         }
//     }
//     return [i,j];
// };

// function helper(nums, target){
//     var s = 0;
//     var e = nums.length -1;
//     if(e === -1) return -1;
//     var mid;
    
//     while(s + 1 < e){
//         mid = Math.floor((s + e)/2);
//         if(nums[mid] === target){
//           return mid;
//         }else if(nums[mid] > target){
//             e = mid - 1;
//         }else{
//             s = mid + 1;
//         }
//     }
//     if(nums[s] === target) return s;
//     if(nums[e] === target) return e;
//     return -1;
// }


var searchRange = function(nums, target) {
    // var s = 0;
    // var e = nums.length -1;
    // if(e === -1) return [-1, 1];
    // var leftBound = -1;
    // var rightBound = -1;
    // var mid;
    // //find left bound
    // while( s < e ){
    //     mid = Math.floor((s + e) / 2);
    //     if(nums[mid] === target){
    //         e = mid;
    //     }else if(target < nums[mid]){
    //         e = mid - 1;
    //     }else{
    //         s = mid + 1;
    //     }
    //     console.log(e)
    // }
    // //when it comes out of the while loop
    // //s === e true
    // if(target === nums[s]){
    //     leftBound = s;
    // }
    
    // //dont forget to reset s and e!!!!!
    // s = leftBound;
    // e = nums.length - 1;
    // console.log(s, mid, e)
    // //find right bound
    // while( s < e ){
    //     mid = Math.floor((s + e) / 2);
    //     if(nums[mid] === target){
    //         s = mid + 1;
    //     }else if(target > nums[mid]){
    //         s = mid + 1;
    //     }else{
    //         e = mid - 1;
    //     }
    // }
    // console.log(s, mid, e)
    // //when it comes out of the while loop
    // //s === e true
    // if(target === nums[e]){
    //     rightBound = e;
    // }
    
    // return [leftBound, rightBound];
    var s = 0
    var e = nums.length - 1
    if(e === -1) return [-1, -1]
    
    var mid, firstOne
    while(s <= e){
        mid = Math.floor((s + e) / 2)
        if(target === nums[mid]) {
            firstOne = mid
            break
        }
        else if(target > nums[mid]) s = mid + 1
        else e = mid - 1
    }
    if(firstOne === undefined) return [-1, -1]
    
    var i = firstOne
    var j = firstOne
    while(nums[i-1] === target && i > 0){
        i --
    }
    while(nums[j+1] === target && j < nums.length){
        j ++
    }
    return [i,j]
}

searchRange([2, 2], 2);
searchRange([1, 3], 1)

