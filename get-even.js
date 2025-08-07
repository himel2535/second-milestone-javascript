function getEven(numbers){
    const even=[];
    for(number of numbers){
        if(number%2===0){
            even.push(number);
        }
    } 
    return even;
}
let arr=[2,6,3,9,10];
result=getEven(arr);
// console.log(result);


function sumEven(numbers){
    console.log(numbers)
    let sum=0;
    for (number of numbers){
        if(number%2===0){
            sum=sum+number;
        }
    }
    return sum;
}
arr=[2,5,8,10,4,9,5,2]
total=sumEven(arr);
console.log(total);
