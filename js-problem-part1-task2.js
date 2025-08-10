function arr(items){
    target=2;
    count=0;
    for (item of items){
        if(item===target){
            count++;
        }
    }
    return count;
}
const items = [2,5,8,9,2,4,2,7,8,2];
arr(items);
console.log(count);

