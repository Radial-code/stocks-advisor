import Axios from "axios";
export let SERVER_URL =
  "https://a032-2409-4051-2e1c-5fcf-cedc-61f8-7280-93b8.ngrok.io";

export let PUBLIC_URL = `${SERVER_URL}/api/v1`;

export async function axiosRequest(method, url, data = null) {
  try {
    const token = localStorage.getItem("stock-advisor");
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
