import OpenAI from "openai";
import { ChatReply, ChatRequest } from "../chat.interface";

export default async function openai(
  data: ChatRequest,
  openaiLib: OpenAI
): Promise<ChatReply> {
  const response = await openaiLib.chat.completions.create({
    model: data.model,
    messages: data.messages,
    temperature: data.temperature,
    top_p: data.top_p,
    n: data.n,
    stop: data.stop,
    max_tokens: data.max_tokens,
    presence_penalty: data.presence_penalty,
    frequency_penalty: data.frequency_penalty,
    logit_bias: data.logit_bias,
    user: data.user,
  });

  return {
    model: data.model,
    content: response.choices[0].message.content || "",
  };
}
