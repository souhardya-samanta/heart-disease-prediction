const express = require("express");
require("./db/mongoose");
const app = express();
const port = process.env.PORT || 3000;
const { spawn } = require("child_process");

app.use(express.json());

app.listen(port,() => {
  console.log("Server is up on port " + port);
});

app.get("/", (req, res) => {
  console.log(req.headers);
  res.send("SafeHeart Primary Service");
});


app.post("/predict", async (req, res) => {
  var dataToSend;
  const val = req?.body?.readings;
  const readings = val?.join(" ");
  const childPython = spawn("python", ["pred.py", readings],{
    cwd: __dirname
  });
  childPython.stdout.on("data", (data) => (dataToSend = data.toString()));
  childPython.stderr.on("data", (data) => {
    console.error(data.toString());
  });
  childPython.on("close", (code) => {
    console.log(code);
    res.send({res:dataToSend});
  });
});