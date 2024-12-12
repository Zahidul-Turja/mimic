import { LIST_ITEMS_PER_PAGE } from "@/app/_utils/constants";
import axios from "axios";

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
