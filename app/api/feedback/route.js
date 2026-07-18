import { connect } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export const feedbackCollection = connect("feedbacks");

export async function GET() {
  const feedbacks = await feedbackCollection.find().toArray();

  return Response.json({
    status: 200,
    success: true,
    data: feedbacks,
  });
}

export async function POST(req) {
  const { message } = await req.json();

  if (!message) {
    return Response.json({
      status: 400,
      success: false,
      message: "Message is required",
    });
  }
  const feedback = {
    message,
    timestamp: new Date().toISOString(),
  };
  const newFeedback = await feedbackCollection.insertOne(feedback);

  revalidatePath("/feedback");

  return Response.json({
    status: 201,
    success: true,
    data: newFeedback,
  });
}
