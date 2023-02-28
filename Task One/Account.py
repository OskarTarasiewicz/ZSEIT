# Inicjalizacja klasy BankAccount

# Klasa posiada paramentry:
# - numerkonta
# - PIN do konta
# - saldo konta

# Klasa posiada metody:
# - deposit - wpłata środków
# - withdraw - wypłata środków
# - checkBal - sprawdzenie salda
# - getAccNum - zwraca numer konta

class BankAccount:
    def __init__(self, accountID, accountNumber, accountPin, balance):
        self.accountID = accountID
        self.accountNumber = accountNumber
        self.accountPin = accountPin
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount > self.balance:
            print("Nie posiadasz wystarczającej kwoty na koncie!!!")
        else:
            self.balance -= amount

    def checkBal(self):
        return self.balance

    def getAccNum(self):
        return self.accountNumber

First_client_account = BankAccount(1, "5367 9277 7339 9309", "1337", 476476547)
Second_client_account = BankAccount(2, "5764 6543 6456 6746", "1221", 3453452465)
Third_client_account = BankAccount(3, "6476 0990 4764 1231", "2332", 9866345243)
Fourth_client_account = BankAccount(4, "4676 6666 0660 4455", "2137", 734545245)
Fifth_client_account = BankAccount(5, "7857 3242 4576 5878", "8989", 87)