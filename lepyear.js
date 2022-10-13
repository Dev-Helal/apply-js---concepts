// var year = 2000;

// if((year / 4) && (year == 0)){
//     console.log('this is leep Year');
// }
// else{
//     console.log('not lep year');
// }
function leepyear(year){
    if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
        console.log('this year is leep year');
    }
    else{
        console.log('this is a not leep year');
    }
}
const year = 2021;
leepyear(year);