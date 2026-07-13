import { ObjectId } from "mongodb";
import { feedbackCollection } from "../route";

export const GET = async (req, { params }) => {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };

  const feedback = await feedbackCollection.findOne(query);

  return Response.json({
    status: 200,
    success: true,
    data: feedback,
  });
};

export async function PATCH(req, { params }) {
  const { id } = await params;
  const { message } = await req.json();
  if (!message) {
    return Response.json({
      status: 400,
      success: false,
      message: "Message is required",
    });
  }

  const query = { _id: new ObjectId(id) };
  const updatedFeedback = {
    $set: {
      message,
    },
  };
  const result = await feedbackCollection.updateOne(query, updatedFeedback);

  return Response.json({
    status: 200,
    success: true,
    data: result,
  });
}

export const DELETE = async (req, { params }) => {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };

  const result = await feedbackCollection.deleteOne(query);

  return Response.json({
    status: 200,
    success: true,
    message: "Deleted successfully",
    data: result,
  });
};
