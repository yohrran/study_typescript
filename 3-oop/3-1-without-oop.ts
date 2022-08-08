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

  class Coffee {
    #shot;
    #coffeeBeans = 30;
    #BEANS_GRAMM_PER_SHOT = 7;

    constructor(shot: number) {
      this.#shot = shot;
    }

    get makeCoffee() {
      if (this.#coffeeBeans < this.#shot * this.#BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!!");
      }
      this.#coffeeBeans -= this.#shot * this.#BEANS_GRAMM_PER_SHOT;
      return {
        shots: this.#shot,
        hasMilk: false,
      };
    }
  }

  const coffee = new Coffee(3);

  console.log(coffee.makeCoffee);
}
