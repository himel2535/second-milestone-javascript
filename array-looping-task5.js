let numbers=[1,2,3];
// let copy_numbers=Array.from(numbers);
let copy_numbers=[...numbers]
numbers[0]=100;
console.log(numbers);
console.log(copy_numbers);