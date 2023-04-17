// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
// dodger.style.bottom = "0px";
// dodger.style.left = "0px";

document.addEventListener("keydown", function(event){
if (event.key == "ArrowLeft") {
moveDodgerLeft();
}
if (event.key == "ArrowRight") {
    moveDodgerRight();
    }
});

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}