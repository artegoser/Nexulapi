export interface ChatRequest {
  model: OpenAIChatModels | GPT4FreeChatModels | HuggingFaceChatModels;
}

export type OpenAIChatModels =
  //gpt-4
  | "gpt-4"
  | "gpt-4-0613"
  | "gpt-4-32k"
  | "gpt-4-32k-0613"
  | "gpt-4-0314"
  | "gpt-4-32k-0314"
  //"gpt-3.5"
  | "gpt-3.5-turbo"
  | "gpt-3.5-turbo-16k"
  | "gpt-3.5-turbo-instruct"
  | "gpt-3.5-turbo-0613"
  | "gpt-3.5-turbo-16k-0613"
  | "gpt-3.5-turbo-0301"
  | "text-davinci-003"
  | "text-davinci-002"
  | "code-davinci-002"
  // gpt base
  | "babbage-002"
  | "davinci-002";

export type GPT4FreeChatModels =
  //main
  | "free-gpt-4"
  | "free-gpt-3.5-turbo"

  //other
  | "free-palm"
  | "free-h2ogpt-gm-oasst1-en-2048-falcon-7b-v3"
  | "free-h2ogpt-gm-oasst1-en-2048-falcon-40b-v1"
  | "free-h2ogpt-gm-oasst1-en-2048-open-llama-13b"
  | "free-claude-instant-v1"
  | "free-claude-v1"
  | "free-claude-v2"
  | "free-command-light-nightly"
  | "free-command-nightly"
  | "free-gpt-neox-20b"
  | "free-oasst-sft-1-pythia-12b"
  | "free-oasst-sft-4-pythia-12b-epoch-3.5"
  | "free-santacoder"
  | "free-bloom"
  | "free-flan-t5-xxl"
  | "free-code-davinci-002"
  | "free-gpt-3.5-turbo-16k"
  | "free-gpt-3.5-turbo-16k-0613"
  | "free-gpt-4-0613"
  | "free-text-ada-001"
  | "free-text-babbage-001"
  | "free-text-curie-001"
  | "free-text-davinci-002"
  | "free-text-davinci-003"
  | "free-llama13b-v2-chat"
  | "free-llama7b-v2-chat";

export type HuggingFaceChatModels = "gpt2" | "google/flan-t5-xxl" | string;
