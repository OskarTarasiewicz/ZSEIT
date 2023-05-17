import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

class Ticket {
    private LocalDateTime purchaseTimestamp;
    private LocalDateTime expirationTimestamp;

    public Ticket(int validityMinutes) {
        purchaseTimestamp = LocalDateTime.now();
        expirationTimestamp = purchaseTimestamp.plusMinutes(validityMinutes);
    }

    public boolean isExpired() {
        return LocalDateTime.now().isAfter(expirationTimestamp);
    }
}

class Passenger {
    private String name;
    private String surname;
    private Ticket ticket;

    public Passenger(String firstName, String lastName) {
        this.name = firstName;
        this.surname = lastName;
    }

    public void setTicket(Ticket ticket) {
        this.ticket = ticket;
    }

    public boolean hasValidTicket() {
        if (ticket == null) {
            return false;
        }
        return !ticket.isExpired();
    }

    @Override
    public String toString() {
        return name + " | " + surname;
    }
}

class TicketMachine {
    public void buyTicket(Passenger passenger, int validityMinutes) {
        Ticket ticket = new Ticket(validityMinutes);
        passenger.setTicket(ticket);
    }
}

public class TicketController {
    public static void main(String[] args) {
        List<Passenger> passengers = new ArrayList<>();
        passengers.add(new Passenger("Oskar", "Tarasiewicz"));
        passengers.add(new Passenger("Adrian", "Żalno"));
        passengers.add(new Passenger("Mariusz", "Pudzianowski"));
        passengers.add(new Passenger("Robert", "Lewandowski"));
        passengers.add(new Passenger("Kamil", "Włodek"));

        TicketMachine ticketMachine = new TicketMachine();
        ticketMachine.buyTicket(passengers.get(0), -20);
        ticketMachine.buyTicket(passengers.get(1), 8);
        ticketMachine.buyTicket(passengers.get(2), 30);
        passengers.get(3).setTicket(new Ticket(20));
        passengers.get(4).setTicket(new Ticket(55));

        List<Passenger> invalidPassengers = getInvalidPassengers(passengers);
        System.out.println("Lista osób bez ważnego biletu:");
        for (Passenger passenger : invalidPassengers) {
            System.out.println(passenger);
        }
    }

    private static List<Passenger> getInvalidPassengers(List<Passenger> passengers) {
        List<Passenger> invalidPassengers = new ArrayList<>();
        for (Passenger passenger : passengers) {
            if (!passenger.hasValidTicket()) {
                invalidPassengers.add(passenger);
            }
        }
        return invalidPassengers;
    }
}