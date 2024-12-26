import axios from "axios";

const BASE_URL = "'https://dummyjson.com";

export async function login(username, password) {
  const response = await axios
    .post(`${BASE_URL}/auth/login`, {
      username,
      password,
    })
    .then((response) => response.data);
  console.log(response);
  return response;
}
