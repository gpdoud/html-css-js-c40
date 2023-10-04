$(() => {

    getVendors();

});

const getVendors = () => {
    $.getJSON(`${url}`)
        .done((res) => {
            console.debug(res);
            display(res);
        })
        .fail((err) => {
            console.error(err);
        });
}

const display = (vendors) => {
    let tbody = $("#tbody")
    tbody.empty();
    for(let v of vendors) {
        let tr = $("<tr></tr>")
        $(`<td>${v.id}</td>`).appendTo(tr);
        $(`<td>${v.code}</td>`).appendTo(tr);
        $(`<td>${v.name}</td>`).appendTo(tr);
        $(`<td>${v.address}</td>`).appendTo(tr);
        $(`<td>${v.city}</td>`).appendTo(tr);
        $(`<td>${v.state}</td>`).appendTo(tr);
        $(`<td>${v.zip}</td>`).appendTo(tr);
        $(`<td>${v.phone}</td>`).appendTo(tr);
        $(`<td>${v.email}</td>`).appendTo(tr);
        let td = $("<td></td>");
        $(`<a href="get-vendor.html?id=${v.id}">Detail</a>`).appendTo(td);
        $("<span> | </span>").appendTo(td);
        $(`<a href="put-vendor.html?id=${v.id}">Edit</a>`).appendTo(td);
        td.appendTo(tr);
        tr.appendTo(tbody);
    }
}