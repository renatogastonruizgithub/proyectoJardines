import axios from "axios";
const urls = {
    production: "https://proyecto-jardin.fly.dev/",
    dev: "http://localhost:8080/"
}

const axiosAll = axios.create({

    baseURL: urls.dev

});

export { axiosAll }; 