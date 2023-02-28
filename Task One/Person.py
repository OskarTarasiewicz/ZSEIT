# Inicjaliacja klasy Person

# Klasa przechowuje informacje:
# - imię klienta
# - nazwisko klienta
# - płeć klienta
# - wiek klienta
# - numer telefonu klienta
# - adres kl9ienta

# Klasa posiada metody:
# - Person_info - wyświetla informacje o osobie

class Person:
    def __init__(self, name, surname, gender, age, phonenumber, address):
        self.name = name
        self.surname = surname
        self.gender = gender
        self.age = age
        self.phonenumber = phonenumber
        self.address = address

    def Person_info(self):
        print("Imię: " + self.name)
        print("Nazwisko: " + self.surname)
        print("Wiek: " + str(self.age))
        print("Płeć: " + self.gender)
        print("Numer telefonu: " + self.phonenumber)
        print("Adres: " + self.address)