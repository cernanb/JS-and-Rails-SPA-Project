const addAttraction = (e) => {
    e.preventDefault()
    const attractions = document.querySelector("#attractions")
    let input = `<input type="text" name="attraction" id="attraction" class="form-control attraction"><br>`
    attractions.insertAdjacentHTML('beforeend', input)
}

const addHotel = (e) => {
    e.preventDefault()
    const hotels = document.querySelector("#hotels")
    let input = `<input type="text" name="hotel" id="hotel" class="form-control hotel"><br>`
    hotels.insertAdjacentHTML('beforeend', input)
}

const button1 = document.querySelector("#add-attraction")
const button2 = document.querySelector("#add-hotel")
button1.addEventListener("click", addAttraction)
button2.addEventListener("click", addHotel)