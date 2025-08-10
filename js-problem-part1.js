// function f2c(f){
//     c=(f-32)*5/9;
//     return c;
// }
// result=f2c(98);
// console.log(result.toFixed(2),'Degree')


function c2f(c){
    f=(c*9/5)+32;
    return f;
}
// const c=40;
result=c2f(40);
console.log(result,'degree fahrenheit')
// console.log(`${c} degree celsius = ${result} degree fahrenheit`);