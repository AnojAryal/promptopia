import Prompt from "@models/prompt";
import { ConnectToDB } from "@utils/database";

//get by id
export const GET = async (request, { params }) => {
  try {
    await ConnectToDB();

    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) {
      return new Response("Prompt not found", {
        status: 404,
      });
    }

    return new Response(JSON.stringify(prompt), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch prompts", {
      status: 500,
    });
  }
};
