const { spawn } = require("child_process");
var datum;
const childPython = spawn("python", [
  "Heart_Disease_Detection.py",
  "3.0 55.0 0 0 0 0 0 0 0 0 0 0 0",
]);
childPython.stdout.on("data", (data)=>{
    datum=data.toString()
    console.log(datum)
});
childPython.stderr.on("data", (data) => {
  console.error(data.toString());
});
childPython.on("close", (code) => {
  console.log(code);
});
