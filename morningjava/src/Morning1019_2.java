import java.util.*;

class Student implements Comparable<Student> {
    String name;
    int age;
    double score;

    @Override
    public int compareTo(Student s) {   //-1 1 오름차순이고 1 -1 순이면 내림차순, 1은 순서를 바꾸겠다는 의미 default내림차순
        if(this.score < s.score) {
            return 1;
        }else if(this.score > s.score) {
            return -1;
        }else {
            return 0;
        } 

    }
}

public class Morning1019_2{
    public static void main(String[] arge){
        Student s1 = new Student();
        s1.name = "Hong";
        s1.age = 20;
        s1.score = 67.8;

        Student s2 = new Student();
        s2.name = "Choi";
        s2.age = 25;
        s2.score = 88.1;

        Student s3 = new Student();
        s3.name = "Park";
        s3.age = 30;
        s3.score = 95.8;
         
        List<Student> students = new ArrayList<Student>();
        students.add(s1);
        students.add(s2);
        students.add(s3);

        double sum = 0;
        for(int i = 0; i < students.size(); i++) {
            sum += students.get(i).score;
        }
        System.out.println("Summary: " + sum);
        System.out.printf("Average: %.2f \n", (sum/students.size()));
        
        Student[] stdArr = {s1, s2, s3};
        Arrays.sort(stdArr);
        for(Student student : stdArr){
            System.out.println(student.name + ", " + student.score);
        }
    }
}