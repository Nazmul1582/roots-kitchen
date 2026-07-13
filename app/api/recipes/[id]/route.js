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
