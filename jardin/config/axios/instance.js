import axios from "axios";

export default axios.create({
    baseURL: 'https://proyecto-jardin.fly.dev/'
    /*  headers: { 'X-Custom-Header': 'foobar' } */
});