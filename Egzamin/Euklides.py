class Euklides:
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def nwd(self):
        while self.a != self.b:
            if (self.a > self.b):
                self.a = self.a - self.b
            else:
                self.b = self.b - self.a
        else:
            print(self.a)


def main():
    a = int(input("Podaj liczbe a: "))
    b = int(input("Podaj liczbe b: "))
    euklides = Euklides(a, b)
    euklides.nwd()


if __name__ == "__main__":
    main()
