export const recipesDB = [
  {
    id: 52794,
    title: "Vegan Chocolate Cake",
    price: 695,
    foodImg:
      "https://www.themealdb.com/images/media/meals/qxutws1486978099.jpg",
    category: "Vegan",
    area: "American",
  },
  {
    id: 52802,
    title: "Slow-Simmered Clay Pot Lentils",
    price: 450,
    foodImg:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=500",
    category: "Clay-Pot",
    area: "Bengali",
  },
];

export async function GET() {
  return Response.json({
    projectName: "Next.js",
  });
}
