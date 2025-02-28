import axios from 'axios';

const client = axios.create({
  baseURL: 'http://192.168.100.132:8989',
});

export default client;
