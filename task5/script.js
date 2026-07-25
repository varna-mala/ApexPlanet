// Product Data

const products = [
{
id:1,
name:"Men's T-Shirt",
price:499,
image:"https://picsum.photos/300?random=1"
},

{
id:2,
name:"Women's Dress",
price:999,
image:"https://picsum.photos/300?random=2"
},

{
id:3,
name:"Sneakers",
price:1499,
image:"https://picsum.photos/300?random=3"
},

{
id:4,
name:"Smart Watch",
price:2499,
image:"https://picsum.photos/300?random=4"
},

{
id:5,
name:"Headphones",
price:1299,
image:"https://picsum.photos/300?random=5"
},

{
id:6,
name:"Backpack",
price:899,
image:"https://picsum.photos/300?random=6"
}

];

// Load Products

function displayProducts(){

const productContainer=document.getElementById("productContainer");

if(!productContainer) return;

productContainer.innerHTML="";

products.forEach(product=>{

productContainer.innerHTML+=`

<div class="product">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<button onclick="addToCart(${product.id})">
Add to Cart
</button>

</div>

`;

});

}

// Add to Cart

function addToCart(id){

let cart=JSON.parse(localStorage.getItem("cart")) || [];

let product=products.find(item=>item.id===id);

cart.push(product);

localStorage.setItem("cart",JSON.stringify(cart));

updateCartCount();

alert("Product Added Successfully!");

}

// Update Cart Counter

function updateCartCount(){

let cart=JSON.parse(localStorage.getItem("cart")) || [];

let count=document.getElementById("count");

if(count){

count.innerText=cart.length;

}

}

// Show Cart

function loadCart(){

let cart=JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer=document.getElementById("cartContainer");

const total=document.getElementById("total");

if(!cartContainer) return;

cartContainer.innerHTML="";

let totalPrice=0;

cart.forEach((item,index)=>{

totalPrice+=item.price;

cartContainer.innerHTML+=`

<div class="cart-item">

<div>

<h3>${item.name}</h3>

<p>₹${item.price}</p>

</div>

<button onclick="removeItem(${index})">

Remove

</button>

</div>

`;

});

if(total){

total.innerHTML="Total : ₹"+totalPrice;

}

}

// Remove Product

function removeItem(index){

let cart=JSON.parse(localStorage.getItem("cart")) || [];

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

loadCart();

updateCartCount();

}

// Search Products

function searchProducts(){

let input=document.getElementById("search").value.toLowerCase();

let cards=document.querySelectorAll(".product");

cards.forEach(card=>{

let title=card.querySelector("h3").innerText.toLowerCase();

if(title.includes(input)){

card.style.display="block";

}else{

card.style.display="none";

}

});

}

displayProducts();

updateCartCount();

loadCart();