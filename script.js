let main = document.querySelector("main")
let divs = document.querySelectorAll(".parks")

function shade() {
    console.log("clicked!")
    main.classList.toggle("main-shaded")
    document.querySelector(".active-box").classList.toggle("hidden")
}

// close button functionality. Find all elements in the active class and hide them
document.querySelector(".active-close").addEventListener("click", hidden)
let activeNodes = document.querySelectorAll('*[class^="active"]')
function hidden() {
    activeNodes.forEach(node => node.classList.toggle("hidden"))
}


let url = "https://developer.nps.gov/api/v1/parks?limit=20&fields=images&api_key=KDAvx939Yj9FsDsKrBSHeZi7BMzZHUqpQdLU5tfV"

fetch(url)
    .then(res => res.json())
    .then(res => {
        
        for (let i = 0; i < 20; i++) {
            let park = document.createElement("div")
            park.setAttribute('class', 'parks')
            park.setAttribute('data-parkCode', res.data[i].parkCode)
            park.innerHTML = res.data[i].fullName
            park.style.backgroundImage = `url('${res.data[i].images[0].url}')`
            park.addEventListener("click",displayActive)
            document.querySelector(".all-parks").appendChild(park)
        }
        document.querySelector(".active-park").innerHTML = res.data[0].fullName
        document.querySelector(".active-img").src = res.data[0].images[0].url
        document.querySelector(".active-description").innerHTML = res.data[0].description
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