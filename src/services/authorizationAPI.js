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

const userSignUp = async userData => {
  const { data } = await axios.post('/users/signup', userData);
  token.set(data.token);
  return data;
};

const userLogin = async userData => {
  const { data } = await axios.post('/users/login', userData);
  token.set(data.token);
  return data;
};

const userLogout = async () => {
  const data = await axios.post('/users/logout');
  token.unSet();
  return data;
};

const getCurrentUser = async userToken => {
  token.set(userToken);
  const { data } = await axios.get('/users/current');
  return data;
};

export { userSignUp, userLogin, userLogout, getCurrentUser };
