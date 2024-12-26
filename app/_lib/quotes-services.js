import axios from "axios";

const API_KEY = "648c79d3eb2f04824485fa8e114b3a12";
const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const BASE_URL = "https://favqs.com/api/quotes";
const HEADERS = {
  "Content-Type": "application/json",
  Authorization: `Token token=${API_KEY}`,
};

export async function getQuotesList() {
  try {
    const url = PROXY_URL + BASE_URL;
    const response = await axios.get(BASE_URL, {
      headers: HEADERS,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching quotes:", error);
  }
}
