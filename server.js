if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();

app.set("view engine", "ejs")
app.set("views", __dirname + "/views");

app.get("/", (req,res) =>
{
    res.render("index")
})

app.listen(process.env.PORT || 3000);
