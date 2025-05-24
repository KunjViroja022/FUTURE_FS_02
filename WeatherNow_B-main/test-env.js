import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve("./.env") });

console.log("Test: OPENAI_API_KEY =", process.env.OPENWEATHER_API_KEY ? "FOUND" : "NOT FOUND");
