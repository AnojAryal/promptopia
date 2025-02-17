import Prompt from "@models/prompt";
import { ConnectToDB } from "@utils/database";

export const POST = async (request) => {
  const { userId, prompt, tag } = await request.json();

  try {
    //lambda func --> gets called do its job and die
    await ConnectToDB();
    const newPrompt = new Prompt({ creator: userId, prompt, tag });

    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
