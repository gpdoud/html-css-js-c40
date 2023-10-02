
const postUser = (user) => {
    let http = new XMLHttpRequest();
    http.responseType = "json";
    http.open("POST", `http://localhost:5555/api/users`, true);
    http.setRequestHeader('Content-type', 'application/json');
    http.onload = function () {
        console.log(http.response);
        display(http.response);
    }
    http.send(JSON.stringify(user));
}

const getDataFromHtml = () => {
    let user = {};
    user.id = 0;
    user.firstname = document.getElementById("pfirstname").value;
    user.lastname = document.getElementById("plastname").value;
    user.username = document.getElementById("pusername").value;
    user.password = "Train@MAX";
    user.phone = document.getElementById("pphone").value;
    user.email = document.getElementById("pemail").value;
    user.isReview = document.getElementById("previewer").checked;
    user.isAdmin = document.getElementById("padmin").checked;
    console.debug(user);
    return user;
}

const save = () => {
    let user = getDataFromHtml();
    postUser(user);
}

const loaded = () => {
}

const display = (user) => {
    document.getElementById("pid").value = user.id;
    document.getElementById("pfirstname").value = `${user.firstname}`;
    document.getElementById("plastname").value = `${user.lastname}`;
    document.getElementById("pusername").value = user.username;
    document.getElementById("pphone").value = user.phone;
    document.getElementById("previewer").checked = user.isReviewer;
    document.getElementById("padmin").checked = user.isAdmin;
}