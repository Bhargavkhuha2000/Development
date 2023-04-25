import java.lang.*;
import java.util.*;

class subArray {

	public static void main(String[] args) {
    	int start,end;
    	int arr[]={1,2,3,4,5,6,7,8,9,10};
    	Scanner sc = new Scanner(System.in);
    	System.out.print("---Enter Number Between 0 to 9---");
    	System.out.print("\n Enter Start Point : ");
    	start = sc.nextInt();
    	System.out.print("\n Enter End Point : ");
    	end = sc.nextInt();
    	if(start>end){
    		System.out.println("Oops.. Start Point is Greater Than End Point");
    	}else if(start <0 || end<0 ||start>9 || end>9){
    		System.out.println("Please Enter Value Between 0 to 9");
    	}else {
    		System.out.println("----Main Array---- ");
    		for(int a :arr){
    			System.out.print(" "+a);
    		}
    		System.out.println("\n----Sub Array---- ");
    		for(int i=start;i<=end;i++){
    			System.out.print(" "+arr[i]);
    		}
    		System.out.println("");
    	}

	}
}
