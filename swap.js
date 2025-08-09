let a=3;
let b=4;
console.log(a,b)
const temp=a;
a=b;
b=temp;
console.log(a,b)


// ------Another way(Destructure)----//
let x=7;
let y=10;
console.log(x,y);
[x,y]=[y,x];
console.log(x,y)