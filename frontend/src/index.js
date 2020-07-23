const BASE_URL = "http://localhost:3000"
const TRIPS_URL = `${BASE_URL}/trips`

const typeId = document.querySelector("#types").value 
const areaId = document.querySelector("#areas").value 

fetch(TRIPS_URL/`${areaId}`/`${typeId}`)
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
        console.log(trip.type)
        tripType.innerHTML = `Trip type: ${trip.type.name}`
        const tripArea = document.createElement("p")
        tripArea.innerHTML = `Trip area: ${trip.area.name}`
        const ulAttractions = document.createElement("ul")
        const ulHotels = document.createElement("ul")

        trip.attractions.forEach(attraction => {
            const liAttr = document.createElement("li")
            liAttr.innerHTML = attraction.name
            ulAttractions.appendChild(liAttr)
        })

        trip.hotels.forEach(hotel => {
            const liHotels = document.createElement("li")
            liHotels.innerHTML = hotel.name
            ulHotels.appendChild(liHotels)
        })
        tripContainer.appendChild(tripCity)
        tripContainer.appendChild(tripCounrty)
        tripContainer.appendChild(tripArea)
        tripContainer.appendChild(tripType)
        tripContainer.appendChild(ulAttractions)
        tripContainer.appendChild(ulHotels)
        main.appendChild(tripContainer)
    })
}  

const form = document.getElementById("main-form")
form.addEventListener("submit", displayTrips)