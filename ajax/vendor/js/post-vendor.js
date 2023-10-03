$(() => {

    $("#save").on("click", () => {
        let vendor = pullFromUI();
        postVendor(vendor);
    });

});

const url = "http://localhost:5000/api/vendors";

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

const postVendor = (vendor) => {
    $.ajax({
        method: "POST",
        url: `${url}`,
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