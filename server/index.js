const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("ResumeMatch server chal raha hai");
});

app.listen(5000, () => {
  console.log("Server 5000 port par chal raha hai");
});