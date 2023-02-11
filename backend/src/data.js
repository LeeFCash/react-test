const express = require('express');
const { dirname } = require('path');
const path = require('path');
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "views")));

app.get("/api", (req, res) => {
    res.render('data');
}).listen(3000);