function vowel(leter){
    switch(leter){
        case ('a'):
            console.log('This is a vowel leter');
            break;
        case ('e'):
            console.log('This is a vowel leter');
            break;
        case ('i'):
            console.log('This is a vowel leter');
            break;
        case ('o'):
            console.log('This is a vowel leter');
            break;
        case ('u'):
            console.log('This is a vowel leter');
            break;
        default:
            console.log('This is a constant');
    }
}
const leter = 'd';
const output = vowel(leter);

// 1 to 1000 even number summation

// for(var i = 0; i <= 100; i += 2){
//     console.log(i);
// }
function math(){
    let num = 0;
    for(var i = 0; i <= 100; i += 2 ){
        if(i % 2 == 0){
            num = num +i;
        }
    }
    console.log(num);
    return num;
}
math();

// 1 to 10 odd number er jogfol
function oddSummation(){
    let odd = 1;
    for(var i = 1; i <= 10; i += 2){
        if(i % 2 ==0){
            odd = odd + i;
        }
    }
    console.log(odd);
    return odd;
}
oddSummation();

// for loop use kore 1 to 100 even number er jogfol
// let num1 = 0;
// for(var i = 0; i <= 100; i += 2){
//     if(i % 2 == 0){
//         num1 = num1+i;
//     }
// }
// console.log(num1);