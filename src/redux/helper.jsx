import Axios from "axios";
// export let SERVER_URL = "https://47b7-45-115-176-128.ngrok.io";
export let SERVER_URL = "http://192.168.0.200:3000";

export let PUBLIC_URL = `${SERVER_URL}/api/v1`;

export async function axiosRequest(method, url, data = null) {
  try {
    const token = localStorage.getItem("stock-advisor");
    let response = await Axios({
      method: method,
      url: `${PUBLIC_URL}${url}`,
      // headers: {
      //   accessToken: token,
      // },
      data: data,
    });
    return await response.data;
  } catch (error) {
    return error;
  }
}
