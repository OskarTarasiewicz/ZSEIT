# Kalkulator pola figur

```
Aplikacja konsolowa do obliczania pola figur oraz sprawdzania, czy odcinek należy do okręgu.
```

### KLASY

- Odcinek - posiada funkcję odcinek, która zwraca liczbę zmiennoprzecinkową
- Point - posiada konstruktor z parametrami wchodzącymi double x1, double y1
- Rectangle - posiada konstruktor z parametrami wchodzącymi Point p1, Point p2, Point p3, Point p4
- Kalkulator - posiada funkcję punktNaOkregu, która zwraca liczbę zmiennoprzecinkową
- Main - klasa główna aplikacji, wywołuje metody z innych klas
- Circle - posiada konstruktor z parametrami wchodzącymi Point s, double r


### FUNKCJE

Funkcja odcinek() przyjmuje 2 parametry, które są punktami skrajnymi prostokąta. Punkty te są instancjami klasy Point.
Zmienna **wynik** przechowuje wynik równania, które wylicza długość odcinka bazując na 2 punktach skrajnych boku prostokąta. Funkcja zwraca liczbę zmiennoprzecinkową.

```java
    public Double odcinek(Point pkt1, Point pkt2) {
        double wynik = Math.sqrt(Math.pow(pkt2.x - pkt1.x, 2) + Math.pow(pkt2.y - pkt1.y, 2));
        return wynik;
    }
```


Funkcja punktNaOkregu() przyjmuje 2 parametry (punkt - punkt który ma być sprawdzony, czy należy do okręgu - jest instancją klasy Point | srodek - środek odcinka, który jest instancją klasy Point).
Zmienna **wynik** przechowuje wynik równania, które podstawia współrzędne punktów do wzoru ogólnego okręgu. Funkcja zwraca liczbę zmiennoprzecinkową.

```java
    public Double punktNaOkregu(Point punkt, Point srodek) {
       Double wynik = Math.pow((punkt.x - srodek.x), 2) + Math.pow((punkt.y - srodek.y), 2);
       return wynik;
    }
```