import { generateKeyPair } from "crypto";
import fs from "fs";

generateKeyPair("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: "spki",
      format: "pem"
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem"
    }
  }, (err: Error, publicKey: string, privateKey: string) => {
    if (err) {
        return;
    }
    fs.writeFileSync(__dirname + "/../src/assets/public.key", publicKey);
    fs.writeFileSync(__dirname + "/../src/assets/private.key", privateKey);
});
