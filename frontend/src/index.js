const BASE_URL = "http://localhost:3000"
const TRIPS_URL = `${BASE_URL}/trips`

document.addEventListener("DOMContentLoaded", () => {
    getTypes()
    getAreas()
})

const getTypes = () => {
    fetch(`${BASE_URL}/types`)
    .then(resp => resp.json())
    .then(types => {
        let typesSelect = document.querySelector('#types')
        let typeSelect = document.querySelector('#type')
        for (const type of types) {
            let option = `<option value=${type.id}>${type.name}</option>`
            typeSelect.insertAdjacentHTML('beforeend', option)
            typesSelect.insertAdjacentHTML('beforeend', option)
        }
    })
}

const getAreas = () => {
    fetch(`${BASE_URL}/areas`)
    .then(resp => resp.json())
    .then(areas => {
        let areasSelect = document.querySelector('#areas')
        let areaSelect = document.querySelector('#area')
        for (const area of areas) {
            let option = `<option value=${area.id}>${area.name}</option>`
            areaSelect.insertAdjacentHTML('beforeend', option)
            areasSelect.insertAdjacentHTML('beforeend', option)
        }
    })
}

const getData = (e) => {
    e.preventDefault()
    // let tripsContainer = document.getElementsByClassName("main")[0]
    // if (tripsContainer.children.length !== 0){
    //     for (const trip of tripsContainer.children){
    //         return trip.remove()
    //     }
    // }
    
    const typeId = document.querySelector("#types").value 
    const areaId = document.querySelector("#areas").value 
    fetch(`${TRIPS_URL}/${areaId}/${typeId}`)
    .then((res) => res.json())
    .then((trips) => loadTrips(trips))
}

const loadTrips = (trips) => {
    trips.forEach(trip => new Trip(trip))
    renderTrips()
}

const renderTrips = () => {
    const main = document.querySelector(".main")
    main.innerHTML = ""
    Trip.all.forEach(trip => trip.template())
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

document.getElementById("main-form").addEventListener("submit", getData)
document.getElementById("trip-form").addEventListener("submit", addTrip)