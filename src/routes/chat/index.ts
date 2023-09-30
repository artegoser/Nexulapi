import { FastifyInstance } from "fastify";
import { FastifyChatRoute } from "./chat.interface";
import router from "./router";
import schema from "../../schemas/chat/schema.json";
import OpenAI from "openai";
import list from "./models/list";
import { ConfigService } from "../../config/config.service";

export default async function chat(fastify: FastifyInstance) {
  const schemaF = { schema: { body: schema } };

  const config = new ConfigService();
  const openaiLib = new OpenAI({ apiKey: config.openai_api_key || "" });

  const routerF = async (request: any) => {
    return await router(request.body, openaiLib, config);
  };

  const listF = async () => {
    return await list(config);
  };

  fastify.post<FastifyChatRoute>("/chat", schemaF, routerF);
  fastify.post<FastifyChatRoute>("/v1/chat/completions", routerF);

  fastify.get("/chat/models/list", listF);
  fastify.get("/v1/chat/models/list", listF);
}
