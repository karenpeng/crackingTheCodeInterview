public class Solution {
    /**
     * @param m: An integer m denotes the size of a backpack
     * @param A & V: Given n items with size A[i] and value V[i]
     * @return: The maximum value
     */
    public int backPackII(int m, int[] A, int V[]) {
        // write your code here
        //f[i][j] 第i个包的时候能看最大价值是多少 j是所剩空间
        //if(A[i-1] > j) f[i][j] = f[i-1][j]
        //else f[i][j] = Math.max(f[i-1][j-A[i-1]]+V[i-1], f[i-1][j])
        //init: f[0][0] = 0 f[i][0] = 0 f[0][j] = 0
        //return f[A.lenght][m+1]
        
        int[][] f = new int[A.length+1][m+1];
        for(int i = 1; i < A.length+1; i++){
            for(int j = 1; j < m+1; j++){
                if(A[i-1] > j){
                    f[i][j] = f[i-1][j];
                }else{
                    f[i][j] = Math.max(f[i-1][j-A[i-1]]+V[i-1], f[i-1][j]);
                }
            }
        }
        return f[A.length][m];
    }
}
