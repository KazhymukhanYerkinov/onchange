import Axios from 'axios';

const BASE_URL = 'https://dev.api.oncharge.tegin.kz/';

const createAxios = () => {
  const axios = Axios.create({
    baseURL: BASE_URL,
    responseType: 'json',
    timeout: 60000
  });

  return axios;
};

export const axios = createAxios();
