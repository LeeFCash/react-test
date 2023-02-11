const express = require('express');
const { dirname } = require('path');
const path = require('path');
const app = express();
const port = "5000";

app.set("views", path.join(__dirname, "./../views"));
app.set("view engine", "ejs");

//app.use(express.static("views"));
app.use(express.static(path.join(__dirname, "views")));

app.get("/", (req, res) => {
    res.render("data");
})

app.listen(port);