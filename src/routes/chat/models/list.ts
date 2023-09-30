import { ConfigService } from "../../../config/config.service";
import {
  GPT4FreeChatModels,
  HuggingFaceChatModels,
  OpenAIChatModels,
} from "../chat.interface";

export default async function list(config: ConfigService): Promise<string[]> {
  let all_models = [];

  if (config.openai_api_key) {
    all_models.push(...Object.values(OpenAIChatModels));
  }

  if (config.huggingface_hub_token) {
    all_models.push(...Object.values(HuggingFaceChatModels));
  }

  if (config.gpt4free_base_url) {
    all_models.push(...Object.values(GPT4FreeChatModels));
  }

  return all_models;
}
