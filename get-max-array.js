
function getMax(numbers){
    let max=numbers[0];
    for (number of numbers){
       if(number>max){
        max=number;
       } 
    }
    return max;
}
const numbers=[2,7,4,2,20,11];
const result=getMax(numbers);
console.log(result)