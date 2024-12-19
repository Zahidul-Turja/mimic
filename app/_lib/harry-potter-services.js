import axios from "axios";

import { LIST_ITEMS_PER_PAGE } from "@/app/_utils/constants";

export async function getHarryPotterCharacters() {
  const response = await axios
    .get("https://potterapi.onrender.com/en/characters")
    .then((response) => response.data);

  return response;
}

export async function getHarryPotterSpells() {
  const response = await axios
    .get("https://potterapi.onrender.com/en/spells")
    .then((response) => response.data);

  return response;
}

export async function getHarryPotterHouses() {
  const response = await axios
    .get("https://potterapi.onrender.com/en/houses")
    .then((response) => response.data);

  return response;
}

export async function getHarryPotterMovies() {
  const baseUrl = "https://api.potterdb.com/v1";

  const response = await axios
    .get(`${baseUrl}/movies`)
    .then((response) => response.data);

  return response.data;
}

export async function getMovieBySlug(slug) {
  const baseUrl = "https://api.potterdb.com/v1";

  const response = await axios
    .get(`${baseUrl}/movies/${slug}`)
    .then((response) => response.data);
  console.log(response.data);
  return response.data;
}

export async function getHarryPotterBooks() {
  const baseUrl = "https://api.potterdb.com/v1";

  const response = await axios
    .get(`${baseUrl}/books`)
    .then((response) => response.data);

  return response.data;
}

export async function getBookBySlug(slug) {
  const baseUrl = "https://api.potterdb.com/v1";

  const response = await axios
    .get(`${baseUrl}/books/${slug}`)
    .then((response) => response.data);
  console.log(response.data);
  return response.data;
}
