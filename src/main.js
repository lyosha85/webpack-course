require("babel-runtime/regenerator");
require("./main.css");
require("./index.html");

const f = async args => {
  const { a ,b } = args;
  await console.log('hello from the future', a, b);
  console.log("done!");
}

f({a: 1, b: 2});