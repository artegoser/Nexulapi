import { FastifyInstance } from "fastify";
import { FastifyChatRoute } from "./chat.interface";
import router from "./router";
import schema from "./chat.interface.json";

export default async function chat(fastify: FastifyInstance) {
  const schemaF = { schema: { body: schema } };
  const routerF = async (request: any) => {
    return await router(request.body);
  };

  fastify.post<FastifyChatRoute>("/chat", schemaF, routerF);
  fastify.post<FastifyChatRoute>("/v1/chat/completions", routerF);
}
