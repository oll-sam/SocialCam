import axios from 'axios';

const url = 'http://localhost:8000/media';

export const fetchMedia = () => axios.get(url);
export const createMedia = (newMedia) => axios.post(url, newMedia);
export const updateMedia = (id, updatedMedia) => axios.patch(`${url}/${id}`, updatedMedia );
export const deleteMedia = (id) => axios.delete(`${url}/${id}`);
export const likeMedia = (id) => axios.patch(`${url}/${id}/likeMedia`)

//all action towards the backend will be done through redux