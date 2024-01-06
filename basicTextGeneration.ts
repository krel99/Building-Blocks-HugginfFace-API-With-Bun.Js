// bun basicTextGeneration.ts
import { HfInference } from "@huggingface/inference";
import color from "colors";
color.enable();

// * environment variables
// save your OpenAI API key in .env file as HUGGINGFACEHUB_API_KEY=your_api_key
const HUGGINGFACEHUB_API_KEY = process.env.HUGGINGFACEHUB_API_KEY;

if (!HUGGINGFACEHUB_API_KEY) {
  throw new Error("OPENAI environment variable is not set");
}

const chatModel = new HfInference(HUGGINGFACEHUB_API_KEY);

// * Basic Text Generation
const basicInvocation = await chatModel.textGeneration({
  model: "HuggingFaceH4/zephyr-7b-beta",
  inputs: "Give me three tips how to increase my carbon footprint in 1 sentence each.",
});

console.log(`${basicInvocation.generated_text}`.bgCyan.red);
