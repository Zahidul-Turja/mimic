import { LIST_ITEMS_PER_PAGE } from "@/app/_utils/constants";
import axios from "axios";

export async function getHarryPotterCharacters() {
  const response = await axios
    .get("https://hp-api.onrender.com/api/characters")
    .then((response) => {
      return response.data;
    });

  return response;
}
