const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();

//  Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object

// console: Energy is currently at 100%.
