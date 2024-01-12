const canvas = document.querySelector("#canvas");
const btnReset = document.querySelector("#reset");
window.onload = createCanvas;
function createCanvas() {
    for (let i = 0; i < 256; i++){
        let block = document.createElement("div");
        canvas.appendChild(block);
    }
}
