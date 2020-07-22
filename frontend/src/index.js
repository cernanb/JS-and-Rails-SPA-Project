const BASE_URL = "http://localhost:3000"
const TRIPS_URL = `${BASE_URL}/trips`

// fetch(TRIPS_URL)
//   .then((res) => res.json())
//   .then((res) => displayTrips(res))

const displayTrips = (e) => {
    e.preventDefault()
    const configObject = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ type_id: e.target.types.value,
                               area_id: e.target.areas.value                                       
                            })
    }
    fetch(TRIPS_URL, configObject)
        .then((res) => res.json())
        .then((trips) => 
            trips.forEach(trip => {
                const main = document.querySelector("main")
                const tripCity = document.createElement("p")
                tripCity.innerHTML = trip.city 
                const tripCounrty = document.createElement("p")
                tripCounrty.innerHTML = trip.country

                main.appendChild(tripCity)
                main.appendChild(tripCounrty)
            })
    )
}  

const form = document.getElementById("main-form")
form.addEventListener("submit", displayTrips)