import Axios from 'axios';
// export let SERVER_URL = 'http://192.168.0.197:3000';
export const SERVER_URL = 'https://touchmetech.herokuapp.com';

export const PUBLIC_URL = `${SERVER_URL}/api/v1`;

export async function axiosRequest(method, url, data = null) {
  try {
    const token = localStorage.getItem('Touch-me-tech-token');
    const response = await Axios({
      method,
      url: `${PUBLIC_URL}${url}`,
      headers: {
        accessToken: token,
      },
      data,
    });
    return await response.data;
  } catch (error) {
    return error;
  }
}
