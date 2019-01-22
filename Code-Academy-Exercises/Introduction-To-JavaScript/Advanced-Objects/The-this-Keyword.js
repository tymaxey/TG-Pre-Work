const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};

console.log(robot.provideInfo());

//  The this keyword references the calling object which provides access to the calling object's properties

/* console: 
I am 1E78V2 and my current energy level is 100.
