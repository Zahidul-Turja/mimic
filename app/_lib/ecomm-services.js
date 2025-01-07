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

export async function getAllUsers() {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
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

export async function getCurrentUser() {
  try {
    const access_token = window.localStorage.getItem("access_token");
    const response = await axios.get(`${BASE_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      // withCredentials: false,
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

export async function getProductById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
  }
}

export async function getCategories() {
  try {
    const response = await axios.get(`${BASE_URL}/products/categories`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
}

export async function getProductsByCategory(category) {
  try {
    if (category == "all") return getProducts();
    const response = await axios.get(
      `${BASE_URL}/products/category/${category}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products by category:", error);
  }
}

export async function searchProducts(query) {
  try {
    const response = await axios.get(`${BASE_URL}/products/search?q=${query}`);
    return response.data;
  } catch (error) {
    console.error("Error searching products:", error);
  }
}

export async function getCartByUserId(userId) {
  try {
    const response = await axios.get(`${BASE_URL}/carts/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
  }
}

export function addToCartLocal(product) {
  const cart = window.localStorage.getItem("cart");
  if (cart) {
    const parsedCart = JSON.parse(cart);
    parsedCart.push(product);
    window.localStorage.setItem("cart", JSON.stringify(parsedCart));
  } else {
    window.localStorage.setItem("cart", JSON.stringify([product]));
  }
}

export function getCartLocal() {
  const cart = window.localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
}

export function removeFromCartLocal(product) {
  const cart = window.localStorage.getItem("cart");
  if (cart) {
    const parsedCart = JSON.parse(cart);
    const updatedCart = parsedCart.filter((item) => item.id !== product.id);
    window.localStorage.setItem("cart", JSON.stringify(updatedCart));
  }
}

export function clearCartLocal() {
  window.localStorage.removeItem("cart");
}

export async function createCart(userId, products) {
  if (!userId || !Array.isArray(products) || products.length === 0) {
    console.error("Invalid userId or products data");
    return null;
  }

  try {
    const response = await axios.post(`${BASE_URL}/carts/add`, {
      userId,
      products,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating cart:", error);
    throw error;
  }
}
