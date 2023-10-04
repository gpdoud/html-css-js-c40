const url = "http://localhost:5555/api/products";

// get all product
const productList = () => {

    return $.getJSON(`${url}`);

}
// get product by id
const productGet = (id) => {

    return $.getJSON(`${url}/${id}`);

}