import java.util.Scanner;
import java.util.Random;
import java.util.HashSet;

public class Wisielec {
    private static final String[] WORDS = {"JAVASCRIPT", "CHLEB", "SAMSOLOT", "AUTO", "KANAPKA", "TEAMS", "ELEKTRON", "SMAR", "WEBSTORM", "ZUPA"};
    private static final int MAX_WRONG_GUESSES = 8;

    private String hiddenWord;
    private HashSet<Character> usedLetters;
    private int wrongGuessesCount;
    private String selectedWord;

    public Wisielec() {
        Random randomNum = new Random();
        this.usedLetters = new HashSet<Character>();
        this.selectedWord = WORDS[randomNum.nextInt(WORDS.length)];
        this.wrongGuessesCount = 0;
        this.hiddenWord = "#".repeat(this.selectedWord.length());
    }

    public void start() {
        System.out.println("Witaj w grze w wisielca!! :)");
        while (true) {
            System.out.println("Wybierz opcję:");
            System.out.println("1. Zacznij grę");
            System.out.println("2. Wyjście :(");

            Scanner scanner = new Scanner(System.in);
            String input = scanner.nextLine();

            if (input.equals("1") || input.equalsIgnoreCase("Graj")) {
                play();
            } else if (input.equals("2") || input.equalsIgnoreCase("Wyjdz")) {
                System.out.println("Wychodzenie...");
                break;
            } else {
                System.out.println("Niepoprawna opcja >:(");
            }
        }
    }

    private void play() {
        while (wrongGuessesCount < MAX_WRONG_GUESSES && !hiddenWord.equals(selectedWord)) {
            System.out.println("Lista wykorzystanych liter: " + usedLetters);
            System.out.println("Słowo: " + hiddenWord);
            System.out.print("Wpisz literę: ");

            Scanner scanner = new Scanner(System.in);
            char guess = scanner.nextLine().toUpperCase().charAt(0);

            if (usedLetters.contains(guess)) {
                System.out.println("Już użyłeś tej litery!");
                continue;
            }

            usedLetters.add(guess);

            if (selectedWord.contains(String.valueOf(guess))) {
                StringBuilder newHiddenWord = new StringBuilder();
                for (int i = 0; i < selectedWord.length(); i++) {
                    if (selectedWord.charAt(i) == guess) {
                        newHiddenWord.append(guess);
                    } else {
                        newHiddenWord.append(hiddenWord.charAt(i));
                    }
                }
                hiddenWord = newHiddenWord.toString();
            } else {
                System.out.println("Tajne słowo nie zawiera litery, którą podałeś");
                wrongGuessesCount++;
            }
        }

        if (wrongGuessesCount == MAX_WRONG_GUESSES) {
            System.out.println("Przegrałeś! Bye Bye | Tajne słowo to: " + selectedWord);
        } else {
            System.out.println("Gratulacje, udało ci się wygrać! | Tajne słowo to:  " + selectedWord);
        }

        selectedWord = "";
        hiddenWord = "";
        wrongGuessesCount = 0;
        usedLetters.clear();
    }

    public static void main(String[] args) {
        Wisielec game = new Wisielec();
        game.start();
    }
}