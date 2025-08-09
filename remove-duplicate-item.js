
function arr(items){
    let freshItems=[];
    for(item of items ){
        if(freshItems.includes(item)===false){
            freshItems.push(item)
        }
    }
    // console.log(freshItems);
    return freshItems;
}
arr1=arr([1,4,2,33,7,1,33,4]);
arr2=arr(['abul','kabul','abul','cabul','kabul']);
arr3=arr([2,3,5,3,2,6]);
arr4=arr([true,false,true]);
console.log(arr1,arr2,arr3,arr4);