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

  const strIngredient = Object.keys(response.meals[0])
    .filter((key) => key.startsWith("strIngredient") && response.meals[0][key])
    .map((key) => response.meals[0][key]);

  const strMeasure = Object.keys(response.meals[0])
    .filter((key) => key.startsWith("strMeasure") && response.meals[0][key]) // Ensure the key starts with "strMeasure" and has a value
    .map((key) => response.meals[0][key]);

  response.meals[0]["strIngredient"] = strIngredient;
  response.meals[0]["strMeasure"] = strMeasure;

  console.log(response.meals[0]);
  return response.meals[0];
}
