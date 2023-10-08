const enddate = "8 October 2023 12:00 pM"
document.getElementById("end-date").innerText = enddate;
const inputs = document.querySelectorAll("input")
function clock() {
    const end = new Date(enddate);
    const now = new Date();
    const diff = (end - now) / 1000; //giver in milliseconds
 
    if(diff<0)
    return;

    inputs[0].value = Math.floor(diff / 3600 / 24);//days
    inputs[1].value = Math.floor(diff / 3600) % 24;//hours
    inputs[2].value = Math.floor(diff / 60) % 60;//minute
    inputs[3].value = Math.floor(diff) % 60;//second
}
clock();

setInterval(() => {
    clock()
}, 1000)