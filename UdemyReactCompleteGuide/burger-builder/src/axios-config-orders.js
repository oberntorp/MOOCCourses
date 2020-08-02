import axios from 'axios';

const instance = axios.create({baseURL: "https://myburger-c2c0f.firebaseio.com"});

export default instance;