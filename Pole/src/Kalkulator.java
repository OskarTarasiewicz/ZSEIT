public class Kalkulator {
    public Double punktNaOkregu(Point punkt, Point srodek) {
       Double wynik = Math.pow((punkt.x - srodek.x), 2) + Math.pow((punkt.y - srodek.y), 2);
       return wynik;
    }
}
