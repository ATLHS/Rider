const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 5000;

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

app.listen(PORT, () => console.log(`App running on port : ${PORT}`))