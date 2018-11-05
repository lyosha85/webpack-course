require("babel-runtime/regenerator");
require("./main.css");
require("./index.html");

const f = async () => {
  await console.log('hello from the future');
  console.log("done!")
}