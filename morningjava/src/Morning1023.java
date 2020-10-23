package common;

class Person {
    private String name;        // filed
    private int age;
    private String[] hobbies = new String[5];
    private String[] pets = new String[5];

    public void setName(String name) {  // filed' Method.
        this.name = name;
    }

    public String getName() {
        return this.name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getAge() {
        return this.age;
    }

    public void addHobbies(String hobby) {
        for(int i = 0; i < hobbies.length; i++) {
            if(hobbies[i] == null) {
                hobbies[i] = hobby;
                break;
            }
        }
    }

    public String getHobbies() {
        String hobby = "";
        for(String hob : hobbies) {
            if(hob != null) {
                hobby += hob + " ";
            }
        }
        return hobby;
    }

    public void addPets(String pet) {
        for(int i = 0; i < pets.length; i++) {
            if(pets[i] == null) {
                pets[i] = pet;
                break;
            }
        }
    }

    public String getPets() {
        String dog = "";
        for(String pe : pets) {
            if(pe != null) {
                dog += pe + " ";
            }
        }
        return dog;
    }
}

public class Morning1023 {
    public static void main(String[] args) {
        Person p1 = new Person();
        p1.setName("Hong");
        p1.setAge(20);
        p1.addHobbies("reading");
        p1.addHobbies("sleeping");
        p1.addPets("puppy");
        p1.addPets("cat");

        System.out.println("Name: " + p1.getName() 
                         + " Age:" + p1.getAge()
                         + " Hobby: " + p1.getHobbies()
                         + " Pet: " + p1.getPets());
    }
}