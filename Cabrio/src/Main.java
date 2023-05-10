import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        Scanner scanner = new Scanner(System.in);
        Cabrio car = new Cabrio("Hyundai", "Veloster", "coupe");
        boolean isRunning = true;


        while (isRunning) {
            System.out.println("1. Uruchom Silnik");
            System.out.println("2. Zatrzymaj Silnik");
            System.out.println("3. Otwórz Okno");
            System.out.println("4. Zamknij Okno");
            System.out.println("5. Wyjdź z programu");
            String option = scanner.nextLine();

            switch (option) {
                case "1":
                case "- Zapłon silnika":
                    car.engineStart();
                    break;
                case "2":
                case "- Wyłączenie silnika":
                    car.engineStop();
                    break;
                case "3":
                case "- Otwarcie okna":
                    car.windowClose();
                    break;
                case "4":
                case "- Zamknięcie okna":
                    car.windowOpen();
                    break;
                case "5":
                    isRunning = false;
                    System.out.println("Program został zakończony.");
                    break;
                default:
                    System.out.println("Wprowadzono niepoprawną opcję");
                    break;
            }
        }
    }
}