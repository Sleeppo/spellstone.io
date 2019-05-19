import Deck from './deck.mjs';

export default class Player {
  constructor(player) {
    this.name = player.name;
    this.decks = [];
    this.decks['default'] = new Deck();
  }
}
