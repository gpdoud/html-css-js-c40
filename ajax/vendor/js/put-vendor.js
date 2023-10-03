$(() => {
    let id = +document.URL.split("=")[1];

    getVendor(id);

    $("#save").on("click", () => {
        let vendor = pullFromUI();
        putVendor(vendor);
    });

});

const url = "http://localhost:5000/api/vendors";

const getVendor = (id) => {
    $.getJSON(`${url}/${id}`)
        .done((res) => {
            console.debug(res);
            id = res.id;
            display(res);
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

const pullFromUI = () => {
    let vendor = {};
    vendor.id = $("#xid").val();
    vendor.code = $("#xcode").val();
    vendor.name = $("#xname").val();
    vendor.address = $("#xaddress").val();
    vendor.city = $("#xcity").val();
    vendor.state = $("#xstate").val();
    vendor.zip = $("#xzip").val();
    vendor.phone = $("#xphone").val();
    vendor.email = $("#xemail").val();
    return vendor;
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
            window.location = "get-vendors.html";
        })
        .fail((err) => {
            console.error(err);
        });
}