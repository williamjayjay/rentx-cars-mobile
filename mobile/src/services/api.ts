import axios from 'axios';

const api = axios.create({
  baseURL: 'http://IP_ADDRESS:PORT_NUMBER',
})

export { api }