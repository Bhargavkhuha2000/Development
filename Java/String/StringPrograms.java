import java.lang.*;

class StringPrograms {

    public static void main(String[] args) {
        //1.
        System.out.println("1.Change value of 5th position Character with StringBuilder");

        StringBuilder str = new StringBuilder("Hello World");
        System.out.println("Main String is : "+str);

        str=str.replace(5,6," Hii ");
        System.out.println("After Replace Value String is : "+str);

        //2.
        System.out.println("\n2.Remove space from string using StringBuilder");

        StringBuilder str2 = new StringBuilder("Hello World");
        System.out.println("Main String is : "+str2);

        for(int i = 0;i<str2.length();i++){
            if(Character.isWhitespace(str2.charAt(i)))
            {
                str2.replace(str2.charAt(i),str2.charAt(i+1),"");
            }
        }
        System.out.println(str2);

	}
}
