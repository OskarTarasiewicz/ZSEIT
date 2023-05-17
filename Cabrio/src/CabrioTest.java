import org.junit.Test;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

class CabrioTest {

    @Test
    void testStart() throws InterruptedException {
        Cabrio cabrio = new Cabrio("Hyundai", "Veloster", "coupe");
        cabrio.engineStart();
        assertTrue(cabrio.isRunning);
    }

    @Test
    void testStartWhenDriving() throws InterruptedException {
        Cabrio cabrio = new Cabrio("Honda", "Jazz", "sedan");
        cabrio.isRunning = true;
        cabrio.engineStart();
        assertFalse(cabrio.isRunning);
    }

    @Test
    void testCloseRoofWhenNotOpen() throws InterruptedException {
        Cabrio cabrio = new Cabrio("Ford", "Focus", "sedan");
        cabrio.windowClose();
        assertFalse(cabrio.isWindowOpen);
    }

    @Test
    void testCloseRoof() throws InterruptedException {
        Cabrio cabrio = new Cabrio("Jaguar", "F-Pace", "SUV");
        cabrio.isWindowOpen = true;
        cabrio.windowClose();
        assertFalse(cabrio.isWindowOpen);
    }

    @Test
    void testStop() throws InterruptedException {
        Cabrio cabrio = new Cabrio("Audi", "A6", "sedan");
        cabrio.isRunning = true;
        cabrio.engineStop();
        assertFalse(cabrio.isRunning);
    }

    @Test
    void testStopWhenNotDriving() throws InterruptedException {
        Cabrio cabrio = new Cabrio("BMW", "E36", "sedan");
        cabrio.engineStop();
        assertFalse(cabrio.isRunning);
    }

    @Test
    void testOpenRoof() throws InterruptedException {
        Cabrio cabrio = new Cabrio("Seat", "Leon", "compact");
        cabrio.windowOpen();
        assertTrue(cabrio.isWindowOpen);
    }

    @Test
    void testOpenRoofWhenDriving() throws InterruptedException {
        Cabrio cabrio = new Cabrio("Mazda", "CX5", "sedan");
        cabrio.isRunning = true;
        cabrio.windowOpen();
        assertFalse(cabrio.isWindowOpen);
    }
}