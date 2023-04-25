import java.lang.*;
import java.util.*;

class secondLargeThirdSmall {

	public static void main(String[] args) {
    	int min1,min2,min3,max1,max2,no;
    	
    	Scanner sc = new Scanner(System.in);
    	System.out.print("Enter between 1 to 50 : ");
    	no = sc.nextInt();
    	int arr[]= new int[no];
    	
    	if(no >50 || no<3){
    		System.out.println("Please Enter Value Between 3 to 50");
    	}else {
    		for(int i=0;i<no;i++){
    			System.out.print("\nEnter Value of "+(i+1)+" :");
    			arr[i]=sc.nextInt();
    		}
    		System.out.println("----Main Array----");
    		for(int i=0;i<no;i++){
    			System.out.print(" "+arr[i]);
    		}
    		Arrays.sort(arr);
    		System.out.println("\n----Sort Array----");
    		for(int i=0;i<no;i++){
    			System.out.print(" "+arr[i]);
    		}
    		// min1=min2=min3=max1=max2=arr[0];
    		// for(int i=0;i<no;i++){
    		// 	if(arr[i]>max1){
    		// 		max2=max1;
    		// 		max1=arr[i];
    		// 	}
    		// 	if(arr[i]<min1){
    		// 		min3=min2;
    		// 		min2=min1;
    		// 		min1=arr[i];
    		// 	}
    		// }

    		System.out.println("\nSecond Large Number is : "+arr[arr.length-2]);
    		System.out.println("Third Small Number is : "+arr[2]);
    	}
    	




	}
}
