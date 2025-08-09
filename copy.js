// let price=10;
// let com_price=price;
// price=40;
// com_price=100;
// console.log(price);
// console.log(com_price)

////----non-primitive---->
// let products=[23,20,78,100];
// let update_products=products;
// products[0]=200;
// update_products[1]=500;
// console.log(products);
// console.log(update_products);

//-----One way for unchanged copy ---->
let products=[23,20,78,100];
let com_products=[]
for(let product of products){
    com_products.push(product)
}

products[0]=200;
com_products[1]=500;
console.log(products);
console.log(com_products);

//------another way for unchanged copy------>

let products=[23,20,78,100];
let com_products=Array.from(products)
products[0]=200;
com_products[1]=500;
console.log(products);
console.log(com_products);


//-------another way for unchanged copy----->

let products=[23,20,78,100];
let com_products=[].concat(products)
products[0]=200;
com_products[1]=500;
console.log(products);
console.log(com_products);


// simple way for unchanged---->

let products=[23,20,78,100];
let com_products=[...products]
products[0]=200;
console.log(products);
console.log(com_products);