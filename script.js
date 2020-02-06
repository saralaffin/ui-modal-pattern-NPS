let main = document.querySelector("main")
let divs = document.querySelectorAll(".parks")
// console.dir(main)
// console.dir(divs)
divs.forEach(div => {
    div.addEventListener("click", shade)
});

function shade() {
    console.log("clicked!")
    main.classList.toggle("main-shaded")
    document.querySelector(".active-box").classList.toggle("hidden")
}
// console.dir(document.querySelector("button"))
document.querySelector("button").addEventListener("click", hidden)
function hidden(eve) {
    // console.dir(eve.path[1])
    eve.path[1].classList.toggle("hidden")
}
// curl -X GET "https://developer.nps.gov/api/v1/parks?limit=1" -H "accept: application/json"
let url = "https://developer.nps.gov/api/v1/parks?limit=20&fields=images&api_key=KDAvx939Yj9FsDsKrBSHeZi7BMzZHUqpQdLU5tfV"
fetch(url)
    .then(res => res.json())
    .then(res => {
        console.log(res.data[0].images[0].url)
        document.querySelector(".active-park").innerHTML = res.data[0].fullName
        document.querySelector(".active-img").src = res.data[0].images[0].url
    } )
