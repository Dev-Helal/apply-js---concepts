// meter to feet

function meterToFeet(meter){
    const feet = meter / 3.280;
    const fixedFeet = feet.toFixed(3);
    const floatFeet = parseFloat(fixedFeet);
    return floatFeet;
}
const miter = 200;
const outputFeet = meterToFeet(miter);
console.log(outputFeet);