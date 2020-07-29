class Trip {
    static all = []

    constructor(data) {
        this.id = data.id
        this.city = data.city
        this.country = data.country 
        this.attractions = data.attractions
        this.hotels = data.hotels 
        this.area = data.area
        this.type = data.type 
        this.save()
    }

    save() {
        Trip.all.push(this)
    }
    
    template() {
        const main = document.querySelector(".main")
        // if (main.firstElementChild){
        //     main.firstElementChild.remove()
        // }
        const tripContainer = document.createElement("div")
        tripContainer.className = "trip-container"
        const tripCity = document.createElement("p")
        tripCity.innerHTML = `City: ${this.city}` 
        const tripCounrty = document.createElement("p")
        tripCounrty.innerHTML = `Country: ${this.country}`
        const tripType = document.createElement("p")
        tripType.innerHTML = `Trip type: ${this.type.name}`
        const tripArea = document.createElement("p")
        tripArea.innerHTML = `Trip area: ${this.area.name}`
        const ulAttractions = document.createElement("ul")
        const ulHotels = document.createElement("ul")
        ulAttractions.innerHTML = `<h5>Attractions:</h5>`
        ulHotels.innerHTML = `<h5>Hotels:</h5>`
        this.attractions.forEach(attraction => {
            const liAttr = document.createElement("li")
            liAttr.innerHTML = attraction.name
            ulAttractions.appendChild(liAttr)
        })

        this.hotels.forEach(hotel => {
            const liHotels = document.createElement("li")
            liHotels.innerHTML = hotel.name
            ulHotels.appendChild(liHotels)
        })

        const deleteButton = document.createElement("button")
        deleteButton.className = "delete-button btn btn-warning"
        deleteButton.innerHTML = "Delete"
        deleteButton.setAttribute("data-trip-id", this.id)
        deleteButton.addEventListener("click", deleteTrip)

        tripContainer.appendChild(tripCity)
        tripContainer.appendChild(tripCounrty)
        tripContainer.appendChild(tripArea)
        tripContainer.appendChild(tripType)
        tripContainer.appendChild(ulAttractions)
        tripContainer.appendChild(ulHotels)
        tripContainer.appendChild(deleteButton)
        main.appendChild(tripContainer)
    }
}