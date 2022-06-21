import User from "../models/User";
import config from "config";
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.get("jwtSecret"), };

export const authMiddleware = (passport: any) => {
  passport.use(
    new JwtStrategy(opts, async (jwt_payload: any, done: any) => {
    const user = await User.findById(jwt_payload.id);

      if (user) {
        done(undefined, user);
      } else {
        done(undefined, false);
      }
    })
  );
};