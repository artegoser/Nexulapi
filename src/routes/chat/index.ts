import { FastifyInstance } from "fastify";
import { FastifyChatRoute } from "./chat.interface";
import router from "./router";
import schema from "../../schemas/chat/schema.json";
import OpenAI from "openai";

export default async function chat(fastify: FastifyInstance) {
  const schemaF = { schema: { body: schema } };

  const openai = new OpenAI();

  const routerF = async (request: any) => {
    return await router(request.body, openai);
  };

  fastify.post<FastifyChatRoute>("/chat", schemaF, routerF);
  fastify.post<FastifyChatRoute>("/v1/chat/completions", routerF);
}
