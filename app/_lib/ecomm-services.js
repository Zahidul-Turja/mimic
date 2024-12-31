import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export async function login(username, password) {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/login`,
      {
        username: username,
        password: password,
        expiresInMins: 60 * 24 * 30, // 30 days
      },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: false,
      },
    );

    if (response.status !== 200) {
      throw new Error("Login failed");
    }

    window.localStorage.setItem("access_token", response.data.accessToken);
    window.localStorage.setItem("refresh_token", response.data.refreshToken);

    return response.data;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error;
  }
}

export async function logout() {
  try {
    window.localStorage.removeItem("access_token");
    window.localStorage.removeItem("access_token");
  } catch (error) {
    console.error("Logout failed:", error.response?.data || error.message);
    return false;
  }

  return true;
}

export async function getCurrentUser() {
  try {
    const response = await axios.get(`${BASE_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("access_token")}`,
        withCredentials: false,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching current user:", error);
  }
}

export async function getProducts() {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
