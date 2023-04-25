import java.lang.*;
import java.util.*;

class metricsMultiplication {

    public static void main(String[] args) {
        int aRow,aCol,bRow,bCol;
        Scanner sc = new Scanner(System.in);
        System.out.print("\nEnter No of Row of A matrix : ");
        aRow = sc.nextInt();
        System.out.print("\nEnter No of Column of A matrix : ");
        aCol = sc.nextInt();
        System.out.print("\nEnter No of Row of B matrix : ");
        bRow = sc.nextInt();
        System.out.print("\nEnter No of Column of B matrix : ");
        bCol = sc.nextInt();
        int a[][]=new int[aRow][aCol];
        int b[][]=new int[bRow][bCol];
        int c[][]=new int[aRow][bCol];
        if(aCol== bRow){
            System.out.println("Welcome");
            System.out.println("----------------Enter A matrix Value---------------");
            for(int i = 0;i<aRow;i++){
                for(int j = 0;j<aCol;j++){
                    System.out.print("\n Enter A["+i+"]["+j+"] Value :");
                    a[i][j]=sc.nextInt();
                }
            }
            System.out.println("----------------Enter B matrix Value---------------");
            for(int i = 0;i<bRow;i++){
                for(int j = 0;j<bCol;j++){
                    System.out.print("\n Enter B["+i+"]["+j+"] Value :");
                    b[i][j]=sc.nextInt();
                }
            }

            //Multiplication
            for(int i=0;i<aRow;i++){
                for(int j = 0;j<bCol;j++){
                    c[i][j]=0;
                    for(int k=0;k<bRow;k++){
                       c[i][j]+=a[i][k]*b[k][j];
                    }
                }
            }
            System.out.println("------------- Matrix A ---------------");
            for(int i =0;i<aRow;i++){
                for(int j=0;j<aCol;j++){
                    System.out.print(" "+a[i][j]);
                }
                System.out.print("\n");
            }
            System.out.println("------------- Matrix B ---------------");
            for(int i =0;i<bRow;i++){
                for(int j=0;j<bCol;j++){
                    System.out.print(" "+b[i][j]);
                }
                System.out.print("\n");
            }
            System.out.println("-----Multiplication of Matrix A And B------");
            for(int i =0;i<aRow;i++){
                for(int j=0;j<bCol;j++){
                    System.out.print(" "+c[i][j]);
                }
                System.out.print("\n");
            }
        }else{
            System.out.print("Multiplication is Not Posible");
        }
	}
}