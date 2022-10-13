function sumArray(numbers){
    var sumOfArray = 0;
    for(let i = 0; i< numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sumOfArray = sumOfArray + element;
        // console.log(index, element, sumOfArray);
    }
    return sumOfArray;
}

function findOddNumber(numbers){
    const oddNumber =[];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 === 0){
            console.log(index, element);
            oddNumber.push(element);
        }
    }
    return oddNumber;
}
const inputNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbersArray = findOddNumber(inputNumber);
console.log(oddNumbersArray);

// const sumOdd = sumArray(oddNumber);
// console.log('Summation of Odd Numbers in array :', sumOdd);
const summation = sumArray(oddNumbersArray);
console.log('Summation of Odd Numbers in array :',summation);