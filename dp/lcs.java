// Given two strings, find the longest common subsequence (LCS).

// Your code should return the length of LCS.

// Have you met this question in a real interview? Yes
// Example
// For "ABCD" and "EDCA", the LCS is "A" (or "D", "C"), return 1.

// For "ABCD" and "EACB", the LCS is "AC", return 2.
 
// state: f[i][j]表示前i个字符配上前j个字符的LCS‘的长度
// (一定以第i个和第j个结尾的LCS’)

// function: f[i][j] = f[i-1][j-1] + 1 // a[i] == b[j]
// = 0 // a[i] != b[j]

// intialize: f[i][0] = 0
 
// f[0][j] = 0
// answer: MAX(f[0..a.length()][0..b.length()])

public class Solution {
    /**
     * @param A, B: Two strings.
     * @return: The length of longest common subsequence of A and B.
     */
    public int longestCommonSubsequence(String A, String B) {
        if(A.length() < 1 || B.length() < 1){
            return 0;
        }
        // write your code here
        int[][] f = new int[A.length()+1][B.length()+1];
        f[0][0] = 0;
        
        for(int i = 1; i < A.length() + 1; i++){ 
            f[i][0] = 0;
            for(int j = 1; j < B.length() + 1; j++){
                f[0][j] = 0;
                //它不是zero index啊
                if(A.charAt(i-1) == B.charAt(j-1)){
                   f[i][j] = f[i-1][j-1] + 1;
                }else{
                   f[i][j] = Math.max(f[i-1][j], f[i][j-1]);
                }
            }
        }
        
        return f[A.length()][B.length()];
    }
}

