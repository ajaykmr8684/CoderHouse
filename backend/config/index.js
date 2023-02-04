import dotenv from "dotenv"
dotenv.config();

export const {
    PORT,
    HASH_SECRET,
    SMS_SID,
    SMS_AUTH_TOKEN,
    SMS_FROM_NUMBER,
    DB_URL
} = process.env;