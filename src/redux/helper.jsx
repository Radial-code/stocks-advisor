import Axios from "axios";
// export let SERVER_URL = "https://f583-122-173-45-126.ngrok.io";
export let SERVER_URL = "https://stockadvisor-api.herokuapp.com";

//update main
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
