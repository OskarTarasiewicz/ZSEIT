import math

class Calculator:
    print("Witaj w kalkulatorku\n\n")
    print("1. Dodawanie")
    print("2. Odejmowanie")
    print("3. Mnożenie")
    print("4. Dzielenie")
    print("5. Potęgowanie")
    print("6. Pierwiastkowanie")
    print("7. Sinus")
    print("8. Cosinus")
    print("9. Tangens")
    print("10. Wyjście")

    option = int(input("Podaj numer opcji: "))
    if option not in range(1, 11):
        print("Niepoprawna opcja")
    else:
        match option:
            case 1:
                a = float(input("Podaj liczbę a: "))
                b = float(input("Podaj liczbę b: "))
                print (f"Wynik dodawania to: {round(a+b)}")
            
            case 2:
                a = float(input("Podaj liczbę a: "))
                b = float(input("Podaj liczbę b: "))
                print (f"Wynik odejmowania to: {round(a-b)}")

            
            case 3:
                a = float(input("Podaj liczbę a: "))
                b = float(input("Podaj liczbę b: "))
                print (f"Wynik mnożenia to: {round(a*b)}")

            case 4:
                a = float(input("Podaj liczbę a: "))
                b = float(input("Podaj liczbę b: "))
                print (f"Wynik dzielenia to: {round(a/b)}")

            case 5:
                a = float(input("Podaj liczbę a: "))
                y = int(input("Podaj potęgę: "))
                print (f"Wynik potęgowania to: {round(math.pow(a, y))}")

            case 6:
                a = float(input("Podaj liczbę a: "))
                print (f"Wynik pierwiastkowania to: {math.sqrt(a)}")

            case 7:
                a = float(input("Podaj liczbę a: "))
                print (f"Wynik sinusowania to: {math.sin(a)}")

            case 8:
                a = float(input("Podaj liczbę a: "))
                print (f"Wynik cosunisowania to: {math.cos(a)}")

            case 9:
                a = float(input("Podaj liczbę a: "))
                print (f"Wynik tangensowania to: {math.tan(a)}")

            case 10:
                exit()

            