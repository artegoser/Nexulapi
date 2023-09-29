import { config } from "dotenv";
import { ChatReply, ChatRequest } from "./chat.interface";
import FreeGpt35Turbo from "./models/FreeGpt35Turbo";
import { ConfigService } from "../../config/config.service";

export default async function router(request: ChatRequest): Promise<ChatReply> {
  const config = new ConfigService();

  switch (request.model) {
    case "gpt-3.5-turbo":
      return await FreeGpt35Turbo(request, config);
    default:
      return await FreeGpt35Turbo(request, config);
  }
}
