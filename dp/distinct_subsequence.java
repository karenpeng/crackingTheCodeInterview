public class Solution {
    /**
     * @param S, T: Two string.
     * @return: Count the number of distinct subsequences
     */
    public int numDistinct(String S, String T) {
        // write your code here
        //f[j][i]  S以i结尾的字符串 里可以找出多少个T以j结尾的字符串
        //if (S[i] != T[j]) f[j][i] = f[j-1][i]
        //else f[j][i] = f[j-1][i-1] + f[j-1][i]
        //init： f[0][i] = 1 f[j][0] = 0
        //return: f[T.length()][S.length()]
        
        if(S.length() < 1) return 1;
        if(T.length() < 1) return 0;
        
        int[][] f = new int[T.length()+1][S.length()+1];
        for(int i = 0; i < S.length()+1; i++){
            f[0][i] = 1;
        }
        //注意这里是从1开始 因为不要覆盖 f[0][0]
        for(int j = 1; j < T.length()+1; j++){
            f[j][0] = 0;
        }
        
        for(int i = 1; i < S.length()+1; i++){
            for(int j = 1; j< T.length()+1; j++){
                if(S.charAt(i-1) == T.charAt(j-1)){
                    f[j][i] = f[j-1][i-1] + f[j][i-1];
                } else{
                    f[j][i] = f[j][i-1];
                }
            }
        }
        return f[T.length()][S.length()];
    }
}
