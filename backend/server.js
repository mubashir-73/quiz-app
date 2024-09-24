const express = require("express");
const app = express();
const path = require("path");

//listen to request:
app.listen(4000, () => {
  console.log("Listening on port 4000!!");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend", "index.html"));
});
