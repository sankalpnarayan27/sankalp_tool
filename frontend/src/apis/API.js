import axios from 'axios';
const LOGIN_URL = '/signin';

const getToken = () => {
    const accessToken = localStorage.getItem('accessToken');
    return accessToken;
}

const instance = axios.create({
    baseURL: 'https://xebia-assessment.herokuapp.com'
});
//baseURL: ''http://localhost:3000''

instance.interceptors.request.use(
    config => {
      if (!config.headers.Authorization) {
        const token = getToken();
        if (token && !config.url.includes(LOGIN_URL)) {
          config.headers.Authorization = token;
        }
      }
      return config;
    },
    error => Promise.reject(error)
  );

export default instance;
