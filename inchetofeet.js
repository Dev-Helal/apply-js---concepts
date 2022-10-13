// Inche to Feet Converter

function incheToFeet(inches){
    const feet = inches / 12;
    return feet;
}
const inputInche = 222;
const outputFeet = incheToFeet(inputInche);
console.log('my reslut :',outputFeet,' Feet');


// Feet to Inche Converter 

function feetToInche(feet){
    const inche =feet * 12;
    return inche;
}
const inputFeet = 50;
const outputInche = feetToInche(inputFeet);
console.log('My reslut :',outputInche,' Inche');
