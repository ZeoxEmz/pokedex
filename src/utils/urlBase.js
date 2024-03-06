import axios from "axios"

const urlBase = axios.create({
    baseURL: "https://pokedex-server-m8t1.onrender.com"
})

export default urlBase