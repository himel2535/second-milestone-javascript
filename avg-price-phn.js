const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function mobiles(phones){
    let sum=0;
    let avg=0;
    for (phone of phones){
        sum=sum+phone.price;
        avg=sum/phones.length;
    }
    return avg.toFixed(2);
}
const avg=mobiles(phones);
console.log(avg);