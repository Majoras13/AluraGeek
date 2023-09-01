//Fetch API

const productsList = () =>fetch("http://localhost:3000/producto").then( (response) => response.json()).catch((err) => console.log(err));


//Create
const createProduct = (name,price,imageUrl) => {
    return fetch ("http://localhost:3000/producto", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name,imageUrl,price, id: uuid.v4()})
    })
    .then(response =>{
        if (response.ok){
            return response
        }
        throw new Error("No se encontraron datos de producto")
    });
};

//Read
const readProduct = (id) => fetch (`http://localhost:3000/producto/${id}`).then((response) => response.json()).catch((err) => console.log(err));

//Update

const updateProduct = (name,price,imageUrl,id) => {
    return fetch (`http://localhost:3000/producto/${id}`,{
        method: "PUT",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({name,price,imageUrl})
    }).then (response => response).catch((err) => console.log(err));
};


//Delete
const deleteProduct = (id) => fetch (`http://localhost:3000/producto/${id}` ,{method: "DELETE",});


export const productServices ={
    productsList,
    createProduct,
    readProduct,
    updateProduct,
    deleteProduct,
}