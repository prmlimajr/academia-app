import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://192.168.43.61:3333',
});

export default Api;
