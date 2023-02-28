# Inicjalizacja klasy Client

# Klasa przechowuje:
# - numer klienta
# - imię klienta
# - nazwisko klienta
# - płeć klienta
# - wiek klienta
# - numer tel klienta
# - adres klienta

from Person import Person

class Client(Person):
    def __init__(self, clientID, name, surname, gender, age, phonenumber, address):
        super().__init__(name, surname, gender, age, phonenumber, address)
        self.clientID = clientID

client1 = Client(1, "Oskar", "Tarasowski", "M", 6, "256836785", "ul. Słoneczna 14")
client2 = Client(2, "Mariusz", "Pudzian", "M", 13, "637825017", "ul. Żołnierska 7")
client3 = Client(3, "Bartek", "Pacio", "M", 76, "739262017", "ul. Bałtycka 6a")
client4 = Client(4, "Michał", "Chleb", "F", 27, "649028372", "ul. Pstrowskiego 188")
client5 = Client(5, "Andrzej", "Ukradl", "M", 32, "123456789", "ul. Zielona 72")