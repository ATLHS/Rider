require('dotenv').config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretOrKey = process.env.SECRET_OR_KEY;

// Validate input functions
const validateSigninInput = require("../validation/signin");
const validateLoginInput = require("../validation/login");

// Rider model
const Rider = require("../models/Rider");

// Rider sign up route
router.post("/ridersignin", (req, res) => {
    const {errors, isValid} = validateSigninInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    Rider.findOne({email: req.body.email}).then(rider => {
        if(rider){
            return req.status(400).json({email: "Un compte existe déja avec l'adresse email."})
        } else {
            const newRider = new Rider({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password1
            });
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newRider.password, salt, (err, hash) => {
                    if (err) throw err;
                    // hash rider password before save
                    newRider.password = hash;
                    // save a rider and return data
                    newRider
                    .save()
                    .then(rider => res.json(rider))
                    .catch(err => console.log(err));
                });
            });
        }
    })
})

// Rider log in route
router.post("/riderlogin", (req, res) => {
    const {errors, isValid} = validateLoginInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    Rider.findOne({email}).then(rider => {
        // rider user exist ?
        if(!rider){
            return res.status(400).json({emailNotFound: "Email not found."});
        }
        // check rider password
        bcrypt.compare(password, rider.password).then(isMatched => {
            if(isMatched){
                const payload = { id: rider.id, name: rider.name };
                  jwt.sign(
                    payload,
                    secretOrKey,
                    {
                      expiresIn: 31556926 // 1 year in seconds
                    },
                    (err, token) => {
                      res.json({
                        success: true,
                        token: "Bearer " + token
                      });
                    }
                  );
                } else {
                  return res.status(400).json({ passwordincorrect: "Password incorrect" });
                }
        })
    })
})

module.exports = router;

