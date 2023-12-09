

let con = document.querySelector(".mainbox");
let cfo = document.querySelector('.cfo');

con.addEventListener("mousemove", (event) => {
    cfo.style.left = event.clientX + 'px';
    cfo.style.top = event.clientY + 'px';
});
