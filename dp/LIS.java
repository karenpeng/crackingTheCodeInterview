public class Solution {
    /**
     * @param nums: The integer array
     * @return: The length of LIS (longest increasing subsequence)
     */
    public int longestIncreasingSubsequence(int[] nums) {
        // write your code here
        //state:
        //第i结尾的LIS
        //func:
        //f[i] = Math.max(f[j]+1), i>=j
        //init:f[n] = 1
        //result:Math.max(f[i])
        if(nums.length < 1){
            return 0;
        }
        
        int[] f = new int[nums.length];
        
        int max = 0;
        
        for(int i = 0; i < nums.length; i++){
            f[i] = 1;
            for(int j = 0; j < i; j ++){
                if(nums[i] >= nums[j]){
                    f[i] = Math.max(f[i], f[j] + 1);
                }
            }
            //最后那个不一定是最长那个 所以还要取一次max
            if(f[i] > max) {
                max = f[i];
            }
        }
        return max;
    }
}

