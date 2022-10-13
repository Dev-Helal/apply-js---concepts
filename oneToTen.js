function oneToTen(number){
    var sum = 0;
    for(let i = 0; i < number; i++){
        const index = i;
        sum = sum + i;
        // console.log(index,sum);
    }
    return sum;
}
const output = oneToTen(10);
// console.log('One to Ten Summation is :',output);

// 1 to 10 numbers multiplication
function multiplication(number){
    let mul =1;
    for(let i = 1; i <= number; i++){
        mul = mul * i;
    }
    return mul;
}
const mulOutput = multiplication(5);
console.log('1 to 10 numbers multiplication is: ', mulOutput);