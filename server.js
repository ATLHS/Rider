require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 5000;
const path = require("path");
const passport = require("passport");
const rider = require("./routes/users");

const app = express();

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true })) 

const db = process.env.MONGO_DB_URI;
mongoose
    .connect(
        db,
        { 
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
    )
    .then(() => console.log("MongoDB succesfully connected"))
    .catch(err => console.log(err));


app.use(passport.initialize());

require("./passport")(passport);

app.use("/routes/users", rider);

if (process.env.NODE_ENV === "production") { 
    app.use(express.static(path.join(__dirname, "./client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname + "../client/build/index.html"));
        });
}
app.listen(PORT, () => console.log(`App running on port : ${PORT}`)) 