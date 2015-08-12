public class Solution {
    /**
     * @param A an array of Integer
     * @return  an integer
     */
    public int longestIncreasingContinuousSubsequence(int[] A) {
        if(A.length < 1) return 0;
        // Write your code here
        //the legnth in index i
        int maxIncrease = 1;
        int maxDecrease = 1;
        
        int increase = 1;
        int decrease = 1;
        
        for(int i = 1; i < A.length; i++){
            if(A[i] > A[i-1]) {
                increase ++;
                decrease = 1;
                maxIncrease = Math.max(maxIncrease, increase);
            }else{
                decrease ++;
                increase = 1;
                maxDecrease = Math.max(maxDecrease, decrease);
            }
        }
        
        return Math.max(maxIncrease, maxDecrease);
    }
}
