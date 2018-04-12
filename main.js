//let amount = prompt("please enter the amount of beans you would like to purchase");
let cofeeType = prompt("enter you drink here");
var coffeeShop = {
  beans: 40,
  money: 50,

  drinkRequirements: {
    latte: {
      price: 4,
      beanRequirment: 10,
    },
    americano: {
      price: 5,
      beanRequirment: 8,
    },
    doubleShot: {
      price: 15,
      beanRequirment: 15,
    },
    frenchPress: {
      price: 11,
      beanRequirment: 12,
    }
  },

  buyDrink: function (coffeeObj, adrink) {
    
      if (coffeeObj.drinkRequirements[adrink]) {
        this.money += coffeeObj.drinkRequirements[adrink].price;
        makeDrink(coffeeObj, adrink);
        alert("the coffee shop now has: " + this.beans + " beans and " + this.money + " money");
      } else {
        alert("we do not have this drink");
      } 
  },

  buySupplies: function (amountToPurchase) {
    this.beans = this.beans + amountToPurchase;
    this.money -= amountToPurchase * 2;
    alert("the coffee shop now has: " + this.beans + " beans and " + this.money + " money");
  }

};

makeDrink = function (AnyCoffeeShop, drinkType) {
  if (AnyCoffeeShop.drinkRequirements[drinkType].beanRequirment) {
    if (AnyCoffeeShop.beans - AnyCoffeeShop.drinkRequirements[drinkType].beanRequirment >= 0) {
      alert("enjoy your drink!");
      return AnyCoffeeShop.beans -= AnyCoffeeShop.drinkRequirements[drinkType].beanRequirment;
    } else {
      return alert("there are not enough beans to make your drink");
    }
  } else {
    alert("we are sorry, but we do not make that drink");
  }

}

coffeeShop.buyDrink(coffeeShop, cofeeType)
//coffeeShop.buySupplies(10); // for some reason, if I use the 'amount' var as prompt, the beans property understands it as a string type, and the money property has integer type.

//makeDrink(coffeeShop, "latte");
//makeDrink(coffeeShop, "americano");
//makeDrink(coffeeShop, "filtered");
//makeDrink(coffeeShop, "doubleShot");
//makeDrink(coffeeShop, "frenchPress");
