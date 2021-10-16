import Axios from "axios";
<<<<<<< HEAD
// export let SERVER_URL = "https://stockadvisor-api.herokuapp.com";
export let SERVER_URL = "http://192.168.0.181:5000";
// export let SERVER_URL = "https://cd68-150-242-63-252.ngrok.io";
=======
export let SERVER_URL = "https://stockadvisor-api.herokuapp.com";
// export let SERVER_URL = "http://192.168.0.181:5000";
// export let SERVER_URL = "https://cd68-150-242-63-252.n grok.io";
>>>>>>> 0f0c48e6ca6a52cf0fb9d8073106290cc98c199f

export let PUBLIC_URL = `${SERVER_URL}/api/v1`;

export async function axiosRequest(method, url, data = null) {
  try {
    const token = localStorage.getItem("stock-advisor");
    let response;
    if (token) {
      response = await Axios({
        method: method,
        url: `${PUBLIC_URL}${url}`,
        headers: {
          "x-api-key": token,
        },
        data: data,
      });
    } else {
      response = await Axios({
        method: method,
        url: `${PUBLIC_URL}${url}`,
        data: data,
      });
    }
    return await response.data;
  } catch (error) {
    return error;
  }
}
