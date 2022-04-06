const gameofthrones = "game-of-thrones"
const assets = [
  "/",
  "/index.html",
  "/css/styles.css",
  "/js/app.js",
  "src/img/house/main.jpg",
  "src/img/characters/personajes.jpg",
  "src/img/maps/main-map.jpeg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(gameofthrones).then(cache => {
      cache.addAll(assets)
      console.log("Assets agregados")
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})