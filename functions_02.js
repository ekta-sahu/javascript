function calculateBill(...prices){ // ...rest , ...spread
    return prices;
}

console.log(calculateBill(100,199,80,450,2000))

function calculateBill_1(val1, val2, ...prices){ // ...rest , ...spread
    return prices;
}

console.log(calculateBill_1(100,199,80,450,2000))

const product1 = {
    name :"Sofa",
    price: 40000
}

function getProduct(obj){
    return `Procduct is ${obj.name} , price is ${obj.price}`; // does not provide type saftey
}

console.log(getProduct(product1))

console.log(getProduct({
    name : "Shoes",
    price : 799
}))

const arr1 = [100,200,300,400,500]
function returnVal(getArr1){
    return getArr1[0];
}
console.log(returnVal(arr1))