const numbers = [3, 4 , 5, 6, 7, 8,];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const square = element * element;
//     output.push(square);
// }

// function square(element){
//     return element * element;
// }
// const result = numbers.map(square);
// console.log(result);

// const result = numbers.map(function(element, index,array){
//     return element * element;
// })

const result = numbers.map(x => x*x);
console.log(result)

const result1 = numbers.filter(x => x>4);
console.log(result1);
const result2 = numbers.find(x => x > 5);
console.log(result2);
