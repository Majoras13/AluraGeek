import { productServices } from "../services/product-services.js";

const obtainInfo = async () =>{
    const newUrl = new URL(window.location);
    const id = newUrl.searchParams.get("id");

    if (id == null){
        window.location.href = "../screens/index.html";
    }


    try {
        const product = await productServices.readProduct(id);
    
        if (product.name && product.price && product.imageUrl){

            console.log(product)

            const name = product.name;
            const imageUrl = product.imageUrl;
            const price = product.price;

            const newProduct = () =>{
                const product = document.createElement("div");
                const content = `
                    <div class="product-box">
                        <div class="product-image">
                            <img src="${imageUrl}"/>
                        </div>
                        <div class="product-info">
                            <h1>${name}</h1>
                            <p>${price}</p>
                        </div>
                    </div>
                `
                product.classList.add("product");
                product.innerHTML = content;
                return product;
            }

            console.log (newProduct())

            const productInsert = document.querySelector("[data-productInfo]")

            productInsert.appendChild(newProduct());

            console.log(productInsert)



        }else{
            throw new Error();
        }
        
        
    } catch (error) {
         window.location.href = "../screens/index.html";
    }
};

obtainInfo();

