
const getUser = (id) => {
    let http = new XMLHttpRequest();
    http.responseType = "json";
    http.open("GET", `http://localhost:5555/api/users/${id}`, true);
    http.onload = function () {
        console.log(http.response);
        display(http.response);
    }
    http.send();
}

const loaded = () => {
    let data = document.URL.split("?")[1]
    let id = +data.split("=")[1];
    getUser(id);
}

const display = (user) => {
    document.getElementById("pid").innerText = user.id;
    document.getElementById("pname").innerText = `${user.firstname} ${user.lastname}`;
    document.getElementById("pusername").innerText = user.username;
    document.getElementById("pphone").innerText = user.phone;
    document.getElementById("previewer").innerText = `${user.isReviewer ? 'Yes' : 'No'}`;
    document.getElementById("padmin").innerText = `${user.isAdmin ? 'Yes' : 'No'}`;
}