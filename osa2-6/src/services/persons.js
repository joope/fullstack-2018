import axios from 'axios';
const url = 'http://localhost:3001/api/persons';

const getAll = () => axios.get(url);

const create = (person) => axios.post(url, person);

const deletePerson = (id) => axios.delete(`${url}/${id}`);

const update = (id, newPerson) => axios.put(`${url}/${id}`, newPerson)

export default { getAll, create, deletePerson, update };