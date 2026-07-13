import { connect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

const recipeCollection = connect("recipes");

export async function GET(req, { params }) {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };

  const recipe = await recipeCollection.findOne(query);

  return Response.json({
    status: 200,
    success: true,
    data: recipe,
  });
}

export async function PATCH(req, { params }) {
  const data = await req.json();
  const { id } = await params;
  const query = { _id: new ObjectId(id) };

  if (!data.title || !data.price) {
    return Response.json({
      status: 400,
      success: false,
      message: "Title and price are required",
    });
  }

  const newRecipe = {
    $set: data,
  };

  const updatedRecipe = await recipeCollection.updateOne(query, newRecipe);

  return Response.json({
    status: 200,
    success: true,
    message: "Updated successfully",
    data: updatedRecipe,
  });
}

export async function DELETE(req, { params }) {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };

  const deletedRecipe = await recipeCollection.deleteOne(query);

  return Response.json({
    status: 200,
    success: true,
    message: "Deleted successfully",
    data: deletedRecipe,
  });
}
