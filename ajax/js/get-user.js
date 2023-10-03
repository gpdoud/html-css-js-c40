$(() => {
    console.log("Ready!");
    let data = document.URL.split("?")[1]
    let id = +data.split("=")[1];
    getUser(id);

    $("#remove").on("click", () => {
        remove();
    });
});


let user = null;
const getUser = (id) => {
    $.getJSON(`http://localhost:5555/api/users/${id}`)
        .done((res) => {
            user = res;
            console.log(res)
            display(res);
        })
        .fail((err) => {
            console.error(err);
        });
}

const display = (user) => {
    document.getElementById("pid").innerText = user.id;
    document.getElementById("pname").innerText = `${user.firstname} ${user.lastname}`;
    document.getElementById("pusername").innerText = user.username;
    document.getElementById("pphone").innerText = user.phone;
    document.getElementById("previewer").innerText = `${user.isReviewer ? 'Yes' : 'No'}`;
    document.getElementById("padmin").innerText = `${user.isAdmin ? 'Yes' : 'No'}`;
}

const remove = () => {
    let http = new XMLHttpRequest();
    http.responseType = "json";
    http.open("DELETE", `http://localhost:5555/api/users/${user.id}`, true);
    http.onload = function () {
        console.log(http.response);
    }
    http.send();
    document.location = "get-users.html";
}