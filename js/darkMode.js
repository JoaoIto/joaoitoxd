const inputDark = document.getElementById("dark");
inputDark.addEventListener("change", function turnOn(event){
    console.log("clickado");
    const container = document.querySelector("main");
    container.classList.toggle("turnOnContainer");
    const $body = document.querySelector("body");
    $body.classList.toggle("turnOnBody");
});