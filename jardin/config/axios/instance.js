import axios from "axios";
const urls = {
    production: "https://proyecto-jardin.fly.dev/",
    dev: "http://localhost:8080/"
}

const api = axios.create({

    baseURL: urls.dev

});


api.interceptors.request.use(
    (config) => {
        if (config.method !== 'GET') {
            const token = localStorage.getItem('token');
            config.headers = {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            };
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);
api.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export { api }; 