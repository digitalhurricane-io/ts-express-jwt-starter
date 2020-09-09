import fs from "fs";
import path from "path";
import { Strategy, ExtractJwt } from "passport-jwt";


const pathToKey = path.join(__dirname, "..", "id_rsa_pub.pem");
const PUB_KEY = fs.readFileSync(pathToKey, "utf8");

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
    algorithms: ["RS256"],
};

const strategy = new Strategy(options, (claims, done) => {
    // could grab the user from db here, but we'll just return
    // the claims since we don't need the user on every request
    return done(null, claims);
});

export default (passport: any) => {
    passport.use(strategy);
};