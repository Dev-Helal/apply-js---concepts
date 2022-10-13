function factorial(number){
    let factNumber = 1;
    for(let i =1; i <= number; i++){
        factNumber *= i;
    }
    return factNumber;
}

function findFactorial(number){
    let input = 1;
    for(let i = number; i >= 1; i--){
        input = input * i;
    }
    return input;
}
const out = 9;
const output = factorial(out);
const findOutput = findFactorial(out);
console.log('3 factorial  is :', output);
console.log('factorial output is :', findOutput);
