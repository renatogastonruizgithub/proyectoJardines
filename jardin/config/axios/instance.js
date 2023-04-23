import axios from "axios";
const urls = {
    production: "https://proyecto-jardin.fly.dev/",
    dev: "http://localhost:8080/"
}

export default axios.create({

    baseURL: urls.production
    /*  headers: { 'X-Custom-Header': 'foobar' } */
});

