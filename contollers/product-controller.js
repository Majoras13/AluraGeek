import { productServices } from "../services/product-services.js";

const newProduct = (imageUrl, name, price, id)=>{
    const card = document.createElement("div");
    const content = `
    <div  class="card">
        <img src="${imageUrl}" alt="imagen producto ${id}"/>
        <h1 class="product-name">${name}</h1>
        <p class="product-price">${price}</p>
        <a class="product-watch" href="../screens/product.html?id=${id}">Ver Producto</a>
        <a class="edit-product" href="../screens/edit-products.html?id=${id}">Editar Producto</a>
    </div>`

    card.innerHTML = content;
    card.dataset.id=id; // esto agrega un parametro en este caso un id a el div 'card'
    
    return card;
}

const products = document.querySelector("[data-product]");

const render = async () =>{
    try {
        const listProduct = await productServices.productsList()

        listProduct.forEach(element => {
            products.appendChild(
                newProduct(
                    element.imageUrl,
                    element.name,
                    element.price,
                    element.id,
                    )
                )
        });
    } catch (error) {
        console.log(error)
    };
};

render();