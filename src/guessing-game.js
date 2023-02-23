class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.mean = Math.ceil((this.min + this.max) / 2);
    return this.mean;
  }

  lower() {
    this.max = this.mean;
  }

  greater() {
    this.min = this.mean;
  }
}

module.exports = GuessingGame;
