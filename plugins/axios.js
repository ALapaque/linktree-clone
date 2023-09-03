import axios from "axios"

export default defineNuxtPlugin((NuxtApp) => {
    axios.defaults.baseURL = 'https://api-linktree.amaury-lapaque.io'
    axios.defaults.withCredentials = true;

    return {
        provide: { 
            axios: axios
        },
    }
})