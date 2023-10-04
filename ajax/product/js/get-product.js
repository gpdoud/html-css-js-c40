
$(() => {
    let id = +document.URL.split("=")[1]
    productGet(id)
        .done((res) => {
            getProduct(res);
        });
});

const getProduct = (product) => {
    $("#xid").val(product.id);
    $("#xpartnbr").val(product.partNbr);
    $("#xname").val(product.name);
    $("#xprice").val(product.price);
}