import { config } from "dotenv";

export class ConfigService {
  public readonly host: string;
  public readonly port: number;
  public readonly reverse_proxy: boolean;
  public readonly openai_api_key?: string;
  public readonly huggingface_hub_token?: string;
  public readonly gpt4free_base_url?: string;
  constructor() {
    config();

    this.host = process.env.HOST || "0.0.0.0";
    this.port = Number(process.env.PORT) || 8080;
    this.reverse_proxy = this.parseBool(process.env.REVERSE_PROXY, false);

    this.openai_api_key = process.env.OPENAI_API_KEY;
    this.huggingface_hub_token = process.env.HUGGINGFACE_HUB_TOKEN;

    this.gpt4free_base_url = process.env.GPT4FREE_BASE_URL;
  }

  parseBool(value: string | undefined, def: boolean): boolean {
    if (!value) return def;
    return value === "true" || value === "1";
  }
}
