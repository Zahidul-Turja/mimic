import axios from "axios";

const BASE_URL = "https://dummyjson.com/quotes";

export async function getQuotesList(page) {
  try {
    const url = `${BASE_URL}?limit=10&skip=${(page - 1) * 10}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching quotes:", error);
  }
}
