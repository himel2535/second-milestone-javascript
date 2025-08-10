// function getMax(num1,num2){
//     if(num1>num2){
//         return num1;
//     }
//     else{
//         return num2;
//     }
// }
// const result1 = getMax(75,70);
// console.log(result1);


function max(num1,num2,num3){
    if(num1>num2 && num1>num3){
        return num1;
    }
    else if(num2>num1 && num2>num3){
        return num2;
    }
    else{
        return num3;
    }
}
let result=max(20,6,10);
console.log(result)