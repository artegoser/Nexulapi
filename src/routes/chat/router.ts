import {
  AllModels,
  ChatReply,
  ChatRequest,
  GPT4FreeChatModels,
  HuggingFaceChatModels,
  OpenAIChatModels,
} from "./chat.interface";
import gpt4free from "./models/gpt4free";
import { ConfigService } from "../../config/config.service";
import OpenAI from "openai";
import openai from "./models/openai";

export default async function router(
  request: ChatRequest,
  openaiLib: OpenAI
): Promise<ChatReply> {
  const config = new ConfigService();

  const gpt4freeModels = Object.values(GPT4FreeChatModels);
  const openaiModels = Object.values(OpenAIChatModels);
  const huggingfaceModels = Object.values(HuggingFaceChatModels);

  const isGpt4Free = gpt4freeModels.includes(
    request.model as GPT4FreeChatModels
  );
  const isOpenAI = openaiModels.includes(request.model as OpenAIChatModels);
  const isHuggingFace = huggingfaceModels.includes(
    request.model as HuggingFaceChatModels
  );

  if (isGpt4Free) {
    request.model = request.model.replace("free-", "") as AllModels;
    return await gpt4free(request, config);
  } else if (isOpenAI) {
    return await openai(request, openaiLib);
  } else {
    return {
      content: "Model not supported",
    };
  }
}
