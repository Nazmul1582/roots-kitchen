export default async function getRecipes() {
  const recipes = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
  );
  return recipes.json();
}
