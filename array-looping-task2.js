const numbers = [12, 98, 5, 41, 23, 78, 46];
let even_number=[]
for (let number of numbers) {
  if (number % 2 === 0) {
    even_number.push(number)
  }
}
console.log('The array of even numbers is :',even_number)
even_number.sort(function(a,b){return b-a});
console.log('After sorting this array order by descending:',even_number)

