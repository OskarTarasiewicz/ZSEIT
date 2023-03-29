import java.lang.Math;

public class Main {

    static void odcinek(Point pkt1, Point pkt2, Point pkt3, Point pkt4) {
        double wynik = Math.sqrt(Math.pow(pkt2.x - pkt1.x, 2) + Math.pow(pkt2.y - pkt1.y, 2));
        System.out.println("Długośc odcinka: " + wynik);
    }


    public static void main(String[] args) {
        odcinek(new Point(0,3), new Point(4, 3));
    }
}