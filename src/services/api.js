import axios from 'axios';

const api = axios.create({
	//mesma usada no insomnia
	baseURL: 'http://localhost:3333'
});

export default api;