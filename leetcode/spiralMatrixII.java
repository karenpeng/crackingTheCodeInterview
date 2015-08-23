public class Solution {
    public int[][] generateMatrix(int n) {
        
        int value = 0;
        int [][] result = new int[n][n];
        
        int r = 0;
        int l = n - 1;
        int b = n - 1;
        int f = 0;
        
        int dir = 0;
        
        while(r <= l && f <= b){
            switch(dir){
                case 0:
                    for(int i = f; i <= b; i++){
                        result[r][i] = ++value;
                    }
                    r++;
                    dir = 1;
                    break;
                case 1:
                    for(int i = r; i <= l; i++){
                        result[i][b] = ++value;
                    }
                    b--;
                    dir = 2;
                    break;
                case 2:
                    for(int i = b; i >= f; i--){
                        result[l][i] = ++value;
                    }
                    l--;
                    dir = 3;
                    break;
                case 3:
                    for(int i = l; i >= r; i--){
                        result[i][f] = ++value;
                    }
                    f++;
                    dir = 0;
                    break;
            }
        }
        
        return result;
        
    }
}