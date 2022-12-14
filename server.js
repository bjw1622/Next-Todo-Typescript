const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
const { default: Axios } = require("axios");
const router = express.Router();

app.use(bodyParser.json({ type: "application/json" }));
app.use(cors());

let todos = [];

// 목록 가져오기
app.get("/todo", function (req, res) {
  res.json(todos);
});

app.post("/todo", function (req, res) {
  todos.push(req.body);
  res.send(todos);
});

app.delete("/todoEntry", function (req, res) {
  todos = [];
});

app.delete("/todo", function (req, res) {
  const findInex = todos.find((todo) => todo.id === req.body.Id);
  const index = todos.indexOf(findInex);
  todos.splice(index, 1);
  res.json(todos);
});

app.put("/todoInputValue", function (req, res) {
  const findIndex = todos.find((todo) => todo.id === req.body.data.Id);
  findIndex.inputValue = req.body.data.InputValue;
  res.json(todos);
});

app.put("/todoCheckValue", function (req, res) {
  const findIndex = todos.find((todo) => todo.id === req.body.data.Id);
  findIndex.check = !findIndex.check;
  res.json(todos);
});

app.listen(3001);
