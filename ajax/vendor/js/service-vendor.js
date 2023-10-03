const url = "http://localhost:5555/api/vendors";

const getVendors = () => {
    $.getJSON(`${url}`)
        .done((res) => {
            console.debug(res);
            return res;
        })
        .fail((err) => {
            console.error(err);
        });
}
const getVendor = (id) => {
    $.getJSON(`${url}/${id}`)
        .done((res) => {
            console.debug(res);
            return res;
        })
        .fail((err) => {
            console.error(err);
        });
}
const postVendor = (vendor) => {
    $.ajax({
        method: "POST",
        url: `${url}`,
        data: JSON.stringify(vendor),
        contentType: "application/json"
    })
        .done((res) => {
            console.debug(res);
            return res;
        })
        .fail((err) => {
            console.error(err);
        });
}
const putVendor = (vendor) => {
    $.ajax({
        method: "PUT",
        url: `${url}/${vendor.id}`,
        data: JSON.stringify(vendor),
        contentType: "application/json"
    })
        .done((res) => {
            console.debug(res);
        })
        .fail((err) => {
            console.error(err);
        });
}
const deleteVendor = (id) => {
    $.ajax({
        method: "DELETE",
        url: `${url}/${id}`,
        contentType: "application/json"
    })
        .done((res) => {
            console.debug(res);
        })
        .fail((err) => {
            console.error(err);
        });
}