require("dotenv").config();

const express = require("express");
const app = express();
const pageroutes = require("./routes/pages");

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(pageroutes);

//listen to request:
app.listen(process.env.PORT, () => {
  console.log("Listening on port 4000!!");
});
