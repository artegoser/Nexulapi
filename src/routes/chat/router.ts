import { config } from "dotenv";
import { ChatReply, ChatRequest, GPT4FreeChatModels } from "./chat.interface";
import gpt4free from "./models/gpt4free";
import { ConfigService } from "../../config/config.service";

export default async function router(request: ChatRequest): Promise<ChatReply> {
  const config = new ConfigService();

  if (
    Object.values(GPT4FreeChatModels).includes(
      request.model as GPT4FreeChatModels
    )
  ) {
    request.model = request.model.replace("free-", "");
    return await gpt4free(request, config);
  } else {
    return {
      content: "Model not supported",
    };
  }
}
