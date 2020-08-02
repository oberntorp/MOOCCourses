import axios from 'axios';

// Axios instances can be used to use different configurations for different parts of the application
const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

instance.defaults.headers.common["Authorization"] = "Auth Token from instance";

export default instance;