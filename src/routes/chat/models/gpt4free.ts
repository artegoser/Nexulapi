import { ConfigService } from "../../../config/config.service";
import { ChatReply, ChatRequest } from "../chat.interface";
import axios from "axios";
export default async function gpt4free(
  { model, messages, temperature }: ChatRequest,
  config: ConfigService
): Promise<ChatReply> {
  const response = await axios.request({
    method: "POST",
    url: `${config.gpt4free_base_url}/chat/completions`,
    headers: {
      "content-type": "application/json",
    },
    data: {
      model,
      messages,
      temperature,
    },
  });

  const content = response.data.choices[0].message.content;

  if (content.startsWith("<!DOCTYPE")) {
    throw new Error("Error while generating response");
  }

  return {
    model,
    content,
  };
}
