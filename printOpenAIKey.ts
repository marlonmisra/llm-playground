const dotenv = require("dotenv");
const path = require("path");

const envPath = path.resolve(process.cwd(), ".env.local");
dotenv.config({ path: envPath });

const openAIKey = process.env.OPENAI_KEY;
console.log("OPENAI_KEY:", openAIKey);