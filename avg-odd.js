function avgOdd(arr){
    const odds=[];
    for (item of arr){  
        if(item%2===1){
           odds.push(item) 
        }
    }
    let sum=0;
    for (item of odds){
        sum=sum+item;
    }
    len=odds.length;
    total=sum/len;
    return total;
    // console.log(total)

}
oddArr1=avgOdd([1,5,3,7,5,37]);
oddArr2=avgOdd([1,5,3,7,33,5]);
oddArr3=avgOdd([1,5,3,7,4,5]);
oddArr4=avgOdd([1,5,3,7,66,11,5]);
oddArr5=avgOdd([1,5,3,7,43,11,5]);
console.log(oddArr1.toFixed(2),oddArr2.toFixed(2),oddArr3.toFixed(2),oddArr4.toFixed(2),oddArr5.toFixed(2))

