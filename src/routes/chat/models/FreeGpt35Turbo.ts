import { ConfigService } from "../../../config/config.service";
import { ChatRequest } from "../chat.interface";
import axios from "axios";
export default async function FreeGpt35Turbo(
  { model, messages, temperature }: ChatRequest,
  config: ConfigService
) {
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

  return response.data.choices[0].message.content;
}
