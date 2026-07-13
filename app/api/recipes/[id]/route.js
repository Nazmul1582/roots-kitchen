import { recipesDB } from "../../route";

export async function GET(req, { params }) {
  const { id } = await params;
  const recipe = recipesDB.find((r) => r.id === parseInt(id)) || {};

  return Response.json({
    status: 200,
    success: true,
    data: recipe,
  });
}
