if('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('js/serviceWorker.js')
             .then(function() { console.log("Service Worker Registered"); });
  }
const container = document.querySelector(".main-container")
const menu = [
    { image: "src/img/house/main.jpg", link: "CASAS", ref: "/pages/houses.html"},
    { image: "src/img/maps/main-map.jpg", link: "MAPAS", ref: "/pages/maps.html" },
    { image: "src/img/characters/personajes.jpg", link: "PERSONAJES", ref: "/pages/characters.html" },
]

const showElements = () => {
    let output = ""
    menu.forEach(
        ({ image, link, ref }) =>
        (output += `
        <div class="main-container-element">
          <div class="main-container-image">
            <img src="${image}" style="height: 80%" />
          </div>
          <div class="main-container-title">
            <h2><a href="${ref}">${link}</a></h2>
          </div>
          </div>
                `)
    )
    container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showElements)