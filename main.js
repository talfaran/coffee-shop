let amount = prompt("please enter the amount of beans you would like to purchase");
var coffeeShop = {
  beans: 40,
  money: 50,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12,
  },

buySupplies: function (amountToPurchase) {
  this.beans = this.beans + amountToPurchase;
  this.money -= amountToPurchase*2;
  alert("the coffee shop now has: " + this.beans + " beans and " + this.money +" money");
}

};

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

coffeeShop.buySupplies(10); // for some reason, if I use the 'amount' var as prompt, the beans property understands it as a string type, and the money property has integer type.

makeDrink(coffeeShop, "latte");
makeDrink(coffeeShop, "americano");
makeDrink(coffeeShop, "filtered");
makeDrink(coffeeShop, "doubleShot");
makeDrink(coffeeShop, "frenchPress");
