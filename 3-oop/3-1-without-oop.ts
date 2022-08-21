{
  const BEANS_GRAMM_PER_SHOT: number = 7;
  let coffeeBeans: number = 15;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error("Not enough coffee beans!!");
    }
    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;

    return {
      shots,
      hasMilk: false,
    };
  }

  const coffees = makeCoffee(2);

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

}
