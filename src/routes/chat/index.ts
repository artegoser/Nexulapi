import { FastifyInstance } from "fastify";
import { FastifyChatRoute } from "./chat.interface";
import router from "./router";

export default async function chat(fastify: FastifyInstance) {
  fastify.post<FastifyChatRoute>("/chat", async (request) => {
    return await router(request.body);
  });
  fastify.post<FastifyChatRoute>("/v1/chat/completions", async (request) => {
    return await router(request.body);
  });
}
