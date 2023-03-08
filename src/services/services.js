/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const baseUrl = 'http://localhost:3001/recipe-book';

const serviceGetAll = () => {
	const request = axios.get(baseUrl);

	return request.then((response) => response.data);
};

const serviceCreate = (newObject) => {
	const request = axios.post(baseUrl, newObject);
	return request.then((response) => response.data);
};

const serviceUpdate = (id, newObject) => {
	const request = axios.put(`${baseUrl}/${id}`, newObject);
	return request.then((response) => response.data);
};

export default { serviceGetAll, serviceCreate, serviceUpdate };
