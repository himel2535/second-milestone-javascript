// const today=new Date();
// console.log(today);

const date = new Date('2043-10-23')
console.log(date.getMonth());
console.log(date.getDate())

const specificDate=new Date(2091,0,26)
console.log(specificDate)
specificDate.setMonth(10)
console.log(specificDate)
console.log(specificDate.toLocaleDateString('en-GB'))
