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
    document.querySelector(".active-box").classList.toggle("hidden")
}
console.dir(document.querySelector("button"))
document.querySelector("button").addEventListener("click", hidden)
function hidden(eve) {
    console.dir(eve.path[1])
    eve.path[1].classList.toggle("hidden")
}