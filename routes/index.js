const express = require('express');
const router = express.Router();

const toDo = [];
const complete = [];

function genId() {
  let id = 1;
  let idFound = true;

while (idFound) {
  let task = toDo.find(function(task) {
    return task.id == id;
  });
  if (task) {
    id++;
  } else {
    idFound = false;
  }
}
return id;
}

router.get("/", function(req, res){
  res.render('todo', {toDo: toDo, complete: complete});
});

router.post("/create", function(req, res){
  console.log("this is todo", req.body.addTask);
let obj = {
  id: genId(),
  complete: false,
  text: req.body.addTask
}
  toDo.push(obj);
  res.redirect("/");
});

router.post("/complete/:id", function(req, res) {
  let task = toDo.find(function(task) {
    return task.id == req.params.id;
  });
  let index = toDo.indexOf(task);
  complete.push(task);
  toDo.splice(index, 1);
  res.redirect("/");
  });

module.exports = router;
// what file do you want to the information to go to, what information is going to this file

// redirect: makes a Get call to the file you want to go to
