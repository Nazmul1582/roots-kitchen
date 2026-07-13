import { recipesDB } from "../route";

export function GET(req) {
  return Response.json({
    status: 200,
    success: true,
    data: recipesDB,
  });
}
