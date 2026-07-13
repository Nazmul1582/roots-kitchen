import { recipesDB } from "../route";

export function GET(req) {
  return Response.json({
    status: 200,
    success: true,
    message: "Data served successfully",
    data: recipesDB,
  });
}

export async function POST(req) {
  const { title, price, category } = await req.json();
  if (!title || !price) {
    return Response.json({
      status: 400,
      success: false,
      message: "Title and Price are required",
    });
  }

  return Response.json({
    status: 201,
    success: true,
    message: "Recipe created successfully",
    data: { title, price, category },
  });
}
