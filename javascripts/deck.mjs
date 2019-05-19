class Deck {
  constructor() {
    this.hero = new Hero({name: "Elyse the Ranger", type: "Hero", });
    this.units = [];
    this.units[0] = new Card();
    this.units[1] = new Card();
    this.units[2] = new Card();
  }
}
