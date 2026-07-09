export default async function getRecipe(id) {
  const recipe = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
  );
  return recipe.json();
}
