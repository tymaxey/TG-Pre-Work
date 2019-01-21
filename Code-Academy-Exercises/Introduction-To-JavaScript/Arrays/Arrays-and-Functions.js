const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);

const removeElement = newArr => {
  newArr.pop()
}

removeElement(concept);

console.log(concept);

/* console: [ 'arrays', 'can', 'be', 'MUTATED' ]
[ 'arrays', 'can', 'be' ]  */
