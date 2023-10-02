
const getUsers = () => {
    let http = new XMLHttpRequest();
    http.responseType = "json";
    http.open("GET", "http://localhost:5555/api/users", true);
    http.onload = function () {
        console.log(http.response);
        display(http.response);
    }
    http.send();
}

const loaded = () => {
    getUsers();
}

const display = (users) => {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = ""; // clears tbody
    for (let u of users) {
        let tr = "<tr>";
        tr += `<td>${u.id}</td>`;
        tr += `<td>${u.firstname} ${u.lastname}</td>`;
        tr += `<td>${u.username}</td>`;
        tr += `<td>${u.phone}</td>`;
        tr += `<td>${u.isReviewer ? 'Yes' : 'No'}</td>`;
        tr += `<td>${u.isAdmin ? 'Yes' : 'No'}</td>`;
        tr += "<td>"
        tr += `<a href='get-user.html?id=${u.id}'>Detail</a> |` 
        tr += `<a href='put-user.html?id=${u.id}'>Edit</a>`
        tr += "</td>"
        tr += "</tr>";
        tbody.innerHTML += tr;
    }
}