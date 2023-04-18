public class Odcinek {
    public Double odcinek(Point pkt1, Point pkt2) {
        double wynik = Math.sqrt(Math.pow(pkt2.x - pkt1.x, 2) + Math.pow(pkt2.y - pkt1.y, 2));
        return wynik;
    }
}
