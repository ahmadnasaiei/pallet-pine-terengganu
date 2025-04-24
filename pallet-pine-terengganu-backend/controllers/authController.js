import { sql } from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.ACCESS_TOKEN_SECRET;

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await sql`
      SELECT * FROM users WHERE username = ${username}
    `;

    if (user.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user[0].password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid password" });
    }

    res.status(200).json({ success: true, data: user[0] });

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (error) {
    console.log("Error in login function", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
