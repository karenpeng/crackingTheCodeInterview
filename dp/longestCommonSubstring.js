public class Solution {
    /**
     * @param A, B: Two string.
     * @return: the length of the longest common substring.
     */
    public int longestCommonSubstring(String A, String B) {
        // write your code here
        int[][] f = new int[A.length()+1][B.length()+1];
        int max = 0;
        f[0][0] = 0;
        for(int i = 1; i < A.length()+1; i++){
            f[i][0] = 0; 
            for(int j = 1; j < B.length()+1; j++){
                f[0][j] = 0;
                if(A.charAt(i-1) == B.charAt(j-1)){
                    f[i][j] = f[i-1][j-1]+1;
                    if(max < f[i][j]) max = f[i][j];
                }else{
                    f[i][j] = 0;
                }
            }
        }
        
        return max;
    }
}
