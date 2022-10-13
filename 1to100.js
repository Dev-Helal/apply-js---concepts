// for(var i = 1; i <= 100; i++){
//     console.log(i);?
// }

// for(var num = 50; num  <= 80; num += 2){
//     // console.log(num);
// }

function summation(array){
    let sum = 0;
    for(var i = 0; i < array.length; i++){
        const index =i;
        const element = array[index];
        sum = sum + element;
        // console.log(index,element);
    }
    return sum;
}
const input = [1,2,3];
const output = summation(input);
console.log(output);