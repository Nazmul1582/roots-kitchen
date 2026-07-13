import { connect } from "@/lib/dbConnect";

const feedbackCollection = connect("feedbacks");

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
  console.log(message);

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

  return Response.json({
    status: 201,
    success: true,
    data: newFeedback,
  });
}
