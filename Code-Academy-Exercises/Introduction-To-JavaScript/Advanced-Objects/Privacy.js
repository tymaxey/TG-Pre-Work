const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high';
robot.recharge();

/* When discussing privacy in objects, we define it as the idea that only certain properties should be mutable or able to change in value

console: Recharged! Energy is currently at high30%.
