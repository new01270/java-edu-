public class Morning1020_2 {
    

    public static void main(String[] args) {
        int arr[] = {3, 5, 8, 2, 1};
        int temp;

        for(int i = 0; i < arr.length; i++) {
            for(int j = i+1; j < arr.length; j++){
                if(arr[i] < arr[j]) {
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }

        for(int k : arr) {
            System.out.println(k);
        }

        




    }
}//end 선택정렬 내림차순