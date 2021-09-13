import Axios from "axios";
// export let SERVER_URL = "http://192.168.0.197:3000";
export let SERVER_URL = "https://touchmetech.herokuapp.com";

export let PUBLIC_URL = `${SERVER_URL}/api/v1`;

export async function axiosRequest(method, url, data = null) {
  try {
    const token = localStorage.getItem("Touch-me-tech-token");
    let response = await Axios({
      method: method,
      url: `${PUBLIC_URL}${url}`,
      headers: {
        accessToken: token,
      },
      data: data,
    });
    return await response.data;
  } catch (error) {
    return error;
  }
}
