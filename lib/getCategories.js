export default async function getCategories() {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/categories",
  );
  return res.json();
}
