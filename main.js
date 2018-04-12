var coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },


}

makeDrink = function (AnyCoffeeShop ,drinkType) {
  if (AnyCoffeeShop.drinkRequirements[drinkType]) {
    if (AnyCoffeeShop.beans - AnyCoffeeShop.drinkRequirements[drinkType] >= 0) {
      alert("enjoy your drink!");
      return AnyCoffeeShop.beans -= AnyCoffeeShop.drinkRequirements[drinkType];
    } else {
      return alert("there are not enough beans to make your drink");
    }
  } else {
    alert("we are sorry, but we do not make that drink");
  }

}



makeDrink(coffeeShop, "latte");
makeDrink(coffeeShop, "americano");
makeDrink(coffeeShop, "filtered");
makeDrink(coffeeShop, "doubleShot");
makeDrink(coffeeShop, "frenchPress");
