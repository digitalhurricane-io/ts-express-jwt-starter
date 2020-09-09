import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";


const privateKey = fs.readFileSync(path.join(__dirname, "..", "id_rsa_priv.pem"));

export const createToken = (userID: number) => {
    return jwt.sign({ sub: userID }, privateKey, { algorithm: "RS256", expiresIn: 15 * 60 });
};