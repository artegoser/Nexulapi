import { FastifyInstance } from "fastify";

export default async function chat(fastify: FastifyInstance) {
  fastify.post("/chat", async (request) => {});
  fastify.post("/v1/chat/completions", async (request) => {});
}
