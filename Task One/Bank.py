# Inicjalizacja klasy Bank

# Klasa posiada parametry:
# - numery kont
# - PINy kont

# Klasa posiada metody:
# - createAcc - tworzy nowe konto
# - delAcc - usuwa konto
# - showAcc - wyświetla konta

class Bank:
    def __init__(self, name):
        self.name = name
        self.accountsNumbers = []
        self.accountsPins = []

    def createAcc(self, account, pin):
        self.accountsNumbers.append(account)
        self.accountsPins.append(pin)

    def delAcc(self, account, pin):
        self.accountsNumbers.remove(account)
        self.accountsPins.remove(pin)

    def showAcc(self):
        print(self.accountsNumbers)

bank = Bank("iBank")