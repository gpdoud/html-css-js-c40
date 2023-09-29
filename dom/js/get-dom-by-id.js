console.log("Ready...");

const button_click = (nbr) => {
    let txt = document.getElementById("bc40").value;
    console.warn(txt, nbr);
}
const loaded = () => {
    let inpCtrl = document.getElementById("bc40");
    let val = inpCtrl.value;
    console.log("input contains:", val);
    inpCtrl.value = "Hello, Javascript world!";
}