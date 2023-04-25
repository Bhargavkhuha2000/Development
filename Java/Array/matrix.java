import java.lang.*;
import java.util.*;

class matrix {

	public static void main(String[] args) {
    	int rowCol;
    	Scanner sc = new Scanner(System.in);
    	System.out.print("\n Enter Row Column Value : ");
    	rowCol = sc.nextInt();
    	int matrix[][]=new int[rowCol][rowCol];
    	System.out.println("\n ------ Enter Value of Matrix -----");
    	for(int i=0;i<rowCol;i++){
    		for(int j=0;j<rowCol;j++){
    			System.out.print("\nEnter a["+i+"]["+j+"] value : ");
    			matrix[i][j]= sc.nextInt();
    		}
    	}

    	System.out.println("\n----- Matrix -----");
    	for(int i=0;i<rowCol;i++){
    		for(int j=0;j<rowCol;j++){
    			System.out.print(" "+matrix[i][j]);	
    		}
    		System.out.print("\n");
    	}

    	System.out.println("\n----- Matrix First Row -----");
    	for(int i=0;i<rowCol;i++){
    		System.out.print(" "+matrix[0][i]);
    	}

    	System.out.println("\n----- Matrix Second Column -----");
    	for(int i=0;i<rowCol;i++){
    		System.out.print(" "+matrix[i][1]);
    	}

    	System.out.println("\n----- Matrix Diagonal Right-Bottom to Left-Top -----");
    	for(int i=rowCol-1;i>=0;i--){
    		for(int j=rowCol-1;j>=0;j--){
    			if(i==j){
    			System.out.print(" "+matrix[i][j]);	
    			}
    		}
    	}

    	System.out.println("\n----- Matrix Diagonal Right-top to Left-Bottom -----");
    	int j = rowCol-1;
    	for(int i=0;i<rowCol;i++){
    			System.out.print(" "+matrix[i][j]);
    			j--;	
    	}
    	System.out.println("\n");
	}
}
