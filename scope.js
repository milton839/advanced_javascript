let bonus = 20;
function sum(num1, num2){
    let output = num1 + num2 + bonus;
    console.log(bonus);
    return output;
}
var result = sum(10,5);
console.log(result);
console.log(bonus);