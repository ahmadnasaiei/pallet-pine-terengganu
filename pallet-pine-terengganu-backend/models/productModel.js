import { sql } from "../config/db.js";

export async function initProductTable() {
  try {
    await sql`
        CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        code VARCHAR(255) NOT NULL,
        customer VARCHAR(255) NOT NULL,
        item VARCHAR(255) NOT NULL,
        category VARCHAR(255) NOT NULL,
        material VARCHAR(255) NOT NULL,
        size VARCHAR(255) NOT NULL,
        finishing VARCHAR(255) NOT NULL,
        ability VARCHAR(255) NOT NULL,
        accessories VARCHAR(255) NOT NULL,
        image VARCHAR(455) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;
    console.log("Database initialized successfully");
  } catch (error) {
    console.log("Error initDB", error);
  }
}
