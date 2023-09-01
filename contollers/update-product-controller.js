import { productServices } from "../services/product-services.js";

const form = document.querySelector("[data-form]");
const img = document.querySelector("[data-img]")
/* seleccionar un div > crear objeto imagen > insertar url imagen > insertar objeto imagen en div seleccionado */


const obtainInfo = async () =>{
    const newUrl = new URL(window.location);
    const id = newUrl.searchParams.get("id");

    if (id == null){
        window.location.href = "../screens/index.html";
    }

    const name = document.querySelector("[data-name]");
    const url = document.querySelector("[data-url]");
    const price = document.querySelector("[data-price]");

    try {
        const product = await productServices.readProduct(id);
    
        if (product.name && product.price && product.imageUrl){
            name.value = product.name;
            url.value = product.imageUrl;
            price.value = product.price;

            const createImg = document.createElement("img");
            createImg.src = product.imageUrl;
            img.appendChild(createImg);

        }else{
            throw new Error();
        }
        
        
    } catch (error) {
      window.location.href = "../screens/index.html";
    }
};

obtainInfo();


form.addEventListener("submit", (event) =>{
    event.preventDefault(); 
    const newUrl = new URL(window.location);
    const id = newUrl.searchParams.get("id");

    const name = document.querySelector("[data-name]").value;
    const imageUrl = document.querySelector("[data-url]").value;
    const price = document.querySelector("[data-price]").value;

    productServices.updateProduct(name,price,imageUrl,id).then(()=> window.location.href = "../screens/index.html");


});

/* Delete Button */

const deleteBtn = document.querySelector("[data-delete]")
deleteBtn.addEventListener("click", (event) =>{
    event.preventDefault;
    const newUrl = new URL(window.location);
    const id = newUrl.searchParams.get("id");
    

    console.log ("boton escuchado", id);


    productServices.deleteProduct(id)
    .then( (respuesta) =>{console.log(respuesta);
    }).catch((err) => alert("Ocurrio un error",err));
  });






