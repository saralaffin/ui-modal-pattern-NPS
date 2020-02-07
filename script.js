let main = document.querySelector("main")
let allParks = document.querySelector(".all-parks")
let divs = document.querySelectorAll(".parks")

function shade() {
    console.log("clicked!")
    allParks.classList.toggle("main-shaded")
}

// close button functionality. Find all elements in the active class and hide them
document.querySelector(".active-close").addEventListener("click", hidden)
let activeNodes = document.querySelectorAll('*[class^="active"]')
function hidden() {
    shade()
    activeNodes.forEach(node => node.classList.toggle("hidden"))
}


let url = "https://developer.nps.gov/api/v1/parks?limit=12&fields=images&api_key=KDAvx939Yj9FsDsKrBSHeZi7BMzZHUqpQdLU5tfV"

fetch(url)
    .then(res => res.json())
    .then(res => {
        
        for (let i = 0; i < 12; i++) {
            let park = document.createElement("div")
            park.setAttribute('class', 'parks')
            park.setAttribute('data-parkCode', res.data[i].parkCode)
            park.innerHTML = "<h5 class='hidden'>"+res.data[i].fullName+"</h5>"
            park.style.backgroundImage = `url('${res.data[i].images[0].url}')`
            park.addEventListener("click",displayActive)
            park.addEventListener("mouseenter",showTitle)
            park.addEventListener("mouseleave",showTitle)
            document.querySelector(".all-parks").appendChild(park)
        }
    } )

function displayActive(eve) {
    let activeUrl = "https://developer.nps.gov/api/v1/parks?parkCode="+eve.target.dataset.parkcode+"&fields=images&api_key=KDAvx939Yj9FsDsKrBSHeZi7BMzZHUqpQdLU5tfV"
    fetch(activeUrl)
        .then(res => res.json())
        .then(res => {
            hidden()
            document.querySelector(".active-park").innerHTML = res.data[0].fullName
            document.querySelector(".active-img").src = res.data[0].images[0].url
            document.querySelector(".active-description").innerHTML = res.data[0].description
        })        
}

function showTitle(eve) {
    eve.target.querySelector("h5").classList.toggle("hidden")
}