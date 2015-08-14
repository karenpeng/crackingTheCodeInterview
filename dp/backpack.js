public class Solution {
    /**
     * @param m: An integer m denotes the size of a backpack
     * @param A: Given n items with size A[i]
     * @return: The maximum size
     */
                    //backpacksize //size
    public int backPack(int m, int[] A) {
        // write your code here
        //f[i][j] = 第i个在剩下j那么多的空间的时候最多能塞多少东西
        //if(A[i-1] > j) f[i][j] = f[i-1][j]
        //else f[i] = Math.max(f[i-1][j]+A[i-1], f[i-1][j])
        //init: f[0][0] = 0
        //return: max
        
        int[][] f = new int[A.length+1][m+1];
        
        f[0][0] = 0;
        
        for(int i = 1; i < A.length+1; i++){
            f[i][0] = 0;
        }
        for(int j = 1; j < m+1; j++){
            f[0][j] = 0;
        }
        for(int i = 1; i < A.length+1; i++){
            for(int j = 1; j < m+1; j++){
                if(A[i-1] > j){
                    f[i][j] = f[i-1][j];
                }else{
                    f[i][j] = Math.max(f[i-1][j], f[i-1][j-A[i-1]] + A[i-1]);
                }
            }
        }
        return f[A.length][m];

    }
}
