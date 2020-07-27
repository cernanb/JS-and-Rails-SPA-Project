const BASE_URL = "http://localhost:3000"
const TRIPS_URL = `${BASE_URL}/trips`

const getTrips = (e) => {
    e.preventDefault()
    const typeId = document.querySelector("#types").value 
    const areaId = document.querySelector("#areas").value 
    fetch(`${TRIPS_URL}/${areaId}/${typeId}`)
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

        const deleteButton = document.createElement("button")
        deleteButton.className = "delete-button btn btn-primary"
        deleteButton.innerHTML = "Delete"
        deleteButton.setAttribute("data-trip-id", trip.id)
        deleteButton.addEventListener("click", deleteTrip)

        tripContainer.appendChild(tripCity)
        tripContainer.appendChild(tripCounrty)
        tripContainer.appendChild(tripArea)
        tripContainer.appendChild(tripType)
        tripContainer.appendChild(ulAttractions)
        tripContainer.appendChild(ulHotels)
        tripContainer.appendChild(deleteButton)
        main.appendChild(tripContainer)
    })
}  

const addTrip = (e) => {
    e.preventDefault()
    const attractionsElements = document.querySelectorAll(".attraction")
    let attractionsValues = []
    attractionsElements.forEach(element => { attractionsValues.push(element.value)})

    const hotelsElements = document.querySelectorAll(".hotel")
    let hotelsValues = []
    hotelsElements.forEach(element => { hotelsValues.push(element.value)})

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
                               hotels: hotelsValues                                      
                            })
    }
    fetch(TRIPS_URL, configObject)
    .then((res) => res.json())
    .then((data) => console.log(data))
}

const deleteTrip = (e) => {
    // e.preventDefault()
    const configObject = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    }
    fetch(`${TRIPS_URL}/${e.target.dataset.tripId}`, configObject)
    e.target.parentElement.remove()
}

document.getElementById("main-form").addEventListener("submit", getTrips)
document.getElementById("trip-form").addEventListener("submit", addTrip)