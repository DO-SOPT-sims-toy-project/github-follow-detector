import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    'Content-type': 'application/json',
  },
});
export default client;
