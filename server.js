const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 5000;
const path = require("path");

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true })) 

app.get("/signup", (req, res) => {
    const signup = [
        {name: "your name"},
        {firstname: "your firstname"},
        {number: "your number"}
    ];
    res.json(signup);
})

if (process.env.NODE_ENV === "production") { 
    app.use(express.static(path.join(__dirname, "./client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname + "../client/build/index.html"));
        });
}
app.listen(PORT, () => console.log(`App running on port : ${PORT}`))