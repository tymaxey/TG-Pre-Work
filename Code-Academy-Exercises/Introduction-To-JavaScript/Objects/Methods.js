let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below

let alienShip = {
  retreat() {
    console.log(retreatMessage)
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};

alienShip.retreat();

alienShip.takeOff();

// when the data stored on an object is a function we call that a method

/* console:
We no longer wish to conquer your planet. It is full of dogs, which we do not care for.
Spim... Borp... Glix... Blastoff!
