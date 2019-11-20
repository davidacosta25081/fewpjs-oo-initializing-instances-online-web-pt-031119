class Breakfast {
  constructor(food,drink) {
    this.food = food;
    this.drink = drink;
  }
}    

class Lunch {
  constructor(soup,drink) {
    this.soup = soup;
    this.drink = drink;
  }
} 

class Dinner {
  constructor(salad,soup,entree,dessert) {
    this.salad = salad;
    this.soup = soup;
    this.drink = entree;
    this._dessert = dessert;
  }
} 