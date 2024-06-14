console.log("vaibhav is the great man")
let listProducts = document.querySelector("#products")
let products = null;

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(res => {
    console.log(res.products)
    products = res.products;
    addProducts();
}).catch(err=>listProducts.innerText = "network error occur, please connet to network to see products");

function addProducts(){
    products.forEach(product => {
        let newProduct = document.createElement('a');
        newProduct.href = "/detail.html?id="+product.id;
        newProduct.classList.add('item');
        newProduct.innerHTML=
        ` <img src = "${product.thumbnail}">
        <h2>${product.title}</h2>
        <p >${product.brand}</p>
        <p >${product.category}</p>
        <p >${product.price}</p>
        `
        listProducts.appendChild(newProduct)
    });
}