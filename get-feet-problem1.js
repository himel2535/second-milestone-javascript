// const height=66;
// feetHeight=height/12;
// // console.log(feetHeight)
// // console.log(parseInt(feetHeight))
// inchHeight=height%12;
// console.log(parseInt(feetHeight),"feet", inchHeight,"inch")

function inchToFeet(inch){
    // const inch=75;
    feetHeight=inch/12;
    inchHeight=inch%12;
    console.log(parseInt(feetHeight),'feet',inchHeight,'inch');
    return ;
}
inchToFeet(66);