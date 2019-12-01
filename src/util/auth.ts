import fs from "fs";
import { sign, verify, VerifyErrors, VerifyOptions } from "jsonwebtoken";
import { JWT_PRIVATE_KEY_PATH, JWT_PUBLIC_KEY_PATH, JWT_TIMEOUT } from "../config";

const privateKey = fs.readFileSync(JWT_PRIVATE_KEY_PATH, "utf8");
const publicKey = fs.readFileSync(JWT_PUBLIC_KEY_PATH, "utf8");

export function encodeToken(payload: any): string {
    return sign(payload, privateKey, { expiresIn: JWT_TIMEOUT, algorithm: "RS256" });
}

export function decodeToken(token: string): any {
    return verify(token, publicKey, { algorithms: ["RS256"] }, (err: VerifyErrors, decoded: any) => {
        if (err) {
            return null;
        }
        return decoded;
    });
}
