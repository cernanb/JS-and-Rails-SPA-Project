class Type {
    static all = []

    constructor(data) {
        this.id = data.id 
        this.name = data.name
        this.save()
    }

    save() {
        Type.all.push(this)
    }

    template() {
        let typesSelect = document.querySelector('#types')
        let typeSelect = document.querySelector('#type')
        let option = `<option value=${this.id}>${this.name}</option>`
        typeSelect.insertAdjacentHTML('beforeend', option)
        typesSelect.insertAdjacentHTML('beforeend', option)
    }
}