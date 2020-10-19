import java.util.*;

public class Morning1019 {
    public static void main(String[] args) {
        String name[] = {"Hong", "Choi", "Park"};
        int age[] = {20, 25, 28};
        double score[] = {67.8, 78.8, 88.9};

        for(int i = 0; i < name.length; i++) {
            System.out.println("name: " + name[i]);
            System.out.println("age: " + age[i]);
            System.out.println("score: " + score[i]);
        }

        System.out.println("hap: " + (score[0]+score[1]+score[2]));

        System.out.println("avg: " + ((score[0]+score[1]+score[2])/3));
        
        Arrays.sort(score);
        for(double k : score) {
            System.out.println("asce" + k);
        }
    }
}
        
         



