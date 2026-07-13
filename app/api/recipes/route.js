import { connect } from "@/lib/dbConnect";

const recipesCollection = connect("recipes");

export async function GET(req) {
  const result = await recipesCollection.find().toArray();
  return Response.json({
    status: 200,
    success: true,
    message: "Data served successfully",
    data: result,
  });
}

export async function POST(req) {
  const data = await req.json();
  console.log(data);

  if (!data.title || !data.price) {
    return Response.json({
      status: 400,
      success: false,
      message: "Title and price are required",
    });
  }

  const newRecipe = await recipesCollection.insertOne(data);

  return Response.json({
    status: 201,
    success: true,
    message: "Recipe created successfully",
    data: newRecipe,
  });
}
