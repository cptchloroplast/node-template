import { generateKeyPair } from "crypto";
import fs from "fs";

const path = __dirname + "/../src/assets";

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
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
    fs.writeFileSync(path + "/public.key", publicKey);
    fs.writeFileSync(path + "/private.key", privateKey);
});
