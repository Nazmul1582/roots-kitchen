export default async function getReviews() {
  const data = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/reviews",
  );
  return data.json();
}
