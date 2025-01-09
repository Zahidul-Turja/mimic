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
    window.localStorage.removeItem("refresh_token");
    window.localStorage.removeItem("cart");
  } catch (error) {
    console.error("Logout failed:", error.response?.data || error.message);
    return false;
  }

  return true;
}

export function isLoggedIn() {
  const accessToken = window.localStorage.getItem("access_token");
  const refreshToken = window.localStorage.getItem("refresh_token");
  return !!accessToken && !!refreshToken;
}

export async function getAllUsers() {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

export async function getCurrentUser() {
  try {
    const access_token = window.localStorage.getItem("access_token");
    const response = await axios.get(`${BASE_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching current user:", error);
  }
}

export async function getUserById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

export async function getPosts(limit = 10, skip = 0) {
  try {
    const response = await axios.get(
      `${BASE_URL}/posts?limit=${limit}&skip=${skip}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

export async function getPostById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching post:", error);
  }
}

export async function getCommentsByPostId(postId) {
  try {
    const response = await axios.get(`${BASE_URL}/posts/${postId}/comments`);
    return response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
  }
}
