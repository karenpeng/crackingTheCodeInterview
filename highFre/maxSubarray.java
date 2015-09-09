public class Solution {
    /**
     * @param nums: A list of integers
     * @return: A integer indicate the sum of max subarray
     */
    public int maxSubArray(ArrayList<Integer> nums) {
        // write your code
        //状态： f[i] -> 以i结尾的max subarray
        //函数： f[i] = Math.max(nums[i], nums[i] + f[i-1])
        //初始： f[0] = nums[0]
        //return 所有f[i]里面最大的那个
        
        int[] dp = new int[nums.size()];
        int max = nums.get(0);
        dp[0] = nums.get(0);
        
        
        for(int i = 1; i < nums.size(); i++){
            dp[i] = Math.max(nums.get(i), nums.get(i)+dp[i-1]);
            max = Math.max(max, dp[i]);
        }
        
        return max;
    }
}
