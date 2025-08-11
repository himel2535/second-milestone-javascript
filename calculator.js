function add(num1,num2){
    const add = num1+num2;
    return add;
}
function subtract(num1,num2){
    const minus=num1-num2;
    return minus;
}
function multiplication(num1,num2){
    const multiply=num1*num2;
    return multiply;
}
function division(num1,num2){
    const divide=num1/num2;
    return divide;
}
function calculator(a,b,operation){
    if(operation==='add'){
        const result=add(a,b);
        return result;
    }
    else if(operation==='minus'){
        const result=subtract(a,b);
        return result;
    }
    else if(operation==='multiply'){
        const result=multiplication(a,b);
        return result;
    }
    else if(operation==='divide'){
        const result=division(a,b);
        return result;
    }
    else{
        return 'operation is not allowed'
    }
}
const total1=calculator(5,7,'add')
const total2=calculator(5,7,'minus')
const total3=calculator(5,7,'multiply')
const total4=calculator(5,7,'divide')
console.log("Add is:",total1," Subtract is:",total2,"Multiplication is:",total3,"Division is:",total4)