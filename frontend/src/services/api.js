class API {
    static baseUrl = "http://localhost:3000"

    static get(url) {
        return fetch(baseUrl + url)
    }
}