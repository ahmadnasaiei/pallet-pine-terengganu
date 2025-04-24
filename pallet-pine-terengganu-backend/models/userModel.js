import { sql } from "../config/db.js";

export async function initUserTable() {
  try {
    await sql`
			CREATE TABLE IF NOT EXISTS users (
				id SERIAL PRIMARY KEY,
				username VARCHAR(255) UNIQUE NOT NULL,
				password VARCHAR(255) NOT NULL,
				role VARCHAR(255) NOT NULL DEFAULT 'user'
			)
		`;
    console.log("Database initialized successfully");
  } catch (error) {
    console.log("Error initDB", error);
  }
}
