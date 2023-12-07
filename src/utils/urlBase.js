import axios from "axios"

const urlBase = axios.create({
    baseURL: "https://pokedex-server-frhh.onrender.com"
})

export default urlBase