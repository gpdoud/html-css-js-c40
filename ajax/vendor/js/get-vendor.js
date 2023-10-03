$(() => {
    let showButton = false;

    $("#verify").hide();

    $("#delete").on("click", () => {
        showButton = !showButton;
        if(showButton) {
            $("#verify").show();
        } else {
            $("#verify").hide();
        }
    })

    $("#verifyDelete").on("click", () => {
        deleteVendor(id);
        window.location = "get-vendors.html";
    });

    let id = +document.URL.split("=")[1];
    getVendor(id);
});

const url = "http://localhost:5000/api/vendors";
let id;

const getVendor = (id) => {
    $.getJSON(`${url}/${id}`)
        .done((res) => {
            console.debug(res);
            id = res.id;
            display(res);
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

const display = (vendor) => {
    $("#xid").val(vendor.id);
    $("#xcode").val(vendor.code);
    $("#xname").val(vendor.name);
    $("#xaddress").val(vendor.address);
    $("#xcity").val(vendor.city);
    $("#xstate").val(vendor.state);
    $("#xzip").val(vendor.zip);
    $("#xphone").val(vendor.phone);
    $("#xemail").val(vendor.email);
}