class Ingredient:
    def __init__(self, name, am):
        self.name = name
        self.amount = am
 
class Drink:
    def __init__(self, ings, cap):
        self.ings = ings
        self.cap = cap
 
class Barman:
    def createDrink(self, name1, amount1, name2, amount2, name3, amount3):
        total_amount = amount1 + amount2 + amount3
        ings = [Ingredient(name1, amount1), Ingredient(name2, amount2), Ingredient(name3, amount3)]
        return Drink(ings, total_amount)
 
    def printDrink(self, drink):
        ings_names = ', '.join([ingredient.name for ingredient in drink.ings])
        prop = ', '.join([str(round(ingredient.amount / drink.cap, 2)) for ingredient in drink.ings])
        print(f"Składniki drinka to: {ings_names} w proporcjach {prop}. Jego pojemność to {drink.cap}ml")
 

barman = Barman()
drink = barman.createDrink("Sok z ananaska", 120, "Likier malibu", 50, "Mleczko kokosowe", 100)
barman.printDrink(drink)