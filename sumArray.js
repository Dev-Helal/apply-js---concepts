// summation of array numbers
function sumArray(numbers){
    var sum =0;
    for(let i = 0;  i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum+ element;
        // console.log(index,element,sum);
    }
    return sum;
}

function findOddNumber(numbers){
    const oddNumbers = [];
    for(let i = 0;  i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 === 1 ){
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const inputNumber = [10, 21, 30, 41, 50, 61, 70, 81, 90, 99];
// const oddNumbers = findOddNumber(inputNumber);
const oddNumber = findOddNumber(inputNumber);
console.log(oddNumber);
const sumOddNumber = sumArray(oddNumber);
console.log('Summation of Odd Number :', sumOddNumber);
