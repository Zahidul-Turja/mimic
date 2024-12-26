import axios from "axios";

const API_KEY = process.env.FAVQ_API_KEY;

const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const BASE_URL = "https://favqs.com/api/quotes";
const HEADERS = {
  "Content-Type": "application/json",
  Authorization: `Token token=${API_KEY}`,
};
const URL = PROXY_URL + BASE_URL;

export async function getQuotesList() {
  try {
    const response = await axios.get(URL, {
      headers: HEADERS,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching quotes:", error);
  }
}
