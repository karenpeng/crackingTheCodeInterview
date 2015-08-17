public class Solution {
    public boolean isInterleave(String s1, String s2, String s3) {
        //f[i][j] s1前i s2前j能否 interleave s3前 i+ j
        //f[i][j] = f[i - 1][j] && s1[i - 1] == s3[i + j - 1] || f[i][j-1] && s2[j-1] == s3[i + j - 1]
        //init: f[0][0] = t 
        //return f[s1.length][s2.length]
        if(s1.length() + s2.length() != s3.length()) return false;
        boolean [][] f = new boolean [s1.length()+1][s2.length()+1];
        f[0][0] = true;
        for(int i = 1; i < s1.length()+1; i++){
            f[i][0] = f[i-1][0] && s1.charAt(i-1) == s3.charAt(i-1);
        }
        for(int j = 1; j < s2.length()+1; j++){
            f[0][j] = f[0][j-1] && s2.charAt(j-1) == s3.charAt(j-1);
        }
        for(int i = 1; i < s1.length()+1; i++){
            for(int j = 1; j < s2.length()+1; j++){
                f[i][j] = f[i-1][j] && s1.charAt(i-1) == s3.charAt(i+j-1) || f[i][j-1] && s2.charAt(j-1) == s3.charAt(i+j-1);
            } 
        }
        return f[s1.length()][s2.length()];
    }
}