function output(number){
    let i = number;
    let reslut = 1;
    while(i >= 1){
        reslut = reslut * i;
        i--;
    }
    return reslut;
}
const out =output(9);
console.log('output is :',out);