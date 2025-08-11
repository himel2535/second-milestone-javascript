const phones=[
    {name:'samsung',price:30000,color:'black',camera:'12mp'},
    {name:'Mi',price:10000,color:'black',camera:'12mp'},
    {name:'Iphone',price:80000,color:'black',camera:'12mp'},
    {name:'Oppo',price:20000,color:'black',camera:'12mp'},
    {name:'Nokia',price:15000,color:'black',camera:'12mp'},
    {name:'htc',price:21000,color:'black',camera:'12mp'}
]

function cheapestPhone(phones){
    let min = phones[0]
    for (phone of phones){
        if(min.price>phone.price){
            min=phone;
        }
    }
    return min;
}
const cheapest=cheapestPhone(phones);
console.log(cheapest);