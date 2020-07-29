class Area {
    static all = []

    constructor(data) {
        this.id = data.id 
        this.name = data.name
        this.save()
    }

    save() {
        Area.all.push(this)
    }

    template() {
        let areasSelect = document.querySelector('#areas')
        let areaSelect = document.querySelector('#area')
        let option = `<option value=${this.id}>${this.name}</option>`
        areaSelect.insertAdjacentHTML('beforeend', option)
        areasSelect.insertAdjacentHTML('beforeend', option)
    }
}