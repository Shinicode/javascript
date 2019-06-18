//* object property shorthand 

const name = `Alex`
const userAge = 21 

const user = {
    name,
    age : userAge,
    location : "Athens"
}
console.log(user);

//* Object destructuring 


const product = {
    label:'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

// const {label, price, rating = 5} = product
// console.log(label);
// console.log(price);
// console.log(rating);


const transaction = (type, {label, stock}) => {
    console.log(type , stock, label);
}

transaction('order', product)

