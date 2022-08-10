{
  class CoffeeMaker {
    #shot;
    coffeeBeans = 30;
    static BEANS_GRAMM_PER_SHOT = 7; //class level => object마다 재생성되지 않는다

    constructor(shot: number) {
      this.#shot = shot;
    }

    get makeCoffee() {
      if (this.coffeeBeans < this.#shot * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!!");
      }
      this.coffeeBeans -= this.#shot * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots: this.#shot,
        hasMilk: false,
      };
    }
  }

  const coffee = new CoffeeMaker(3);

  console.log(coffee.makeCoffee);
}
