import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const getExistContacts = async credentials => {
  token.set(credentials);
  const { data } = await axios.get('/contacts');
  return data;
};

const addContact = async ({ name, number }) => {
  const { data } = await axios.post('/contacts', { name, number });
  return data;
};

const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};

const getContactById = async id => {
  const { data } = await axios.patch(`/contacts/${id}`);
  return data;
};

export { getExistContacts, addContact, deleteContact, getContactById };
