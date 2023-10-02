import { ConfigService } from "./config/config.service";
import Fastify from "fastify";

import chat from "./routes/chat";

class App {
  config: ConfigService;
  constructor() {
    this.config = new ConfigService();
  }
  start() {
    const fastify = Fastify({
      logger: true,
      trustProxy: this.config.reverse_proxy,
    });

    fastify.register(require("@fastify/cors"));

    fastify.register(chat);

    fastify.listen(
      { host: this.config.host, port: this.config.port },
      (err) => {
        err && console.log(err);
      }
    );
  }
}

const app = new App();
app.start();
