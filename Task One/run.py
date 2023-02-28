# Inicjalizacja klasy Run

# Klasa Run posiada funkcje:
# - run - uruchamia program
# - menu - wyświetla menu programu
# - menu2 - wyświetla menu po wykonaniu operacji

# Klasa Run posiada zmienne:
# - Name - przechowuje imię i nazwisko klienta, który chce się zalogować
# - Pin - przechowuje pin do konta klienta, który chce się zalogować
# - selected_client - przechowuje wybranego klienta
# - selected_account - przechowuje wybrane konto klienta

from random import randint
from Client import client1, client2, client3, client4, client5
from Account import First_client_account, Second_client_account, Third_client_account, Fourth_client_account, Fifth_client_account
from Bank import bank

def run():
    global Name, Pin, selected_client, selected_account
    print("Siema, witaj w ", bank.name)
    Name = input("\nPodaj imię i nazwisko: ")
    Pin = int(input("Podaj numer PIN do swojej bankowości internetowej: "))
    if(Name ==  client1.name + " " + client1.surname):
        selected_client = client1
        selected_account = First_client_account
        menu()
    elif(Name == client2.name + " " + client2.surname):
        selected_client = client2
        selected_account = Second_client_account
        menu()
    elif(Name == client3.name + " " + client3.surname):
        selected_client = client3
        selected_account = Third_client_account
        menu()
    elif(Name == client4.name + " " + client4.surname):
        selected_client = client4
        selected_account = Fourth_client_account
        menu()
    elif(Name == client5.name + " " + client5.surname):
        selected_client = client5
        selected_account = Fifth_client_account
        menu()

def menu():
    if(Name == Name == client1.name + " " + client1.surname or Name == client2.name + " " + client2.surname or Name == client3.name + " " + client3.surname or Name == client4.name + " " + client4.surname or Name == client5.name + " " + client5.surname and Pin == selected_account.accountPin):
        global choice
        print("Witaj, użytkowniku", Name)
        print("Dostępne operacje:")
        print("1. Stwórz konto")
        print("2. Wpłata")
        print("3. Sprawdź saldło konta")
        print("4. Wypłata")
        print("5. Dane klienta")
        print("6. Wyjście")
        choice = int(input("Podaj numer opcji: "))
        make_choice()
    else:
        print("Niepoprawne dane :(")
        print("1. Spróbuj ponownie")
        print("2. Wyjście")
        choice = int(input("Podaj numer opcji: "))
        if(choice == 1):
            run()
        elif(choice == 2):
            print("Wyjście")
        else:
            print("Niepoprawny numer opcji")

def make_choice():
        if(choice == 5):
            print("\nDane klienta:\n")
            print(selected_client.Person_info())
            menu2()
        elif(choice == 1):
            first_part = randint(1000, 9999)
            second_part = randint(1000, 9999)
            third_part = randint(1000, 9999)
            fourth_part = randint(1000, 9999)
            pin = randint(1000, 9999)
            account_number = str(first_part) + " " + str(second_part) + " " + str(third_part) + " " + str(fourth_part)
            print("\nNumer konta:", account_number)
            print("Twój PIN:", pin)
            bank.createAcc(account_number, pin)
            menu2()
        elif(choice == 2):
            deposit_amount = int(input("\nPodaj kwotę: "))
            selected_account.deposit(deposit_amount)
            print("Dostępne środki:", selected_account.checkBal())
            menu2()
        elif(choice == 4):
            withdraw_amount = int(input("\nPodaj kwotę: "))
            selected_account.withdraw(withdraw_amount)
            print("Pozostałe środki:", selected_account.checkBal())
            menu2()
        elif(choice == 3):
            print("\nŚrodki na koncie:", selected_account.checkBal())
            menu2()
        elif(choice == 6):
            print("Wyjście")
        else:
            print("Niepoprawny numer opcji")

def menu2():
    global choice
    print("\nWybierz następną operację:")
    print("1. Stwórz konto")
    print("2. Wpłata")
    print("3. Sprawdź saldło konta")
    print("4. Wypłata")
    print("5. Dane klienta")
    print("6. Wyjście")
    choice = int(input("Podaj numer operacji: "))
    make_choice()

run()