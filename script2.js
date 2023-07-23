let pedometer = {
  step: 0,
  increase() {
    return this.step++;
  },
  decrease() {
    return --this.step;
  },
  reset() {
    return (this.step = 0);
  },
  read() {
    console.log(this.step);
  },
};

pedometer.increase();
pedometer.read();
pedometer.increase();
pedometer.read();
pedometer.decrease();
pedometer.read();
pedometer.reset();
pedometer.read();
