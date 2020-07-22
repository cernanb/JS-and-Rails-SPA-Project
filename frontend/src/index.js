const BASE_URL = "http://localhost:3000"
const TRIPS_URL = `${BASE_URL}/trips`

fetch(TRIPS_URL)
  .then((res) => res.json())
  .then((trips) => displayTrips(trips))

const displayTrips = (trips) => {
    
    trips.forEach(trip => {
        const main = document.querySelector("main")
        const tripContainer = document.createElement("div")
        tripContainer.className = "trip-container"
        const tripCity = document.createElement("p")
        tripCity.innerHTML = trip.city 
        const tripCounrty = document.createElement("p")
        tripCounrty.innerHTML = trip.country
        const tripType = document.createElement("p")
        tripType.innerHTML = `Trip type: ${trip.type}`
        const tripArea = document.createElement("p")
        tripArea.innerHTML = `Trip area: ${trip.area}`
        const ul = document.createElement("ul")

        trip.attractions.forEach(attraction => {
            const li = document.createElement("li")
            li.innerHTML = `${attraction.name}`
            console.log(li) 
            ul.appendChild(li)
        })
        tripContainer.appendChild(tripCity)
        tripContainer.appendChild(tripCounrty)
        tripContainer.appendChild(ul)
        main.appendChild(tripContainer)
    })
}  

const form = document.getElementById("main-form")
form.addEventListener("submit", displayTrips)