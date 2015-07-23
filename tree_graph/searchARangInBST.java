/**
 * Definition of TreeNode:
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left, right;
 *     public TreeNode(int val) {
 *         this.val = val;
 *         this.left = this.right = null;
 *     }
 * }
 */
public class Solution {
    /**
     * @param root: The root of the binary search tree.
     * @param k1 and k2: range k1 to k2.
     * @return: Return all keys that k1<=key<=k2 in ascending order.
     */
    public ArrayList<Integer> searchRange(TreeNode root, int k1, int k2) {
        // write your code here
        ArrayList<Integer> result = new ArrayList<Integer>();
        helper(root, k1, k2, result);
        return result;
        
    }
    
    public void helper(TreeNode root, int k1, int k2, ArrayList<Integer> result){
        
        if(root == null){
            return;
        }
        
        if(k2 < root.val){
            helper(root.left, k1, k2, result);
        }
     
        if(k1 > root.val){
            helper(root.right, k1, k2, result);
        }
        
        //注意顺序
        if(k2 >= root.val && k1 <= root.val){
            helper(root.left, k1, k2, result);
            result.add(root.val);
            helper(root.right, k1, k2, result);
        }
        
        
    }
}


/**
 * Definition of TreeNode:
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left, right;
 *     public TreeNode(int val) {
 *         this.val = val;
 *         this.left = this.right = null;
 *     }
 * }
 */
public class Solution {
    /**
     * @param root: The root of the binary search tree.
     * @param k1 and k2: range k1 to k2.
     * @return: Return all keys that k1<=key<=k2 in ascending order.
     */
    private ArrayList<Integer> result;
    public ArrayList<Integer> searchRange(TreeNode root, int k1, int k2) {
        // write your code here
        result = new ArrayList<Integer>();
        helper(root, k1, k2);
        return result;
    }
    
    public void helper(TreeNode root, int k1, int k2){
        if(root == null) return;
        
        if(root.val > k2){
            helper(root.left, k1, k2);
        }else if(root.val >= k1 && root.val <= k2){
            helper(root.left, k1, root.val);
            result.add(root.val);
            helper(root.right, root.val, k2);
        }else{
            helper(root.right, k1, k2);
        }
    }

}

