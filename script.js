let main = document.querySelector("main")
let divs = document.querySelectorAll(".movies")
console.dir(main)
console.dir(divs)
divs.forEach(div => {
    div.addEventListener("click", shade)
});

function shade() {
    console.log("clicked!")
    main.classList.toggle("main-shaded")
}
console.dir(document.querySelector(".button"))
document.querySelector(".button").addEventListener("click", shade)