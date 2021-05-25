document.addEventListener("mousemove", function (e) {
    const palla = document.getElementById("palla");

    palla.style.left = (e.clientX - 35) + "px";
    palla.style.top = (e.clientY - 35) + "px";
})