const BASE_URL = "http://localhost:3000"
const TRIPS_URL = `${BASE_URL}/trips`

const getTrips = (e) => {
    e.preventDefault()
    const typeId = document.querySelector("#types").value 
    const areaId = document.querySelector("#areas").value 
    fetch(`${TRIPS_URL}/${areaId}/${typeId}`)
    // fetch(TRIPS_URL)
    .then((res) => res.json())
    .then((trips) => displayTrips(trips))
}

const displayTrips = (trips) => {
    const main = document.querySelector(".main")
    main.innerHTML = ""
    trips.forEach(trip => {
        const tripContainer = document.createElement("div")
        tripContainer.className = "trip-container"
        const tripCity = document.createElement("p")
        tripCity.innerHTML = `City: ${trip.city}` 
        const tripCounrty = document.createElement("p")
        tripCounrty.innerHTML = `Country: ${trip.country}`
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

const addTrip = (e) => {
    e.preventDefault()
    const attractionsElements = document.querySelectorAll(".attraction")
    let attractionsValues = []
    attractionsElements.forEach(element => { attractionsValues.push(element.value)})

    const placesElements = document.querySelectorAll(".place")
    let placesValues = []
    placesElements.forEach(element => { placesValues.push(element.value)})

    const configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ area_id: e.target.area.value,
                               type_id: e.target.type.value,
                               city: e.target.city.value,
                               country: e.target.country.value,
                               attractions: attractionsValues,
                               hotels: placesValues                                      
                            })
    }
    fetch(TRIPS_URL, configObject)
    .then((res) => res.json())
    .then((data) => console.log(data))
}

const form = document.getElementById("main-form").addEventListener("submit", getTrips)
const createFrom = document.getElementById("trip-form").addEventListener("submit", addTrip)