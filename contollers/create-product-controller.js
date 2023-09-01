import { productServices } from "../services/product-services.js";

const form = document.querySelector("[data-form]");


form.addEventListener("submit", event =>{
    event.preventDefault();

    const url=document.querySelector("[data-url]").value;
    const name=document.querySelector("[data-name]").value;
    const price=document.querySelector("[data-price]").value;

    console.log(url, name,price)

    productServices.createProduct(name, price, url)
    
    .then(response =>{ 
        window.location.href = "../screens/index.html";
        console.log(response);
    })
    .catch(err => console.log(err));
});
