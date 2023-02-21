let shoppingItem = [
    {
        product: "Power bank",
        price: 1200,
        quantity: 5
    },
    {
        product: "Charger" ,
        price: 500,
        quantity: 2,
    },
    {
        product: "Shirt" ,
        price: 1000,
        quantity: 5,   
    },
    {
        product: "Pant" ,
        price: 800,
        quantity: 4,   
    },
    {
        product: "Keyboard" ,
        price: 1500,
        quantity: 1  
    }
];

function totalPrice(product){
    let sumPrice = 0;
    let sumQuantity = 0;
    for(i = 0; i < product.length; i++){
        let element = product[i];
        sumPrice += element.price*element.quantity;
        sumQuantity += element.quantity;    
    };
    let result = "Quantity: " + sumQuantity + ", " + "Price: " + sumPrice + ".";
    return result;
}

let price = totalPrice(shoppingItem);

document.write(price);
document.write("<br/>");
console.log(price);

function totalPriceQ(product){
    let sumPrice = 0;
    let productOneQuantity = 0;
    let productTwoQuantity = 0;
    let productThreeQuantity = 0;
    let productFourQuantity = 0;
    let productFiveQuantity = 0;
    for(i = 0; i < product.length; i++){
        let element = product[i];
        if(element.product == 'Power bank'){
            productOneQuantity += element.quantity;
        }
        if(element.product == 'Charger'){
            productTwoQuantity += element.quantity;
        }
        if(element.product == 'Shirt'){
            productThreeQuantity += element.quantity;
        }
        if(element.product == 'Pant'){
            productFourQuantity += element.quantity;
        }
        if(element.product == 'Keyboard'){
            productFiveQuantity += element.quantity;
        }
        sumPrice += element.price*element.quantity;
        // sumQuantity += element.quantity;    
    };
    let result = "Quantity: " + "Power Bank: " + productOneQuantity + "," + "Charger: " + productTwoQuantity + "," + "Shirt: " + productThreeQuantity + "," + "Pant: " + productFourQuantity + "," + "Keyboard: " + productFiveQuantity + ", " + "Total Price: " + sumPrice + ".";
    return result;
}


console.log(totalPriceQ(shoppingItem));
document.write(totalPriceQ(shoppingItem));
