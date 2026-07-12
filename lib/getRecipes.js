export default async function getRecipes(query) {
  const search = query?.search || "";

  const recipes = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,
  );
  return recipes.json();
}
