const {GoogleGenAI}= require("@google/genai")
const {z}= require("zod")
const {zodToJsonSchema }= require("zod-to-json-schema")


const ai= new GoogleGenAI({
    apiKey:process.env.GOOGLR_API_KEY
})

