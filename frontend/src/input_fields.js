const addAttraction = (e) => {
    e.preventDefault()
    const attractions = document.querySelector("#attractions")
    attractions.innerHTML += `<input type="text" name="attraction" id="attraction" class="form-control attraction"><br>`
}

const addPlace = (e) => {
    e.preventDefault()
    const places = document.querySelector("#hotels")
    places.innerHTML += `<input type="text" name="hotel" id="hotel" class="form-control hotel"><br>`
}

const button1 = document.querySelector("#add-attraction")
const button2 = document.querySelector("#add-hotel")
button1.addEventListener("click", addAttraction)
button2.addEventListener("click", addPlace)