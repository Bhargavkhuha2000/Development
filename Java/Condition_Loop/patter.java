import java.lang.*;
import java.util.*;;
class patter {
	public static void main(String arg[]) {
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter Number Here : ");
		int n = sc.nextInt();
		int i,j,k;
		if(n%2==0){
			System.out.println("Even Number is Not Allow");
		}else{
			int no = (n-1)/2;
			for(i = no;i>=0;i--){
				System.out.print("*");
				for (j=0;j<=i ;j++ ) {
					System.out.print(" ");
					
				}
				for (k=0;k<=i ;k++ ) {
					System.out.print("*");
					
				}
				System.out.println("");
			}
			for(i = 1;i<=no;i++){
				System.out.print("*");
				for (j=0;j<=i ;j++ ) {
					System.out.print(" ");
					
				}
				for (k=0;k<=i ;k++ ) {
					System.out.print("*");
					
				}
				System.out.println("");
			}
		}


	}
}