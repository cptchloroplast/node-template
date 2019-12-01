import dotenv from "dotenv";
import path from "path";

dotenv.config();

export const APP_DIR: string = process.env.APP_DIR || path.dirname(require.main.filename);
export const NODE_ENV: string = process.env.NODE_ENV || "development";
export const PORT: number = Number(process.env.PORT) || 3000;
export const JWT_TIMEOUT: number = Number(process.env.JWT_TIMEOUT) || 3600;
export const JWT_PRIVATE_KEY_PATH: string = process.env.JWT_PRIVATE_KEY_PATH || path.join(APP_DIR, "assets", "private.key");
export const JWT_PUBLIC_KEY_PATH: string = process.env.JWT_PUBLIC_KEY_PATH || path.join(APP_DIR, "assets", "public.key");
