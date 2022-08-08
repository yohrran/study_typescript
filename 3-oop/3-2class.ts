{
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
