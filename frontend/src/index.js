const addAttraction = (e) => {
    e.preventDefault()
    const attractions = document.querySelector("#attractions")
    attractions.innerHTML += `<input type="text" name="attraction[]"><br>`
}

const addPlace = (e) => {
    e.preventDefault()
    const places = document.querySelector("#places")
    places.innerHTML += `<input type="text" name="place[]"><br>`
}

const button1 = document.querySelector("#add-attraction")
const button2 = document.querySelector("#add-place")
button1.addEventListener("click", addAttraction)
button2.addEventListener("click", addPlace)