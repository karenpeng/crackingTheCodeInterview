/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    if(intervals.lenght === 0 || intervals === null) return [newInterval]
    var result = []
    result.push(newInterval)
    for(var i =0; i < intervals.length; i++){
        var newInt = result.pop()
        var cur = intervals[i]
        if(cur.end < newInt.start){
            result.push(cur)
            result.push(newInt)
        }else if(cur.start > newInt.end){
            result.push(newInt)
            result.push(cur)
        }else{
            newInt.start = Math.min(cur.start, newInt.start)
            newInt.end = Math.max(cur.end, newInt.end)
            result.push(newInt)
        }
    }
    return result
};