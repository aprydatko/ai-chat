import OpenAI from "openai";

const runtimeConfig = useRuntimeConfig()

export const client = new OpenAI({
	apiKey: runtimeConfig.openAIKey
})

export const assistant = runtimeConfig.assistantKey;