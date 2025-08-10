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

// function max(num1,num2,num3){
//     if(num1>num2 && num1>num3){
//         return num1;
//     }
//     else if(num2>num1 && num2>num3){
//         return num2;
//     }
//     else{
//         return num3;
//     }
// }
// let result=max(20,6,10);
// console.log(result);

//------shortcut way---->

// const maximum=Math.max(12,45,69,22,79,10)
// console.log(maximum)

//---using function--->
// function maximum(n1,n2,n3,n4,n5,n6){
//     const maxx=Math.max(n1,n2,n3,n4,n5,n6);
//     return maxx;
// }
// const rslt=maximum(10,50,100,60,70,20);
// console.log(rslt);

//----using spread in function---->

function gettingMax(...numbers) {
    return Math.max(...numbers)   
}
const result3 = gettingMax(12, 50, 49, 100, 400, 200, 100, 28);
console.log(result3);
