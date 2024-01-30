// Import necessary packages
import { neon, neonConfig} from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

// Enable connection cache
neonConfig.fetchConnectionCache = true;

// Check if DATABASE_URL is set
if(!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
}

// Create SQL connection
const sql = neon(process.env.DATABASE_URL);

// Create database instance
export const db = drizzle(sql);

