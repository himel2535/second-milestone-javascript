
function getLeapYear(year){
    if (year%4===0){
        if(year%100===0 && year%400!==0){
            console.log(year,'is not leap year')
        }
        else{
            console.log(year,'is leap year')
        }
    }
    else{
        console.log(year,'is not leap year')
    }
    return year;
}
getLeapYear(2000);