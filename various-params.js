function evenSizedString(text){
    if(text.length %2 === 0){
        // console.log("wow this is even");
        return true;
    }
    return false;
    // else{
    //     // console.log("no this is not even")
    //     return false;
    // }
}

const result1=evenSizedString("mojada")
const result2=evenSizedString("mojadar")
const result3=evenSizedString("mojadarkhabar")
const result4=evenSizedString("kocormocor")
// console.log(result1,result2,result3,result4);

// -----function with boolean---->

function doubleOrTriple(number,boolean){
    if (boolean===true){
        return number*2;
    }
    return number*3;
}
const x=doubleOrTriple(5,true)
const y=doubleOrTriple(5,false)
// console.log(x,y)


// ------function with array--->

function text(array){
    len=array.length;
    console.log(len)
}
text([12,3,4,1,5,2,8])
