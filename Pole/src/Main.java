import java.lang.Math;

public class Main {

    public static void main(String[] args) {
        Odcinek odc = new Odcinek();
        Kalkulator kalkulator = new Kalkulator();

        Rectangle rect = new Rectangle(new Point(0,0), new Point(4,0), new Point(4,2), new Point(0, 2));


        Double rectOdcA = odc.odcinek(new Point(rect.point1.x, rect.point1.y), new Point(rect.point2.x, rect.point2.y));
        Double rectOdcB = odc.odcinek(new Point(rect.point3.x, rect.point3.y), new Point(rect.point4.x, rect.point4.y));
        System.out.println("Prostokąt ma pole wynoszące: " + rectOdcA * rectOdcB);


        Circle cirle = new Circle(new Point(2, 1), 2);
        Double rownanie = kalkulator.punktNaOkregu(new Point(rect.point1.x, rect.point1.y), new Point(cirle.sr.x, cirle.sr.y));
        System.out.println("Punk leży wewnątrz okręgu?: " + rownanie.equals(cirle.r1));
    }
}