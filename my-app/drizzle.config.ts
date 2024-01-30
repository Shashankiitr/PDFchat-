import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
// Load environment variables from .env file
dotenv.config({ path: ".env" });

// Configuration object for drizzle-kit
const drizzleConfig: Config = {
    driver: "pg",
    schema: "./src/lib/db/schema.ts",
    dbCredentials: {
        connectionString: process.env.DATABASE_URL ?? "",
    },
};

export default drizzleConfig;

//to push this schema to the database, run: npx drizzle-kit push:pg