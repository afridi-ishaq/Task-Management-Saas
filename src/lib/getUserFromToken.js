import jwt from "jsonwebtoken";

export function getUserFromToken(token) {
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    return decoded;
  } catch (error) {
    return null;
  }
}