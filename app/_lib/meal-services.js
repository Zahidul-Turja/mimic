import axios from "axios";

export async function getMealCategories() {
  const response = await axios
    .get("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((response) => response.data);

  console.log(response.categories);
  return response.categories;
}

export async function getMealsByCategory(category) {
  const response = await axios
    .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((response) => response.data);

  console.log(response.meals);
  return response.meals;
}

export async function getMealById(id) {
  console.log(id);
  const response = await axios
    .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.data);

  console.log(response.meals[0]);
  return response.meals[0];
}
