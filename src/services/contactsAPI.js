import axios from 'axios';

const getExistContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

const addContact = async ({ name, phone }) => {
  const { data } = await axios.post('/contacts', { name, phone });
  return data;
};

const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};

const getContactById = async id => {
  const response = await axios.patch(`/contacts/${id}`);
  return response.data;
};

export { getExistContacts, addContact, deleteContact, getContactById };
