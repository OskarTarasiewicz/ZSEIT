class Cabrio {
    private String brand;
    private String type;
    public boolean isWindowOpen;
    private String model;
    public boolean isRunning;

    public Cabrio(String brand, String model, String type) {
        this.brand = brand;
        this.model = model;
        this.type = type;
        this.isRunning = false;
        this.isWindowOpen = false;
    }

    public void engineStart() throws InterruptedException {
        if (!isRunning) {
            System.out.println("Uruchamianie Silnika...");
            Thread.sleep(1000);
            System.out.println("Silnik został uruchomiony");
            isRunning = true;
        } else {
            System.out.println("Silnik jest już uruchomiony");
        }
    }

    public void engineStop() throws InterruptedException {
        if (isRunning) {
            System.out.println("Wyłączanie silnika...");
            Thread.sleep(1000);
            System.out.println("Silnik został wyłączony ");
            isRunning = false;
        } else {
            System.out.println("Silnik jest już wyłączony ");
        }
    }

    public void windowOpen() throws InterruptedException {
        if (!isRunning) {
            System.out.println("Brak możliwości otwarcia okna - silnik jest wyłączony");
        } else if (isWindowOpen) {
            System.out.println("Okno jest już otwarte");
        } else {
            System.out.println("Otwieranie okna...");
            Thread.sleep(2000);
            System.out.println("Okno zostało otwarte");
            isWindowOpen = true;
        }
    }

    public void windowClose() throws InterruptedException {
        if (!isRunning) {
            System.out.println("Brak możliwości zamknięcia okna - silnik jest wyłączony");
        } else if (!isWindowOpen) {
            System.out.println("Okno jest już zamknięte");
        } else {
            System.out.println("Zamykanie okna...");
            Thread.sleep(2000);
            System.out.println("Okno zostało zamnięte");
            isWindowOpen = false;
        }
    }
}