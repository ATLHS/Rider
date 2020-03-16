require('dotenv').config();
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const Rider = mongoose.model("Rider");
const keys = process.env.SECRET_OR_KEY;
const opts = {};


opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      Rider.findById(jwt_payload.id)
        .then(rider => {
          if (rider) {
            return done(null, rider);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};