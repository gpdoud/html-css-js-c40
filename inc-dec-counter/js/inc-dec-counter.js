console.log("Ready...");

let nbr = 0;

const loaded = () => {
    display(nbr);
}

const change = (amt) => {
    nbr += amt;
    display(nbr);
}

const display = (nbr) => {
    let ctrl = document.getElementById("nbr");
    ctrl.value = nbr;
    ctrl.style.color = nbr % 2 == 0 ? "red" : "black";
    ctrl.style.fontStyle = nbr % 3 == 0 ? "italic" : "normal";
    ctrl.style.fontWeight = nbr % 7 == 0 ? "bold" : "normal";
}