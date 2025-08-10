function f2c(f){
    c=(f-32)*5/9;
    return c;
}
result=f2c(98);
console.log(result.toFixed(2),'Degree')

