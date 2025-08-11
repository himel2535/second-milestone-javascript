const products=[
    {name:'shampoo',price:100,quantity:3},
    {name:'soap',price:50,quantity:5},
    {name:'face-wash',price:300,quantity:2},
    {name:'fair & lovely',price:150,quantity:1},
    {name:'perfume',price:1000,quantity:2}
]
function shopping(products){
    sum=0;
    for(product of products){
        let x = product.price*product.quantity;
        sum=sum+x;
    }
    return sum;
}
const total=shopping(products);
console.log(total)