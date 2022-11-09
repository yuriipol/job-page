import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data',
  params: {
    access_token: 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu',
  },
});

export const getJob = async () => {
  const { data } = await instance.get('/', {
    params: {},
  });

  return data;
};
