export interface ChatRequest {
  model: AllModels;
  messages: Message[];

  stream?: boolean;

  functions?: Function[];
  function_call?: "none" | "auto" | { [key: string]: string };

  temperature?: number;
  top_p?: number;
  n?: number;
  stop?: string[] | string;
  max_tokens?: number;
  presence_penalty?: number;
  frequency_penalty?: number;

  logit_bias?: { [key: string]: number };

  user?: string;
}

export interface ChatReply {
  model: AllModels;
  content: string;

  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export interface FastifyChatRoute {
  Body: ChatRequest;
  Reply: ChatReply;
}

export interface Message {
  role: "user" | "system" | "assistant";
  content: string;
}

export interface Function {
  name: string;
  description: string;
  parameters: {
    [key: string]: string;
  };
}

export type AllModels =
  | OpenAIChatModels
  | GPT4FreeChatModels
  | HuggingFaceChatModels;

export enum OpenAIChatModels {
  //gpt-4
  Gpt4 = "gpt-4",
  Gpt40613 = "gpt-4-0613",
  Gpt432k = "gpt-4-32k",
  Gpt432k0613 = "gpt-4-32k-0613",
  Gpt40314 = "gpt-4-0314",
  Gpt432k0314 = "gpt-4-32k-0314",
  //gpt-3.5
  Gpt35Turbo = "gpt-3.5-turbo",
  Gpt35Turbo16k = "gpt-3.5-turbo-16k",
  Gpt35TurboInstruct = "gpt-3.5-turbo-instruct",
  Gpt35Turbo0613 = "gpt-3.5-turbo-0613",
  Gpt35Turbo16k0613 = "gpt-3.5-turbo-16k-0613",
  Gpt35Turbo0301 = "gpt-3.5-turbo-0301",
  TextDavinci003 = "text-davinci-003",
  TextDavinci002 = "text-davinci-002",
  CodeDavinci002 = "code-davinci-002",
  // gpt base
  Babbage002 = "babbage-002",
  Davinci002 = "davinci-002",
}

export enum GPT4FreeChatModels {
  //main
  FreeGpt4 = "free-gpt-4",
  FreeGpt35Turbo = "free-gpt-3.5-turbo",

  //other
  FreePalm = "free-palm",
  FreeH2oGptGmOasst1En2048Falcon7bV3 = "free-h2ogpt-gm-oasst1-en-2048-falcon-7b-v3",
  FreeH2oGptGmOasst1En2048Falcon40bV1 = "free-h2ogpt-gm-oasst1-en-2048-falcon-40b-v1",
  FreeH2oGptGmOasst1En2048OpenLlama13b = "free-h2ogpt-gm-oasst1-en-2048-open-llama-13b",
  FreeClaudeInstantV1 = "free-claude-instant-v1",
  FreeClaudeV1 = "free-claude-v1",
  FreeClaudeV2 = "free-claude-v2",
  FreeCommandLightNightly = "free-command-light-nightly",
  FreeCommandNightly = "free-command-nightly",
  FreeGptNeox20b = "free-gpt-neox-20b",
  FreeOasstSft1Pythia12b = "free-oasst-sft-1-pythia-12b",
  FreeOasstSft4Pythia12bEpoch3_5 = "free-oasst-sft-4-pythia-12b-epoch-3.5",
  FreeSantaCoder = "free-santacoder",
  FreeBloom = "free-bloom",
  FreeFlanT5Xxl = "free-flan-t5-xxl",
  FreeCodeDavinci002 = "free-code-davinci-002",
  FreeGpt3_5Turbo16k = "free-gpt-3.5-turbo-16k",
  FreeGpt3_5Turbo16k0613 = "free-gpt-3.5-turbo-16k-0613",
  FreeGpt40613 = "free-gpt-4-0613",
  FreeTextAda001 = "free-text-ada-001",
  FreeTextBabbage001 = "free-text-babbage-001",
  FreeTextCurie001 = "free-text-curie-001",
  FreeTextDavinci002 = "free-text-davinci-002",
  FreeTextDavinci003 = "free-text-davinci-003",
  FreeLlama13bV2Chat = "free-llama13b-v2-chat",
  FreeLlama7bV2Chat = "free-llama7b-v2-chat",
}

export enum HuggingFaceChatModels {
  GPT2 = "gpt2",
  GoogleFLant5Xxl = "google-flan-t5-xxl",
}

export const all_chat_models: AllModels[] = Object.values(
  Object.assign({}, OpenAIChatModels, GPT4FreeChatModels, HuggingFaceChatModels)
);
