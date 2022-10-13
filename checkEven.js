function checkEven(number){
    let num = number % 2;
    if( num === 0){
        return true;
    }
    return false;
}
const evenNumber = 32;
const evenNumberCheck = checkEven(evenNumber);
console.log(evenNumberCheck);

const oddNumber = 33;
const oddNumberCheck = checkEven(oddNumber);
console.log(oddNumberCheck);
