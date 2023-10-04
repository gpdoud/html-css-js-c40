

$(() => {
    productList()
        .done((res) => {
            getAllProducts(res);
        });
});

const getAllProducts = (products) => {
    let tbody = $("#tbody");
    tbody.empty();
    for(let p of products) {
        let tr = $("<tr></tr>");
        $(`<td>${p.id}</td>`).appendTo(tr);
        $(`<td>${p.partNbr}</td>`).appendTo(tr);
        $(`<td>${p.name}</td>`).appendTo(tr);
        $(`<td>${p.price}</td>`).appendTo(tr);
        let tdAction = $("<td></td>");
        $(`<a href="get-product.html?id=${p.id}">Detail</a>`).appendTo(tdAction);
        $(`<span> | </span>`).appendTo(tdAction);
        $(`<a href="put-product.html?id=${p.id}">Edit</a>`).appendTo(tdAction);
        tdAction.appendTo(tr);
        tr.appendTo(tbody);
    }
}