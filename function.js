// function addNum(a, b) {
//   return a + b;
// }
// var result = addNum(100, 200);
// console.log(result);

// function minusNum(a, b) {
//   return a - b;
// }
// var result = minusNum(55, 100);
// console.log(result);

// function addNumbers(a, b) {
//   console.log(arguments);
//   return a + b;
// }
// const result = addNumbers(5, 8, 9, 6);
// console.log(result);

// Output: [5, 8, 9, 6];
// 13;



function x(a,b){
    var sum=0;
    for(var num of arguments){
        sum=sum+num;
    }
    return sum;
    
}
var y=x(20,30,40,50);
console.log(y);