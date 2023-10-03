const getUser = (id) => {
    $.getJSON(`http://localhost:5555/api/users/${id}`)
        .done((res) => {
            console.log(res);
            display(res);
        });
}

const putUser = (user) => {
    $.ajax({
        method: "PUT",
        url: `http://localhost:5555/api/users/${user.id}`,
        data: JSON.stringify(user),
        contentType: "application/json"
    })
        .done((res) => {
            console.log("Update successful!");
            document.location = "get-users.html";
        })
}

const getDataFromHtml = () => {
    let user = {};
    user.id = +document.getElementById("pid").value;
    user.firstname = document.getElementById("pfirstname").value;
    user.lastname = document.getElementById("plastname").value;
    user.username = document.getElementById("pusername").value;
    user.password = document.getElementById("ppassword").value;
    user.phone = document.getElementById("pphone").value;
    user.email = document.getElementById("pemail").value;
    user.isReviewer = document.getElementById("previewer").checked;
    user.isAdmin = document.getElementById("padmin").checked;
    console.debug(user);
    return user;
}

const save = () => {
    let user = getDataFromHtml();
    putUser(user);
}

const loaded = () => {
    let data = document.URL.split("?")[1]
    let id = +data.split("=")[1];
    getUser(id);
}

const display = (user) => {
    document.getElementById("pid").value = user.id;
    document.getElementById("pfirstname").value = `${user.firstname}`;
    document.getElementById("plastname").value = `${user.lastname}`;
    document.getElementById("pusername").value = user.username;
    document.getElementById("pphone").value = user.phone;
    document.getElementById("pemail").value = user.email;
    document.getElementById("previewer").checked = user.isReviewer;
    document.getElementById("padmin").checked = user.isAdmin;
}