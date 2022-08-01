window.onload = function () {
    let btn = document.getElementById("btn");
    let div = document.getElementById("div");
    btn.onclick = function () {
        div.innerText = ++div.innerText;
    }
}